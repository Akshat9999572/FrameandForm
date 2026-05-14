import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import w1 from "@/assets/work-1.png";
import w2 from "@/assets/work-2.png";
import w3 from "@/assets/work-3.png";
import w4 from "@/assets/work-4.png";
import w5 from "@/assets/work-5.png";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";
import w9 from "@/assets/work-9.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Frame & Form Labs" },
      { name: "description", content: "A selection of recent design, branding and digital work." },
      { property: "og:title", content: "Gallery — Frame & Form Labs" },
      { property: "og:description", content: "A selection of recent design, branding and digital work." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const works = [w1, w2, w3, w4, w5, w6, w7, w8, w9];

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Selected Work"
      title={<>A <span className="yellow-bar italic">visual</span> archive.</>}
      lede="Stills from recent campaigns, brand systems and tournament creatives."
    >
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {works.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 120} className="reveal-pop mb-6 break-inside-avoid">
            <div className="overflow-hidden bg-muted group">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
