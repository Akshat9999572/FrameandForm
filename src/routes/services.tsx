import { createFileRoute, Link } from "@tanstack/react-router";
import { CapabilityAnimation } from "@/components/capability-animation";
import { PageShell } from "@/components/page-shell";
import { capabilities } from "@/lib/capabilities";

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

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services — capabilities"
      title={<>What the <span className="yellow-bar italic">studio</span> does.</>}
      lede="A focused set of disciplines, each opening into a dedicated page with context, deliverables and motion."
    >
      <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
        {capabilities.map((capability, i) => (
          <Link
            key={capability.slug}
            to="/services/$slug"
            params={{ slug: capability.slug }}
            className="bg-background p-8 hover:bg-foreground hover:text-background transition group"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
                Open →
              </span>
            </div>
            <div className="mt-6 max-w-xs">
              <CapabilityAnimation capability={capability} />
            </div>
            <h3 className="mt-6 font-display text-2xl md:text-3xl">{capability.title}</h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground group-hover:text-background/70">
              {capability.short}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-rule pt-10">
        <p className="font-display text-2xl md:text-3xl max-w-xl">Need something not listed? We probably do that too.</p>
        <Link to="/contact" className="bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition">Start a conversation</Link>
      </div>
    </PageShell>
  );
}
