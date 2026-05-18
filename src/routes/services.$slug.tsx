import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CapabilityAnimation } from "@/components/capability-animation";
import { capabilities, getCapability } from "@/lib/capabilities";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const capability = getCapability(params.slug);
    if (!capability) {
      throw notFound();
    }
    return { capability };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.capability.title ?? "Capability"} — Frame & Form Labs` },
      {
        name: "description",
        content: loaderData?.capability.lede ?? "Capability details from Frame & Form Labs.",
      },
      { property: "og:title", content: `${loaderData?.capability.title ?? "Capability"} — Frame & Form Labs` },
      { property: "og:description", content: loaderData?.capability.short ?? "" },
      { property: "og:url", content: `/services/${loaderData?.capability.slug ?? ""}` },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/services/${loaderData.capability.slug}` }] : [],
  }),
  component: CapabilityPage,
});

function CapabilityPage() {
  const { capability } = Route.useLoaderData();
  const related = capabilities.filter((item) => item.slug !== capability.slug).slice(0, 3);

  return (
    <PageShell
      eyebrow="Capability"
      title={<>{capability.title}.</>}
      lede={capability.lede}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <section className="border border-rule p-8 md:p-10">
          <p className="eyebrow text-muted-foreground">What this includes</p>
          <ul className="mt-8 space-y-5">
            {capability.details.map((detail, index) => (
              <li key={detail} className="flex gap-4 border-t border-rule pt-5">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/submit"
              className="bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition"
            >
              Start this project
            </Link>
            <Link
              to="/services"
              className="border border-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition"
            >
              Back to capabilities
            </Link>
          </div>
        </section>

        <aside className="lg:sticky lg:top-24">
          <CapabilityAnimation capability={capability} />
          <div className="mt-6 border border-rule p-6">
            <p className="eyebrow text-muted-foreground">Best for</p>
            <p className="mt-3 font-display text-2xl leading-tight">{capability.short}</p>
          </div>
        </aside>
      </div>

      <section className="mt-16 border-t border-rule pt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">Explore more</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Related capabilities</h2>
          </div>
          <Link to="/services" className="font-mono text-xs uppercase tracking-widest hover:text-primary">
            All services →
          </Link>
        </div>
        <div className="mt-8 grid gap-px bg-rule border border-rule md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              to="/services/$slug"
              params={{ slug: item.slug }}
              className="group bg-background p-6 hover:bg-foreground hover:text-background transition"
            >
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70">{item.short}</p>
              <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
