export const capabilities = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Editorial, performant sites built with care from grid to deploy.",
    lede: "Responsive websites built to feel premium, perform well and tell the brand story clearly.",
    details: [
      "Landing pages, portfolios, business sites and campaign microsites.",
      "Frontend implementation with motion, accessibility and responsive polish.",
      "Launch-ready structure for SEO, forms and future updates.",
    ],
    animation: "web",
  },
  {
    slug: "ux-ui-design",
    title: "UX / UI Design",
    short: "Interfaces that feel inevitable — clear, considered, premium.",
    lede: "Product screens and flows shaped around clarity, usability and a premium visual system.",
    details: [
      "User journeys, wireframes and interaction decisions.",
      "High-fidelity screens with consistent spacing, type and components.",
      "Design handoff that helps development move faster.",
    ],
    animation: "ui",
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "Native-quality mobile and web apps with refined interaction.",
    lede: "Application experiences designed and developed from core idea to usable product.",
    details: [
      "Feature planning, screen structure and product flow.",
      "Responsive app interfaces with modern interaction patterns.",
      "Practical builds for MVPs, dashboards and customer-facing tools.",
    ],
    animation: "app",
  },
  {
    slug: "professional-branding",
    title: "Professional Branding",
    short: "Identity systems with personality, structure and longevity.",
    lede: "Identity foundations that make a brand feel consistent across every channel.",
    details: [
      "Visual direction, logo usage, typography and color systems.",
      "Social and marketing templates for day-to-day consistency.",
      "Guidelines that keep the brand recognizable as it grows.",
    ],
    animation: "brand",
  },
  {
    slug: "video-motion",
    title: "Video & Motion",
    short: "Cinematic promos, motion graphics and product films.",
    lede: "Motion pieces that add energy, emotion and storytelling to brand communications.",
    details: [
      "Promo videos, hype reels, reveal animations and social motion assets.",
      "Pacing, transitions and typography tuned for attention.",
      "Animated deliverables for launches, sports, events and campaigns.",
    ],
    animation: "motion",
  },
  {
    slug: "sports-tournament-creatives",
    title: "Sports Tournament Creatives",
    short: "Match-day visuals, fixture cards, hype reels and brand kits.",
    lede: "High-energy visuals tailored for sports tournaments, teams and fan moments.",
    details: [
      "Fixture cards, score graphics, match-day posters and hype reels.",
      "Tournament identity systems that keep every asset cohesive.",
      "Fast-turnaround formats for social, screens and announcements.",
    ],
    animation: "sports",
  },
  {
    slug: "social-media-design",
    title: "Social Media Design",
    short: "Campaigns built for feed velocity without losing craft.",
    lede: "Scroll-stopping assets designed for modern platforms and consistent brand presence.",
    details: [
      "Reusable post, story, reel cover and carousel systems.",
      "Campaign visuals that balance brand quality with platform speed.",
      "Templates for launches, updates, promotions and announcements.",
    ],
    animation: "social",
  },
  {
    slug: "posters-banners",
    title: "Posters & Banners",
    short: "Print and digital with editorial typography at the core.",
    lede: "High-impact posters and banners designed with strong hierarchy and campaign energy.",
    details: [
      "Concept-led layouts built around one strong visual idea.",
      "Balanced typography for titles, dates, venues and calls-to-action.",
      "Export-ready artwork for print, stories, feeds and displays.",
    ],
    animation: "poster",
  },
  {
    slug: "event-visuals",
    title: "Event Visuals",
    short: "Wayfinding, stage design and on-screen graphics.",
    lede: "Visual systems that make events feel cohesive, premium and easy to navigate.",
    details: [
      "Stage screens, directional graphics, banners and event identity.",
      "Readable systems for schedules, sessions and venue movement.",
      "Digital and print assets designed as one connected experience.",
    ],
    animation: "event",
  },
  {
    slug: "marketing-creatives",
    title: "Marketing Creatives",
    short: "Performance assets that respect the brand.",
    lede: "Conversion-focused creative that still feels premium and brand-consistent.",
    details: [
      "Ad creatives, launch visuals, promotional banners and campaign sets.",
      "Strong hooks, clear CTAs and polished visual hierarchy.",
      "Variants prepared for testing across formats and channels.",
    ],
    animation: "marketing",
  },
] as const;

export type Capability = (typeof capabilities)[number];

export function getCapability(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}
