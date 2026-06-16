import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

import entragang from "@/assets/portfolio-entragang.png.asset.json";
import garageuppfart1 from "@/assets/portfolio-garageuppfart-1.png.asset.json";
import industristen from "@/assets/portfolio-industristen.png.asset.json";
import garageuppfart2 from "@/assets/portfolio-garageuppfart-2.png.asset.json";
import uppfartKantsten from "@/assets/portfolio-uppfart-kantsten.png.asset.json";
import drenering from "@/assets/portfolio-dranering.png.asset.json";

export const Route = createFileRoute("/vara-arbeten")({
  head: () => ({
    meta: [
      { title: "Våra arbeten – MMB Värmland AB" },
      {
        name: "description",
        content:
          "Ett urval av markarbeten, stensättningar och anläggningar utförda av MMB Värmland AB.",
      },
      { property: "og:title", content: "Våra arbeten – MMB Värmland AB" },
      {
        property: "og:description",
        content: "Se utvalda projekt inom markarbete, dränering och stensättning i Värmland.",
      },
      { property: "og:url", content: "/vara-arbeten" },
    ],
    links: [{ rel: "canonical", href: "/vara-arbeten" }],
  }),
  component: VaraArbeten,
});

const projects = [
  {
    title: "Entrégång i marksten",
    text: "Rak och stilren gång med uppbyggda kanter för ett tydligt och hållbart intryck.",
    image: entragang.url,
    alt: "Stensatt entrégång med kantsten på båda sidor",
    position: "object-center",
  },
  {
    title: "Garageuppfart i ljus sten",
    text: "Stor uppfart med rena linjer och jämn läggning som ger ett luftigt helhetsuttryck.",
    image: garageuppfart1.url,
    alt: "Stor garageuppfart med ljus marksten",
    position: "object-center",
  },
  {
    title: "Industrimark med marktegel",
    text: "Slitstark stenläggning med brunnsdetaljer anpassad för hårt använda ytor.",
    image: industristen.url,
    alt: "Större stenlagd yta med mönstrad marksten och brunn",
    position: "object-[center_58%]",
  },
  {
    title: "Större stenläggning",
    text: "Bred yta lagd med fokus på raka skarvar, precision och ett enhetligt resultat.",
    image: garageuppfart2.url,
    alt: "Bred stenlagd yta framför tomt med ljus marksten",
    position: "object-center",
  },
  {
    title: "Uppfart med kantstöd",
    text: "Marksten kombinerad med mur och tydliga nivåskillnader för en stabil och snygg helhet.",
    image: uppfartKantsten.url,
    alt: "Stenlagd uppfart med kantstöd och mur i bakgrunden",
    position: "object-[center_42%]",
  },
  {
    title: "Dräneringsarbete",
    text: "Noggrant markarbete längs husgrund med dräneringsrör, makadam och rätt fall.",
    image: drenering.url,
    alt: "Dräneringsschakt längs husgrund med rör och makadam",
    position: "object-[center_35%]",
  },
] as const;

function VaraArbeten() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Våra arbeten
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Ett urval av projekt vi har utfört – från dränering och markarbete
            till stensättningar och färdiga uppfarter runt om i Värmland.
          </p>
        </section>

        <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${project.position}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.text}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-4">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-secondary/50 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Vill du ha något liknande utfört?
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Hör av dig så pratar vi ihop oss om ditt projekt och vad som passar bäst.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-flex self-start rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:self-auto"
            >
              <span className="inline-flex items-center gap-2">
                Kontakta oss <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
