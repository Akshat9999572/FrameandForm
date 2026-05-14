import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { db } from "@/integrations/firebase/client";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Frame & Form Labs" },
      { name: "description", content: "Get in touch with Frame & Form Labs." },
      { property: "og:title", content: "Contact — Frame & Form Labs" },
      { property: "og:description", content: "Get in touch with Frame & Form Labs." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const PHONE = "8543052329";
const EMAIL = "akshatshuklawrites@gmail.com";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contact_messages"), {
        name: form.name,
        email: form.email,
        subject: form.subject || null,
        message: form.message,
        createdAt: new Date().toISOString()
      });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent — we'll be in touch.");
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      toast.error("Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Let's <span className="yellow-bar italic">talk</span>.</>}
      lede="Project, collaboration or curious — we read every message."
    >
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow text-muted-foreground flex items-center gap-2"><Mail size={12} /> Email</p>
            <a href={`mailto:${EMAIL}`} className="mt-2 block font-display text-2xl break-all hover:text-primary transition">{EMAIL}</a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground flex items-center gap-2"><Phone size={12} /> Phone</p>
            <a href={`tel:+91${PHONE}`} className="mt-2 block font-display text-2xl hover:text-primary transition">+91 {PHONE}</a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground flex items-center gap-2"><MessageCircle size={12} /> WhatsApp</p>
            <a
              href={`https://wa.me/91${PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-foreground transition"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Studio</p>
            <p className="mt-2 font-display text-2xl">Remote — working worldwide</p>
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <form className="space-y-6 border border-rule p-8 md:p-10" onSubmit={onSubmit}>
            <Field label="Name"><input required value={form.name} onChange={update("name")} className="field" placeholder="Your name" /></Field>
            <Field label="Email"><input required type="email" value={form.email} onChange={update("email")} className="field" placeholder="you@studio.com" /></Field>
            <Field label="Subject"><input value={form.subject} onChange={update("subject")} className="field" placeholder="What's it about?" /></Field>
            <Field label="Message">
              <textarea rows={5} required value={form.message} onChange={update("message")} className="field resize-none" placeholder="Tell us about the project…" />
            </Field>
            <button disabled={loading} className="bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition disabled:opacity-50">
              {loading ? "Sending…" : sent ? "Sent ✓ — send another" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
      <style>{`
        .field { width: 100%; background: transparent; border: 0; border-bottom: 1px solid var(--rule); padding: 0.6rem 0; outline: none; font-size: 1rem; }
        .field:focus { border-color: var(--ink); }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
