import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mountain, Layers, TreePine, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tjänster – MMB Värmland AB" },
      { name: "description", content: "Markarbeten, stensättning och anläggning – tjänsterna vi utför för privatpersoner och företag i Värmland." },
      { property: "og:title", content: "Tjänster – MMB Värmland AB" },
      { property: "og:description", content: "Markarbeten, stensättning och anläggning i Värmland." },
      { property: "og:url", content: "/tjanster" },
    ],
    links: [{ rel: "canonical", href: "/tjanster" }],
  }),
  component: Tjanster,
});

const services = [
  {
    icon: Mountain,
    title: "Markarbeten",
    intro: "Vi förbereder grunden för allt som ska byggas ovanpå – noggrant och med rätt maskiner.",
    bullets: [
      "Schaktning och grävning",
      "Dränering och dagvattenhantering",
      "Grundläggning för hus och tillbyggnader",
      "Anläggning av gräsmattor och planteringsytor",
    ],
  },
  {
    icon: Layers,
    title: "Stensättning & stenarbeten",
    intro: "Hållbara, vackra ytor i sten – från entréer till stora uppfarter och murar.",
    bullets: [
      "Plattläggning och marksten",
      "Gatsten och smågatsten",
      "Stödmurar och kantsten",
      "Trappor och stenarbeten på tomt",
    ],
  },
  {
    icon: TreePine,
    title: "Anläggning",
    intro: "Vi färdigställer tomten med grönytor och planteringar.",
    bullets: [
      "Anläggning av gräsmattor",
      "Planteringsytor och rabatter",
      "Finplanering och färdigställande",
      "Övriga anläggningsarbeten på tomt",
    ],
  },
];

function Tjanster() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Våra tjänster
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Allt från grund till finish
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Vi tar oss an både små och stora projekt inom mark, sten och anläggning.
            Här är några av de tjänster vi utför – hör av dig om du undrar över något särskilt.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-4 mt-20">
          <div className="rounded-2xl border border-border bg-secondary/50 px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Få en offert</h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Berätta om ditt projekt så återkommer vi med ett förslag.
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
