import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/integrations/firebase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/submit")({
  head: () => ({
    meta: [
      { title: "Submit Your Query — Frame & Form Labs" },
      { name: "description", content: "Tell us about your project and we'll be in touch." },
      { property: "og:title", content: "Submit Your Query — Frame & Form Labs" },
      { property: "og:description", content: "Tell us about your project and we'll be in touch." },
      { property: "og:url", content: "/submit" },
    ],
    links: [{ rel: "canonical", href: "/submit" }],
  }),
  component: SubmitPage,
});

const types = ["Website", "Branding", "App", "Motion / Video", "Social Media", "Banner", "Logo", "Poster", "Card", "Other"];

function SubmitPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", description: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await withTimeout(
        addDoc(collection(db, "queries"), {
          name: form.name,
          email: form.email,
          company: form.company || null,
          website: form.website || null,
          project_type: projectType,
          description: form.description,
          created_at: serverTimestamp(),
        }),
        12000,
      );
      setSent(true);
    } catch (error) {
      console.error("Error submitting query:", error);
      toast.error("Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell
      eyebrow="Submit Your Query"
      title={<>Brief us in <span className="yellow-bar italic">one minute</span>.</>}
      lede="A short form to help us understand the shape of your project."
    >
      {sent ? (
        <div className="border border-rule p-12 text-center">
          <p className="eyebrow text-muted-foreground">Received</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Thank you — we'll be in touch within 48 hours.</h2>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="grid md:grid-cols-2 gap-x-10 gap-y-8 border border-rule p-8 md:p-12"
        >
          <Field label="Your name"><input required value={form.name} onChange={update("name")} className="field" /></Field>
          <Field label="Email"><input required type="email" value={form.email} onChange={update("email")} className="field" /></Field>
          <Field label="Company / brand"><input value={form.company} onChange={update("company")} className="field" /></Field>
          <Field label="Website (if any)"><input value={form.website} onChange={update("website")} className="field" placeholder="https://" /></Field>

          <div className="md:col-span-2">
            <p className="eyebrow text-muted-foreground mb-3">Project type</p>
            <div className="flex flex-wrap gap-2">
              {types.map((o) => (
                <button
                  type="button"
                  key={o}
                  onClick={() => setProjectType(o)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition ${
                    projectType === o ? "bg-foreground text-background border-foreground" : "border-rule hover:border-foreground"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Field label="About the project">
              <textarea rows={6} required value={form.description} onChange={update("description")} className="field resize-none" placeholder="Goals, audience, timeline, anything we should know…" />
            </Field>
          </div>

          <div className="md:col-span-2 flex items-center justify-between border-t border-rule pt-6">
            <p className="text-sm text-muted-foreground">We respond within 48 hours.</p>
            <button disabled={loading} className="bg-primary text-primary-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition disabled:opacity-50">
              {loading ? "Sending…" : "Send query →"}
            </button>
          </div>
        </form>
      )}
      <style>{`
        .field { width: 100%; background: transparent; border: 0; border-bottom: 1px solid var(--rule); padding: 0.6rem 0; outline: none; font-size: 1rem; }
        .field:focus { border-color: var(--ink); }
      `}</style>
    </PageShell>
  );
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeoutMs),
    ),
  ]);
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
