import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Frame & Form Labs" },
      { name: "description", content: "Web, app, branding, motion and editorial design services." },
      { property: "og:title", content: "Services — Frame & Form Labs" },
      { property: "og:description", content: "Web, app, branding, motion and editorial design services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { t: "Website Development", d: "Editorial, performant sites built with care from grid to deploy." },
  { t: "UX / UI Design", d: "Interfaces that feel inevitable — clear, considered, premium." },
  { t: "App Development", d: "Native-quality mobile and web apps with refined interaction." },
  { t: "Professional Branding", d: "Identity systems with personality, structure and longevity." },
  { t: "Video & Motion", d: "Cinematic promos, motion graphics and product films." },
  { t: "Sports Tournament Creatives", d: "Match-day visuals, fixture cards, hype reels and brand kits." },
  { t: "Social Media Design", d: "Campaigns built for feed velocity without losing craft." },
  { t: "Posters & Banners", d: "Print and digital with editorial typography at the core." },
  { t: "Event Visuals", d: "Wayfinding, stage design and on-screen graphics." },
  { t: "Marketing Creatives", d: "Performance assets that respect the brand." },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services — 01 / 10"
      title={<>What the <span className="yellow-bar italic">studio</span> does.</>}
      lede="A focused set of disciplines, each delivered with editorial precision and cinematic polish."
    >
      <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
        {services.map((s, i) => (
          <article key={s.t} className="bg-background p-8 hover:bg-foreground hover:text-background transition group">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">→</span>
            </div>
            <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.t}</h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground group-hover:text-background/70">{s.d}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-rule pt-10">
        <p className="font-display text-2xl md:text-3xl max-w-xl">Need something not listed? We probably do that too.</p>
        <Link to="/contact" className="bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition">Start a conversation</Link>
      </div>
    </PageShell>
  );
}
