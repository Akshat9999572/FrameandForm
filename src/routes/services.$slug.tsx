import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const serviceDetails: Record<string, { title: string; description: string; template: string }> = {
  "website-development": {
    title: "Website Development",
    description: "Editorial, performant sites built with care from grid to deploy.",
    template: "We architect web platforms that combine editorial aesthetics with modern frontend frameworks. Think smooth transitions, precise typography, and rock-solid performance."
  },
  "ux-ui-design": {
    title: "UX / UI Design",
    description: "Interfaces that feel inevitable — clear, considered, premium.",
    template: "Every digital touchpoint should feel intuitive and premium. We design user flows and interface elements that prioritize clarity without sacrificing visual flair."
  },
  "app-development": {
    title: "App Development",
    description: "Native-quality mobile and web apps with refined interaction.",
    template: "From React Native to responsive web apps, we build tools that users actually want to use. Focused on fluidity, state management, and elegant architecture."
  },
  "professional-branding": {
    title: "Professional Branding",
    description: "Identity systems with personality, structure and longevity.",
    template: "A brand is more than a logo. We create comprehensive identity systems—colors, typography, voice, and motion—that ensure consistency across every medium."
  },
  "video-motion": {
    title: "Video & Motion",
    description: "Cinematic promos, motion graphics and product films.",
    template: "Motion breathes life into design. We create cinematic sequences and micro-interactions that capture attention and guide the user's eye."
  },
  "sports-tournament-creatives": {
    title: "Sports Tournament Creatives",
    description: "Match-day visuals, fixture cards, hype reels and brand kits.",
    template: "High-energy visuals tailored for the sports industry. We deliver cohesive branding packages for tournaments that elevate the fan experience."
  },
  "social-media-design": {
    title: "Social Media Design",
    description: "Campaigns built for feed velocity without losing craft.",
    template: "Scroll-stopping assets designed for modern platforms. We balance brand integrity with the algorithmic need for velocity and engagement."
  },
  "posters-banners": {
    title: "Posters & Banners",
    description: "Print and digital with editorial typography at the core.",
    template: "Whether large-format print or digital display, our poster and banner designs lean heavily into structured grid systems and impactful typography."
  },
  "event-visuals": {
    title: "Event Visuals",
    description: "Wayfinding, stage design and on-screen graphics.",
    template: "Physical experiences require spatial thinking. We design comprehensive visual packages for events that guide, inform, and impress attendees."
  },
  "marketing-creatives": {
    title: "Marketing Creatives",
    description: "Performance assets that respect the brand.",
    template: "Conversion-focused design doesn't have to look cheap. We build marketing assets that perform well while maintaining a premium brand perception."
  },
};

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <PageShell eyebrow="Error" title={<>Service <span className="yellow-bar italic">Not Found</span></>}>
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground mb-8">We couldn't find the service you're looking for.</p>
          <Link to="/services" className="bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition">
            Back to Services
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell 
      eyebrow={`Service — ${service.title}`} 
      title={<>{service.title}.</>}
      lede={service.description}
    >
      <div className="grid md:grid-cols-12 gap-10 lg:gap-14 py-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl mb-6">Our Approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.template}
          </p>
          <div className="mt-12 bg-rule border border-rule p-8">
            <h3 className="font-mono text-sm uppercase tracking-widest mb-4">Template Design / Deliverables</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary">◆</span> Strategy & Research
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">◆</span> Concept Development
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">◆</span> High-Fidelity Execution
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">◆</span> Final Delivery & Handoff
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-square bg-foreground text-background p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest opacity-60">Ready to start?</p>
              <h3 className="mt-4 font-display text-3xl leading-tight">Let's build something exceptional.</h3>
            </div>
            <Link to="/contact" className="inline-block border border-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-background hover:text-foreground transition self-start">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-rule pt-10 mt-10">
        <Link to="/services" className="font-mono text-xs uppercase tracking-widest hover:text-primary transition flex items-center gap-3">
          <span>←</span> Back to all services
        </Link>
      </div>
    </PageShell>
  );
}
