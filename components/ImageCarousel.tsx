"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Slide = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

export default function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl border border-black/[.08]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.src}
              className="relative h-64 min-w-0 shrink-0 grow-0 basis-full sm:h-80"
            >
              <Image
                src={slide.src}
                alt={slide.caption}
                fill
                sizes="(min-width: 640px) 672px, 100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow transition-colors hover:bg-white"
        >
          &larr;
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow transition-colors hover:bg-white"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">{slides[selectedIndex]?.caption}</p>
        <div className="flex shrink-0 gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`size-1.5 rounded-full transition-colors ${
                index === selectedIndex ? "bg-zinc-800" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
