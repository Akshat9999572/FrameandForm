import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import founder from "@/assets/founder.png";
import logo from "@/assets/logo.png";
import { capabilities } from "@/lib/capabilities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frame & Form Labs — Editorial Design & Digital Studio" },
      { name: "description", content: "A creative studio building editorial, cinematic and user-centered digital experiences. Design • Develop • Create." },
      { property: "og:title", content: "Frame & Form Labs" },
      { property: "og:description", content: "Editorial design, motion and digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-rule">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="md:col-span-7 animate-fade-up">
                <p className="eyebrow text-muted-foreground">Studio</p>
                <h1 className="hero-title mt-5 font-sans font-black uppercase text-foreground">
                  <span className="yellow-bar">Frame &amp; Form</span>
                  <br />
                  <span className="yellow-bar">Labs</span>
                </h1>
              </div>
              <div className="md:col-span-5 md:pb-6">
                <p className="text-base md:text-lg text-muted-foreground max-w-sm">
                  An editorial-minded design and development studio crafting cinematic, premium
                  digital experiences for ambitious brands.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link to="/gallery" className="bg-foreground text-background px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition">
                    View work
                  </Link>
                  <Link to="/contact" className="border border-foreground px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-rule bg-ink overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
            <div className="contained-showreel">
              <video
                className="contained-showreel-video"
                src="/media/capability-preview.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Frame and Form Labs showreel"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-rule overflow-hidden bg-foreground text-background">
          <div className="flex whitespace-nowrap animate-marquee py-5 font-display text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
                {["Design", "Develop", "Create", "Design", "Develop", "Create"].map((w, j) => (
                  <span key={j} className="flex items-center gap-10">
                    <span className={j % 3 === 1 ? "text-primary italic" : ""}>{w}</span>
                    <span className="text-primary">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-rule bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-5">
              <p className="eyebrow text-muted-foreground">Digital Experiences</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Immersive <span className="yellow-bar">3D</span> Web.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                Elevate your brand with interactive, cinematic 3D scenes that run smoothly directly in the browser. We build experiences that users want to touch.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div className="spline-mobile-fallback">
                <div className="spline-mobile-orb spline-mobile-orb-a" />
                <div className="spline-mobile-orb spline-mobile-orb-b" />
                <div className="relative z-10">
                  <p className="eyebrow text-muted-foreground">Mobile preview</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight">
                    Cinematic 3D, optimized for every screen.
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    The full interactive scene is available on larger screens for smoother performance.
                  </p>
                </div>
              </div>
              <div className="spline-desktop-frame">
                <iframe
                  src="https://my.spline.design/stackableglass-LvMxYsljdCw2iv7wdygSLcwN-n1D/"
                  frameBorder="0"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-[calc(100%+60px)]"
                  title="Interactive 3D Glass Stack"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-rule">
          <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-5">
              <div className="relative mx-auto w-[78%] md:w-full max-w-sm">
                <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-rule shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
                  <img src={founder} alt="Dr. Akshat Shukla — Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
                </div>
                <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1 font-mono text-xs uppercase tracking-widest rounded-full">
                  Founder
                </span>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7 md:pl-8">
              <p className="eyebrow text-muted-foreground">Introduction</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Dr. Akshat Shukla — building <span className="yellow-bar">visually striking</span>,
                meaningful digital work.
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground text-lg max-w-xl">
                <p>
                  My work combines modern aesthetics, strong storytelling and user-focused design
                  to create experiences that feel impactful and memorable.
                </p>
                <p>
                  From sports tournament creatives and branding to website development, app
                  interfaces and promotional campaigns — every project is built with attention to
                  detail and a premium feel.
                </p>
              </div>
              <Link to="/contact" className="mt-8 inline-block font-mono text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition">
                Work with the studio →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-rule">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow text-muted-foreground">What we do</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">Capabilities.</h2>
              </div>
              <Link to="/services" className="hidden md:inline font-mono text-xs uppercase tracking-widest hover:text-primary">All services →</Link>
            </div>
            <ul className="divide-y divide-rule border-y border-rule">
              {capabilities.map((capability, i) => (
                <Reveal as="li" key={capability.slug} delay={i * 70} className="group">
                  <Link
                    to="/services/$slug"
                    params={{ slug: capability.slug }}
                    className="flex items-center justify-between py-6 hover:px-3 transition-all"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                      <span className="font-display text-2xl md:text-3xl group-hover:text-primary transition">{capability.title}</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground">Open →</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-rule bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <img src={logo} alt="" className="w-24 h-24 object-contain" />
              <p className="eyebrow text-background/60 mt-6">Philosophy</p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-8">
              <p className="font-display text-3xl md:text-5xl leading-tight">
                Great design isn't only about appearance — it's about{" "}
                <span className="text-primary">communication, emotion, usability</span>{" "}
                and identity.
              </p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Reveal as="h2" className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
              Have a project in mind? Let's frame it.
            </Reveal>
            <Reveal delay={150}>
              <Link to="/submit" className="bg-primary text-primary-foreground px-8 py-5 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition">
                Submit your query
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
