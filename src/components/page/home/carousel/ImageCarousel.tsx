import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextElement from "@/components/TextElement";

import type { SupportedLanguage } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  carouselDatas: CollectionEntry<"articles">[];
  lang: SupportedLanguage;
}

export default function ImageCarousel({ carouselDatas }: ImageCarouselProps) {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      playOnInit: true,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {carouselDatas?.map((item) => (
          <CarouselItem
            key={item.data.title}
            className="relative h-[350px] w-full md:h-[450px]"
          >
            <img
              src={item.data.image.src}
              alt={item.data.title}
              sizes="100vw"
              className="absolute inset-0 size-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <CardContent className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
                <TextElement variant="title" className="whitespace-pre-line">
                  {item.data.title}
                </TextElement>
                <Button
                  asChild
                  variant={"secondary"}
                  aria-label={item.data.title}
                >
                  <a href="/">{item.data.title}</a>
                </Button>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
