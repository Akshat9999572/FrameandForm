import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/submit", label: "Submit Query" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Frame & Form Labs" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg tracking-tight">
            Frame <span className="text-muted-foreground">&</span> Form
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/submit"
          className="hidden md:inline-flex items-center bg-foreground text-background text-xs font-mono uppercase tracking-widest px-4 py-2 hover:bg-primary hover:text-primary-foreground transition"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8 object-contain" />
            <span className="font-display text-lg">Frame & Form Labs</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Editorial design, motion and digital experiences. Design • Develop • Create.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Sitemap</p>
          <ul className="mt-3 space-y-1 text-sm">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="font-bold text-foreground hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs font-mono uppercase tracking-widest text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Frame & Form Labs</span>
          <span>Design • Develop • Create</span>
        </div>
      </div>
    </footer>
  );
}
