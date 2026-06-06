export interface WorkPost {
  slug: string;
  title: string;
  body: string;
  videoId?: string;        // YouTube video ID if matched
  videoMatchTitle?: string; // Title of matched YouTube video
  videoMatchScore?: number; // Fuzzy match confidence
  needsVideo?: boolean;     // true = no video found, needs manual attention
  date?: string;
}

export const WORK_POSTS: WorkPost[] = [
  {
    slug: 'bear-yuba-land-trust-independence-trail',
    title: 'Bear Yuba Land Trust Kicks Off Fundraising for Independence Trail Rebuild',
    date: 'October 2020',
    needsVideo: true,
    body: `In August of this year, the wooden flumes of the iconic accessible Independence Trail were severely damaged by the Jones Fire. Ignited by lightning from the now notorious lightning storm of late summer 2020, they made quick work of much of the trail built in by John Olmstead in the 1970s.

To kick off Bear Yuba Land Trust's rebuilding fundraiser, BYLT teamed up with Alden Olmstead and Riparian Studios to produce a trailer for a more comprehensive film about the trail's origins, history, and the damage that occurred in the Jones Fire. The trailer, which premiered at BYLT's Open Spaces, Wild Places Gala on Friday, blends archival footage and photos with fire footage and photography provided by Elias Funez of The Union as well as post-fire footage shot by Riparian Studios founder Kit Kohler. Riparian Studios also leveraged their post-production facility in Nevada City to bring the piece together in collaboration with Olmstead and BYLT's Erika Seward.

For more on how you can help in the effort to rebuild Nevada City's historic Independence Trail, visit BYLT's Independence Trail Rebuild GoFundMe Page.`,
  },
  {
    slug: 'nevada-county-better-together',
    title: 'Nevada County "Better Together" Film Showcases Local Affordable Housing Projects',
    date: 'November 2021',
    videoId: 'jhuNOoXFYpU',
    videoMatchTitle: 'Better Together: Affordable Housing in Nevada County',
    videoMatchScore: 0.88,
    body: `A new collaboration between the County of Nevada and Riparian Studios has just been released. Better Together focuses on illuminating the affordable housing crisis facing Nevada County residents and highlights several projects across Nevada County that are working to address the issue and retain local service industry workers, families, and seniors on a fixed income. Housing projects featured in the film include the Truckee Artists Lofts, Cashin's Field in Nevada City, Lone Oak Senior Housing in Penn Valley, and Brunswick Commons in Grass Valley.

The film's documentary-style format includes interviews from Nevada County employees include Ryan Gruver, Mike Dent and Phebe Bell, Regional Housing Authority Executive Director Gus Becerra. It also includes Nevada County residents directly impacted by the affordable housing, including a Truckee single mother of two living in the Truckee Artists Lofts and a woman living at Lone Oak.

A film release party at Lone Oak Senior Housing was attended by many residents, who were excited to see their community featured in the film.

To learn more about Nevada County's Better Together initiative, visit Nevada County Health and Human Services Website.`,
  },
  {
    slug: 'alternative-suspension-program',
    title: 'Alternative Suspension Program Gains Steam with Film by Riparian Studios',
    date: 'February 2022',
    videoId: 'yXj7oj-u4Is',
    videoMatchTitle: 'RAYS of Change',
    videoMatchScore: 0.82,
    body: `The Nevada County Superintendent of Schools has just released a film promoting the newly launched RAYS Suspension Alternative Program. RAYS, which stands for Responsible Accountable Youth Solutions, has already been rolled out at Silver Springs High School and is set to launch to Lyman Gilmore Middle School and Nevada Union High School later this year. The film, a second collaboration between Riparian Studios and the Superintendent of Schools, centers RAYS Student Team members Kayley Rattray, Isaiah Arendell, Lyric Kernmount and Abbigail Wright. Vice Principal Scott Mikal-Heine is also interviewed.

The RAYS program takes a fresh look at student discipline, applying a restorative model that seeks to help students who have gotten into trouble with the root cause of their problems rather than punishment alone. Students meet in a circle of their peers, who go through a pre-planned curriculum to identify how the student can be supported and how they can own up to their mistake.

"When students choose the restorative path, that student is less likely to do it again because they want to live up to the expectations of their peers, their friends," says Vice Principal Mikal-Heine in the film.

The film is now released and has been shown to several audiences to a positive response. "The film has been SO well-received," says Marlene Mahurin, Program Director for RAYS. "We hope to reengage with Riparian Studios for a follow-up as the RAYS program develops."`,
  },
  {
    slug: 'cancer-center-film',
    title: 'Auburn Construction Company Features Groundbreaking Cancer Treatment Center in Film',
    date: 'August 2022',
    videoId: 'Sxv2YtIs_Xo',
    videoMatchTitle: 'Colin Construction Company | Leading Projects to Exceed Patient Care Goals',
    videoMatchScore: 0.80,
    body: `Auburn-based hospital construction firm Colin Construction Company has released a film documenting the process of retrofitting an existing 1970s office building into a state-of-the-art cancer treatment center in Walnut Creek, California. The project, a partnership between Colin Construction Company, BASS Medical Group, and Nacht & Lewis Architects was completed in early 2022. A first of its kind for a private medical office, the oncology center includes cancer treatment technology including numerous radiation treatment machines from Elekta as well as a combined LINAC-MRI device made by ViewRay called the MRIdian. These sophisticated devices are typically only seen in hospital settings at university medical centers.

Northern California-based Riparian Studios was selected as the production company for this and another Colin Construction Company video. "We started production the moment the first sawblade hit the concrete foundation, and we didn't stop until the week before the facility opened," says Kit Kohler, Riparian Studios' Creative Director. "The prospect of working on a long-term project really excited us." The film mixes live action footage of pivotal and unique moments such as the placement of copper panels and lead bricks with timelapse footage captured on several GoPro cameras to capture the otherwise slow progress of construction work in a visually compelling way.

The facility is now open to the public and is operated by BASS Medical Group.`,
  },
  {
    slug: 'sierra-harvest',
    title: 'Local Production Company Creates Ad for Nevada County School Food Initiative',
    date: 'October 2022',
    needsVideo: true,
    body: `Nevada City, CA — Riparian Studios, a production company based in Nevada City, is excited to announce their involvement in the production of a fun and relatable ad for the Nevada County school food program.

The ad stars local actor Cole DeGregorio as a boy who takes school lunch matters into his own hands and creates a kitchen disaster, highlighting the challenges that parents face in coming up with lunch for their children every school day.

"We wanted to create an ad that resonated with parents and showed the struggles of feeding their kids every day," said Kit Kohler, Creative Director at Riparian Studios. "We think the ad does a great job of capturing the spirit of that, while also being pretty silly and fun. Cole is hilarious."

The ad is part of a larger effort by the Nevada Joint Union High School District and Sierra Harvest, a nonprofit, to provide locally sourced, nutritious food to students in the district. The first step in that process, now completed, was to create a Joint Powers Authority.

"A lot still needs to happen to see if this idea can come to fruition, but we wanted to establish a formal entity in order that we can be eligible for state and federal grant funding — and to establish a structure by which we can initiate an in-depth analysis in planning for this possibility," says Brett McFadden, superintendent of the Nevada Joint Union High School District.

Riparian Studios is proud to be a part of this important initiative and hopes the ad will help raise awareness about the need for locally sourced, nutritious food in schools.`,
  },
  {
    slug: 'community-solutions',
    title: 'National Non-Profit Taps Nevada City Company for Film Sponsored by Wayfair',
    date: 'August 2022',
    videoId: 'eYEQgIKGst8',
    videoMatchTitle: 'Nevada County is in the Last Mile for Ending Veteran Homelessness',
    videoMatchScore: 0.90,
    body: `National homelessness non-profit Community Solutions tapped Riparian Studios to produce a film focused on the work they are doing locally to end homelessness. The film focuses on the local team working on the ground in Western Nevada County to tackle the issue of veteran homelessness, bringing the total number to "functional zero." The program, called Built for Zero, has been used in several other counties across the country to use a data-driven approach to eliminating homelessness in participating communities.

"Joining Built for Zero was about understanding what the data was telling us," says Nevada County Housing Resource Manager Brendan Phillips. "My fear had always been that data would start to dehumanize [...] so that we could look at the numbers. I couldn't say that that is further from the truth."

The film was further boosted by the corporate sponsorship of Wayfair, an online furniture and decor retailer, who chose to promote the film across their own media channels, including their blog.

"As an organization passionate about the wellbeing of every member of our community, it was a privilege to be chosen for this work," says Kit Kohler, Riparian Studios owner. "After meeting the team working on reaching Functional Zero in Nevada County, we have no doubt that they will deliver on this ambitious goal."

Local organizations highlighted include Hospitality House and The County of Nevada.`,
  },
  {
    slug: 'nevada-county-theater-premiere',
    title: 'Riparian Studios Film Premieres in Theaters Across Nevada County',
    date: 'May 2022',
    needsVideo: true,
    body: `Riparian Studios is excited to announce the release of two short advertisements that will be shown in the Del Oro Theater, Sutton Cinemas, the Onyx Theater and all venues showing the Nevada City Film Festival. The films, titled "Future," include a :30 and a :90 second version.

While they may not be the "feature presentation," the films, created in partnership with Nevada County, highlight the increasing frequency of disasters like wildfires and snowstorms, and pay off with a call to action to take a survey. The survey asks residents to prioritize what they think is most important to prepare for disasters, from evacuation route improvement to communications system upgrades. Results will help guide Nevada County efforts in the future.

"Once again it's an honor to serve our community with these films," says Kit Kohler, the films' director and narrator. "It's always a dream come true when you get to work on a project that has the potential to make a real impact, and the County has given us that opportunity on numerous occasions."

A 30 second version of the ad will run from June 3rd through September 1st ahead of all films at the Del Oro, Sutton Cinemas and The Onyx. The :90 extended cut will air before films screened at the Nevada City Film Festival.`,
  },
  {
    slug: 'ready-set-go',
    title: 'Ready, Set, Go Film Released Alongside Handbook',
    date: 'May 2021',
    videoId: 'Gi20VamkbqU',
    videoMatchTitle: 'Ready Nevada County: Ready, Set, Go!',
    videoMatchScore: 0.95,
    body: `A Riparian Studios-produced film accompanying Nevada County's "Ready, Set, Go" Handbook has been released. The film, made in partnership with Nevada County and FREED Center for Independent Living features local first responders and Office of Emergency Services (OES) staff as well as local residents. Interview subjects include Ana Acton of FREED, Paul Cummings and Jenn Tamo of Nevada County OES, Lt. Bob Jakobs of the Nevada County Sheriff's Department, and CAL FIRE Chiefs Brian Estes and Jim Mathias.

Rather than follow the traditional educational video approach, Riparian Studios owner Kit Kohler and Consulting Producer Sheila Cameron chose to focus on personal stories and expert interviews to reinforce information found in the Ready, Set, Go Handbook. "We viewed the film more as a supplement to the handbook than a replacement," says Kohler. "It's designed to cover the subjects at a high level so that when folks open the handbook up, they'll have the familiarity and interest to take a deeper dive."

New in this film is the use of an American Sign Language interpreter. Courtney Williams of FREED contributed her time and skill to interpret the entire film, and the ASL translation is included in the final film for accessibility. Additionally, stills from the film were used in this year's handbook, designed by Suzanne Calkins. Other image contributors to the final film include CAL FIRE, Drone Cowboys, and Union photographers John Hart and Elias Funez.

This film represents Riparian Studios' second production in partnership with the County of Nevada Office of Emergency Services. A third short is currently in production.`,
  },
  {
    slug: 'visibility-through-art',
    title: 'CHIRP Shares the Story of Visibility Through Art',
    date: 'September 2020',
    videoId: 'AOxNguG0Sv0',
    needsVideo: true, // Not in playlist, flagged for manual review
    body: `Local film and video production company Riparian Studios is honored to announce the release of a short film created to tell the story of the Visibility Through Art project. The art show brings local non-native artists together with Nisenan tribe members to create artwork that authentically represents the Nisenan and their rich but nearly forgotten history.

The simple film, created by Riparian Studios' founder Kit Kohler, premiered at a recent fundraiser for CHIRP, the California Heritage Indigenous Research Project. The livestreamed event featured performances from Lyla June, MaMuse and Marie Sioux as well as talks and stories from Nisenan tribal members.

"Working with Shelly Covert, Spokesperson of the Nevada City Rancheria Nisenan and Executive Director of CHIRP is a tremendous honor," says Kit. "As a resident of Nevada County, having a way to give back to the original inhabitants and caretakers of this beautiful place is truly a gift."

A recording of the livestream can be viewed on YouTube. Those wishing to contribute funds to the Nisenan's continued struggle to regain federal recognition can do so by contributing to CHIRP.`,
  },
  {
    slug: 'ponderosa-west',
    title: 'Nevada County Releases Film on Fuel Break Project',
    date: 'April 2020',
    needsVideo: true,
    body: `NEVADA CITY, CA — The County of Nevada today released a film telling the story of the Ponderosa West Grass Valley Defense Zone project, a shaded fuel break currently in progress, funded by a grant from CAL FIRE's Fire Prevention Program. The film's narrative is shared in a series of interviews with various project stakeholders from the County of Nevada, CAL FIRE, and the Fire Safe Council of Nevada County. The film, produced by Riparian Studios, was produced and directed by Kit Kohler with cinematography from Val Camp. Sheila Cameron, a communications contractor for the County, was the consulting producer.

"It's a tremendous honor for us to be able to work with this team that's making our community safer and more resilient to the threat of wildfire," says Riparian Studios owner Kit Kohler. "We are hopeful that this film will raise awareness about what our county is doing in the threat of increased fire risk, and that it will inspire community members to research the ways they can participate in this effort."

Riparian Studios is a boutique creative agency and production company located in Nevada County, a creative community nestled in the Sierra Foothills.`,
  },
  {
    slug: 'youth-ride-against-racism',
    title: 'Youth Ride Against Racism',
    date: 'July 2018',
    needsVideo: true,
    body: `When local youth mentor Xylem Lara Dey reached out for help capturing the Youth Ride Against Racism in Nevada City's downtown, we didn't hesitate. The ride, organized by local black middle schoolers Izaiyah and Nature, was their way of standing up to the anonymous man who racially harassed them while riding their bikes on Nevada City's Spring Street.

With event day help of an all-star team of local production talent including Akhi Lavoie, Ahmed Ragab, and drone pilot Paul Marwood, Riparian Studios' Kit Kohler volunteered his time and creative energy to produce a short documentary sharing these two young men's story. The video, shared on Facebook, has been viewed over 18,000 times as of the publishing of this post — a testament to just how inspirational these two young men's story really is. We can't wait to see what these two tackle next.`,
  },
  {
    slug: 'nevada-county-schools-nicotine',
    title: 'Riparian Studios Helps Educate Parents About Changes in Teen Nicotine Use',
    date: 'October 2018',
    needsVideo: true,
    body: `Riparian Studios was tapped this summer by the Nevada County Superintendent of Schools' Tobacco User Prevention Education program (TUPE) to help produce a video as part of their ongoing efforts to educate parents about how nicotine and cannabis consumption have changed among teens. "There are a lot of new products on the market that didn't exist when today's parents were teenagers," said Marlene Mahurin, Tobacco Use Prevention Education program coordinator for the Nevada County Superintendent of Schools. "Our goal is to educate them on current youth trends with vaping and marijuana and provide support and resources."

The piece, spearheaded by producer Jeannine Glista and funded by a grant from the California Department of Education, was screened at back-to-school events across the county. Riparian Studios' Val Camp acted as cinematographer while founder Kit Kohler was responsible for post production, including motion graphics. The video's release was written up in the local press, including The Union.`,
  },
  {
    slug: 'growing-together',
    title: 'Growing Together — Official Selection at Wild & Scenic Film Festival',
    date: 'December 2018',
    videoId: 'wbFx79V2KbU',
    videoMatchTitle: 'Growing Together',
    videoMatchScore: 0.98,
    body: `Riparian Studios is thrilled to announce that our film, "Growing Together," is an official selection at the 2019 Wild and Scenic Film Festival. The film, produced for local non-profit Sierra Harvest, tells the stories of three women, Jeanne Mosley, Andrea Mertens, and Sandra Higereda, who were impacted by the organization's work.

The mission of Sierra Harvest is to connect Sierra Foothills farmers and families, forging a bond that will strengthen the area's local agriculture system and improve the health of its residents. In 2018 alone, they helped deliver farm to school education to 9,500 children, trained 59 sustainable farmers, and built 71 gardens for families in need. Filmmakers Kit Kohler and Val Camp worked closely with Sierra Harvest co-founders Aimee Retzler and Malaika Bishop to bring the stories to life.

Wild and Scenic Film Festival, a five day festival focusing on films highlighting environmentalism and adventure, takes place in western Nevada County in the towns of Nevada City and Grass Valley. While Sierra Harvest has had films selected for the festival before, this is Kit's first time working with the non-profit.

"It's been an absolute honor to work with a local organization I respect as much as Sierra Harvest," says Kit, who directed and edited the film. "I'm thrilled that our film was selected, and can't wait to collaborate with Aimee and Malaika again in the future."

The film will be screened on Saturday, January 19 at the Vet's Hall during the Mid-Day (1:30pm) and Afternoon (4:30pm) time slots.`,
  },
  {
    slug: 'wild-scenic-2019',
    title: 'Two Riparian Studios Films Screened at 2019 Wild and Scenic Film Festival',
    date: 'January 2019',
    needsVideo: true,
    body: `In addition to the previously announced screening of Growing Together, a film produced for local Nevada City non-profit Sierra Harvest, a second Riparian Studios film will be screened as part of the Martin Luther King Day weekend event series. "The Youth Ride Against Racism," a short documentary about a ride organized by two young men facing an incident of racial harassment, is now slated to be screened on Monday during festivities immediately following this year's "Love Walk."

The Love Walk, described as "a full day multi-cultural festival celebrating diversity in Nevada County," is a collaborative effort between the Wild and Scenic Film Festival, Community Beyond Violence, and Creating Communities Beyond Racial Bias. The festival will begin at 11:00am with a walk from the corner of Mill and Neal Streets in Grass Valley to the Grass Valley Elks Lodge, where the remainder of the festival will take place. Beginning at noon, a series of films will be screened including The Youth Ride Against Racism.

Screening Times:

Saturday, January 19 — Growing Together
Nevada City Veteran's Memorial (415 N Pine St, Nevada City, CA)
1:30pm–3:45pm and 4:30pm–6:30pm

Monday, January 21 — Youth Ride Against Racism
Grass Valley Elks Lodge (109 S School St, Grass Valley, CA)
12:00pm–1:30pm`,
  },
  {
    slug: 'sierra-harvest-2018',
    title: 'Riparian Studios Tackles 2018 Film for Non-Profit Sierra Harvest',
    date: 'October 2018',
    videoId: 'wbFx79V2KbU',
    videoMatchTitle: 'Growing Together',
    videoMatchScore: 0.85,
    body: `Last week, Nevada City-based video production company Riparian Studios completed work on Growing Together, a 10 minute film highlighting the stories of three Nevada County residents directly impacted by the work of local food non-profit Sierra Harvest. With stories about a local farmer struggling to create a sustainable business, a mother hoping to share the joy of gardening with her seven children, and a pre-school teacher who doesn't like vegetables, Growing Together highlights the varied ways in which the non-profit impacts the community.

Past projects for Sierra Harvest had included Riparian Studios' cinematographer Val Camp, but this year brought founder Kit Kohler onboard as producer and editor. As with past films, this year's production has been submitted for consideration to SYRCL's 2019 Wild and Scenic Film Festival. The film will be released later this year.`,
  },
  {
    slug: 'legendary-vineyards',
    title: 'Trailer Released for Film Series Focused on Legendary Vineyards',
    date: 'November 2019',
    needsVideo: true,
    body: `Riparian Studios and Zinfandel Advocates and Producers have teamed up again to produce a series of CDFA-funded films promoting Zinfandel wine in California and beyond. This time, the series is focused in on "Legendary Zinfandel Vineyards" made into vineyard designated Zinfandel. Vineyard designates wines are wines that are at least 95% sourced from one single vineyard, unlike many other types of wine that include grapes from various different vineyards.

Riparian Studios' producer and editor Kit Kohler along with cinematographer Val Camp travelled the state visiting some of the most unique, special, and sought after vines in the country for the films. Vineyards featured in the series include Monte Rosso, Bedrock, Lytton Springs and Maple Vineyard in Sonoma County, Black Sears and RW Moore in Napa, Lizzy James, ZinStar and Jesse's Grove in Lodi, and Peachy Canyon D Block, Ueberroth, and Paper Street in Paso Robles. Interviews include chats with Larry Turley of Turley Wine Cellars, Janell Dusi of J Dusi, Joel Peterson of Once and Future, and David Gates of Ridge, among many, many others.`,
  },
  {
    slug: 'zap-zinex',
    title: 'Zinfandel Advocates & Producers — 2018 ZinEx Grand Tasting Promo Video',
    date: 'July 2017',
    needsVideo: true,
    body: `Just wrapped up this quick promo video for our client, Zinfandel Advocates and Producers. The annual Grand Tasting event represents the culmination of a long weekend of wine events organized by "ZAP," named Zinfandel Experience.

The Grand Tasting represents the largest single varietal tasting event in the world, with hundreds of Zins to taste, dozens of vintners to meet and food pairings to enjoy. Tickets can be purchased at ZinfandelExperience.com.`,
  },
  {
    slug: 'zap',
    title: 'Riparian Studios Completes Video Project for Grass Valley Non-Profit ZAP',
    date: 'May 2018',
    needsVideo: true,
    body: `After working for nearly a year on the ambitious project, Riparian Studios has completed a series of videos for Zinfandel Advocates & Producers. The series, titled Zinfandel Stories: America's Heritage Grape, showcases the nine major Zinfandel growing regions in the state of California, and was funded by a grant from the California Department of Agriculture (CDFA).

The video project was a collaboration between ZAP's own Robert Trent, Riparian Studios' Kit Kohler, and Cinematographer Val Camp. Kit and Val travelled the state for the project starting in the summer of 2017, going as far south as Rancho Cucamonga and as far north as Ukiah. By the fall, the team had really gotten in the flow. By the winter, the focus was post-production, as Kit dove into the editing and post-production in his edit suite on Nevada City's scenic Broad Street.

This spring, the videos were released to Zinfandel Advocates & Producers for display on their website, social media channels, and at regional events planned throughout the year.`,
  },
];

export function getPostBySlug(slug: string): WorkPost | undefined {
  return WORK_POSTS.find(p => p.slug === slug);
}
