import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import stensattning from "@/assets/stensattning.jpg";
import uppfart from "@/assets/uppfart.jpg";
import gravmaskin from "@/assets/gravmaskin.jpg";
import oversikt from "@/assets/oversikt.jpg";

const slides = [
  { src: uppfart, alt: "Färdig stenlagd uppfart" },
  { src: stensattning, alt: "Stensättning närbild" },
  { src: gravmaskin, alt: "Grävmaskin i arbete" },
  { src: oversikt, alt: "Översikt projekt utomhus" },
];

export function HeroCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-border bg-secondary">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="aspect-[16/9] w-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1600}
                  height={1067}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Föregående bild"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow transition-colors hover:bg-background sm:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Nästa bild"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow transition-colors hover:bg-background sm:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Gå till bild ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selected ? "w-6 bg-primary" : "w-2 bg-background/70 hover:bg-background"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
