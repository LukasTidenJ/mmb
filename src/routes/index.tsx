import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, TreePine, Mountain, Layers, ShieldCheck, MapPin, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MMB Värmland AB – Markarbeten & stensättning" },
      { name: "description", content: "Professionella mark-, anläggnings- och stenarbeten i Värmland. Kontakta MMB Värmland AB för offert." },
      { property: "og:title", content: "MMB Värmland AB" },
      { property: "og:description", content: "Mark, anläggning och sten i Värmland – med kvalitet i varje detalj." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lokalt i Värmland
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Mark, sten & anläggning –
                <span className="block text-primary">gjort på rätt sätt.</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-prose">
                MMB Värmland AB utför markarbeten, anläggning och stensättningar.
                Vi levererar gediget hantverk från första spadtag till färdig yta.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Kontakta oss <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/tjanster"
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Våra tjänster
                </Link>
              </div>
            </div>
            <div>
              <HeroCarousel />
            </div>
          </div>
        </section>

        {/* Värdeord */}
        <section className="mx-auto max-w-6xl px-4 mt-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Kvalitet i varje steg", text: "Noggrann planering och utförande – från grund till finish." },
              { icon: MapPin, title: "Lokala i Värmland", text: "Vi känner marken, väderleken och kundernas behov." },
              { icon: Star, title: "Erfarna hantverkare", text: "Mark, sten och anläggning – allt under ett tak." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tjänster teaser */}
        <section className="mx-auto max-w-6xl px-4 mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Vad vi gör</h2>
              <p className="mt-2 text-muted-foreground">Tre kärnområden – ett ansvar.</p>
            </div>
            <Link to="/tjanster" className="text-sm font-semibold text-primary hover:underline">
              Se alla tjänster →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: Mountain, title: "Markarbeten", text: "Schakt, dränering, grundläggning och anläggning." },
              { icon: Layers, title: "Stensättning", text: "Plattläggning, gatsten, murar och stenarbeten." },
              { icon: TreePine, title: "Anläggning", text: "Gräsmattor, planteringsytor och färdigställande av tomt." },
            ].map((t) => (
              <Link
                key={t.title}
                to="/tjanster"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Läs mer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA-band */}
        <section className="mx-auto max-w-6xl px-4 mt-20">
          <div className="rounded-2xl bg-foreground text-background px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Har du ett projekt på gång?</h2>
              <p className="mt-2 text-background/70 max-w-xl">
                Hör av dig så tittar vi på det tillsammans och tar fram ett förslag.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 self-start md:self-auto"
            >
              Kontakta oss <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
