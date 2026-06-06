export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUri?: string;
}

export interface PlaceReviewsResult {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

const PLACE_ID = 'ChIJHQSne8F7m4AR-P8MgnebMBk';

export async function getPlaceReviews(): Promise<PlaceReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=displayName,rating,userRatingCount,reviews&languageCode=en&key=${apiKey}`,
      { next: { revalidate: 86400 } } // refresh once per day
    );
    if (!res.ok) return null;
    const data = await res.json();

    return {
      rating: data.rating ?? 5,
      totalReviews: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).map((r: any) => ({
        author: r.authorAttribution?.displayName ?? 'Google Reviewer',
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        photoUri: r.authorAttribution?.photoUri,
      })),
    };
  } catch {
    return null;
  }
}
