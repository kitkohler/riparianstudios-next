const YT_API_KEY = process.env.YOUTUBE_API_KEY!;
const YT_PLAYLIST_ID = 'PLIng2qlI0bBoyVMaqSmYKX-jcxcyQuTFb';

export interface YTVideo {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  year: number;
  position: number;
  channelTitle: string;
}

export async function getPlaylistVideos(): Promise<YTVideo[]> {
  const items: YTVideo[] = [];
  let pageToken = '';

  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YT_PLAYLIST_ID}&maxResults=50&key=${YT_API_KEY}${pageToken ? '&pageToken=' + pageToken : ''}`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // re-fetch hourly
    if (!res.ok) throw new Error(`YouTube API error ${res.status}`);
    const data = await res.json();

    for (const item of data.items) {
      const s = item.snippet;
      const videoId = s.resourceId?.videoId;
      if (!videoId) continue;
      const thumb = s.thumbnails?.maxres?.url || s.thumbnails?.standard?.url || s.thumbnails?.high?.url || '';
      items.push({
        id: item.id,
        videoId,
        title: s.title,
        description: s.description,
        thumbnail: thumb,
        year: new Date(s.publishedAt).getFullYear(),
        position: s.position,
        channelTitle: s.videoOwnerChannelTitle || '',
      });
    }

    pageToken = data.nextPageToken || '';
  } while (pageToken);

  return items;
}
