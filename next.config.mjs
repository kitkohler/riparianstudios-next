/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
  async redirects() {
    return [
      // Canonical domain — redirect non-www to www (set this at DNS/hosting level too)
      // Old service pages -> /services
      { source: '/video-production',     destination: '/services', permanent: true },
      { source: '/brand-development',    destination: '/services', permanent: true },
      { source: '/copywriting',          destination: '/services', permanent: true },
      { source: '/creativedirection',    destination: '/services', permanent: true },
      { source: '/livestream-services',  destination: '/services', permanent: true },
      // Old misc pages
      { source: '/nevada-county',        destination: '/about',    permanent: true },
      { source: '/why-video',            destination: '/',         permanent: true },
      // Blog index -> work
      { source: '/blog',                 destination: '/work',     permanent: true },
      // Migrated blog posts -> /work/[slug]
      { source: '/blog/2020/10/20/bear-yuba-land-trust-kicks-off-fundraising-for-independence-trail-rebuild', destination: '/work/bear-yuba-land-trust-independence-trail', permanent: true },
      { source: '/blog/2021/11/30/nevada-county-better-together-film-showcases-local-affordable-housing-projects', destination: '/work/nevada-county-better-together', permanent: true },
      { source: '/blog/2022/2/10/alternative-suspension-program-gains-steam-with-film-by-riparian-studios', destination: '/work/alternative-suspension-program', permanent: true },
      { source: '/blog/2022/8/11/colin-construction', destination: '/work/cancer-center-film', permanent: true },
      { source: '/blog/2022/10/10/sierra-harvest-food-project', destination: '/work/sierra-harvest', permanent: true },
      { source: '/blog/2022/8/11/community-solutions', destination: '/work/community-solutions', permanent: true },
      { source: '/blog/2022/5/24/riparian-studios-film-premieres-in-theaters-across-nevada-county-today', destination: '/work/nevada-county-theater-premiere', permanent: true },
      { source: '/blog/2021/5/18/ready-set-go-film-released-alongside-handbook', destination: '/work/ready-set-go', permanent: true },
      { source: '/blog/2020/9/14/visibility-through-art', destination: '/work/visibility-through-art', permanent: true },
      { source: '/blog/2020/4/8/ponderosa-west-film-released', destination: '/work/ponderosa-west', permanent: true },
      { source: '/blog/2018/7/20/youth-ride-against-racism', destination: '/work/youth-ride-against-racism', permanent: true },
      { source: '/blog/2018/10/18/riparian-studios-helps-educate-parents-about-changes-in-teen-nicotine-use', destination: '/work/nevada-county-schools-nicotine', permanent: true },
      { source: '/blog/2018/12/11/growing-together-announced-as-an-official-selection-at-2019-wild-amp-scenic-film-festival-selection', destination: '/work/growing-together', permanent: true },
      { source: '/blog/2019/1/8/two-riparian-studios-films-to-be-screened-during-2019-wild-and-scenic-film-festival', destination: '/work/wild-scenic-2019', permanent: true },
      { source: '/blog/2018/10/10/riparian-studios-tackles-2018-film-for-non-profit-sierra-harvest', destination: '/work/sierra-harvest-2018', permanent: true },
      { source: '/blog/2019/11/20/trailer-for-legendary-vineyards', destination: '/work/legendary-vineyards', permanent: true },
      { source: '/blog/2017/7/11/zinfandel-advocates-producers-2018-zinex-grand-tasting-promo-video', destination: '/work/zap-zinex', permanent: true },
      { source: '/blog/2018/5/25/riparian-studios-completes-video-project-for-grass-valley-non-profit-zinfandel-advocates-producers', destination: '/work/zap', permanent: true },
      // Dropped blog posts -> home
      { source: '/blog/2022/12/27/why-hiring-your-nephew-to-do-your-company-video-is-a-recipe-for-disaster', destination: '/', permanent: true },
      { source: '/blog/2022/12/27/the-benefits-of-working-with-a-local-video-production-company', destination: '/', permanent: true },
      { source: '/blog/2022/12/27/5-reasons-why-your-non-profit-needs-a-video', destination: '/', permanent: true },
      { source: '/blog/2019/07/27/how-to-find-a-film-crew-in-a-small-town-like-nevada-city7', destination: '/', permanent: true },
      { source: '/blog/2022/10/riparian-studios-launches-led-lighting-brand', destination: '/', permanent: true },
      { source: '/blog/2023/3/22/glowflock-raises-100-of-indiegogo-goal-in-8-hours', destination: '/', permanent: true },
      { source: '/blog/2016/4/26/in-progress-hot-mess-hot-sauce-branding', destination: '/', permanent: true },
      { source: '/blog/2018/5/25/video-shoot-for-vrumble-app-hype-video-a-wrap', destination: '/', permanent: true },
      { source: '/blog/2018/7/25/vrumble-app-launched-video-released', destination: '/', permanent: true },
      // Catch-all for any remaining /blog/* paths
      { source: '/blog/:path*', destination: '/work', permanent: true },
    ];
  },
};

export default nextConfig;
