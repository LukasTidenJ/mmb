import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, Instagram, Facebook, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – MMB Värmland AB" },
      { name: "description", content: "Kontakta MMB Värmland AB – mobil, e-post, Instagram och Facebook. Vi svarar gärna på dina frågor." },
      { property: "og:title", content: "Kontakt – MMB Värmland AB" },
      { property: "og:description", content: "Hör av dig till MMB Värmland AB." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

const cards = [
  {
    icon: Phone,
    label: "Mobil",
    value: "072 - 872 24 56",
    href: "tel:+46728722456",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mmbvarmland",
    href: "https://instagram.com/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "MMB Värmland AB",
    href: "https://facebook.com/",
  },
];

function Kontakt() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Kontakt
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hör av dig
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Ring, mejla eller hitta oss på sociala medier. Vi svarar så snart vi kan.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => {
            const external = c.href.startsWith("http");
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 font-semibold truncate group-hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            );
          })}
        </section>

        <section className="mx-auto max-w-6xl px-4 mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <h2 className="font-semibold">Öppettider</h2>
            </div>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between"><dt>Mån–Fre</dt><dd className="text-muted-foreground">07:00 – 17:00</dd></div>
              <div className="flex justify-between"><dt>Lördag</dt><dd className="text-muted-foreground">Enligt överenskommelse</dd></div>
              <div className="flex justify-between"><dt>Söndag</dt><dd className="text-muted-foreground">Stängt</dd></div>
            </dl>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <h2 className="font-semibold">Område</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Vi utför uppdrag i hela Värmland. Hör av dig om du är osäker på om vi
              tar oss an just ditt projekt – det gör vi oftast.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
