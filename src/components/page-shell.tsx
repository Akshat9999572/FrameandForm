import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./site-chrome";

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-rule">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 animate-fade-up">
            <p className="eyebrow text-muted-foreground">{eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">{title}</h1>
            {lede && (
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lede}</p>
            )}
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-6 py-16">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export { Link };
