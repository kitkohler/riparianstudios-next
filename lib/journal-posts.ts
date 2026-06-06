export interface JournalPost {
  slug: string;
  title: string;
  date: string;       // Display date e.g. "April 2024"
  isoDate: string;    // For sorting e.g. "2024-04-10"
  category: string;
  excerpt: string;
  body: string;
  videoId?: string;
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'when-a-brand-new-nonprofit-calls-about-wildfire',
    title: 'When a Brand New Nonprofit Calls You About Wildfire',
    date: 'April 2024',
    isoDate: '2024-04-10',
    category: 'Field Notes',
    videoId: 'ri5NJbvwiwo',
    excerpt: "The Wildfire Ready Coalition came to us with a clear mission and a film idea that had real urgency behind it. What followed was Standing Dead.",
    body: `I don't pitch. Almost every project that comes through Riparian Studios starts with a phone call from someone who has seen our work and has something they need to say. That's how the Wildfire Ready Coalition of Nevada County found us — a brand new volunteer-driven nonprofit with a clear mission and a film idea that had real urgency behind it.

They had organized a field trip to Berry Creek, the Butte County community that was essentially erased by the North Complex Fire in September 2020. Firewise community leaders, emergency management officials, and fire scientists made the trip together to see the aftermath firsthand. They wanted a film that documented what they found and made the case that Nevada County was next.

The result is Standing Dead: Overstocked, Overgrown, Overdue.

Cinematographer Val Camp and I traveled into the burn scar with Jo Ann Fites-Kaufman, a retired USFS fire behavior analyst and Nevada County resident who also serves as Coalition President. What we found was staggering. Miles of gray and white standing dead trees, the skeleton of what had been a living forest. The Brush Creek Work Center, a Forest Service station that had been immaculately maintained, reduced to ruin despite the firefighters there doing everything right. Jo Ann appears in some of that footage, walking through the wreckage. We spent time in that landscape and let it speak.

One decision we made early and held to throughout production: we would not film in Berry Creek itself, where sixteen people died. There is a version of this story that turns tragedy into spectacle. That is not the film we were making. The burn scar gave us everything we needed to convey the scale of what happened without treating someone else's loss as a visual device.

The narration presented its own creative challenge. Jo Ann's voice carries the film without her serving as a traditional on-screen interview subject. Writing narration that sounded like her, that used her language and her authority without becoming a lecture, took several drafts and a clear governing principle: she speaks only when she is the only one who can say it. Her personal witness, her scientific understanding of fire behavior, and her view from inside Nevada County give the film a through-line that the interviews alone couldn't provide.

The film premiered on March 28 at the Don Baggett Theatre at Nevada Union High School in Grass Valley to an audience of 140 people, followed by a panel discussion with wildfire experts and community members. It has since been viewed nearly 2,500 times on YouTube.

That number matters to us. Not as a vanity metric, but as evidence that the film is doing what it was built to do: moving people from awareness toward action. That is what good documentary work is for.

If your organization is working on something that deserves to be seen, we would like to hear about it.`,
  },
];

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find(p => p.slug === slug);
}

export function getRecentJournalPosts(count = 4): JournalPost[] {
  return [...JOURNAL_POSTS]
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
    .slice(0, count);
}
