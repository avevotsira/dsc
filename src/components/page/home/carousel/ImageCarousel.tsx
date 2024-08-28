import { useRef } from "react";

import { getContentUrl } from "@/lib/route";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ButtonLink } from "@/components/ButtonLink";
import TextElement from "@/components/TextElement";

import type { SupportedLanguage } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  carouselDatas: CollectionEntry<"articles">[];
  lang: SupportedLanguage;
}

export default function ImageCarousel({
  carouselDatas,
  lang,
}: ImageCarouselProps) {
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <CardContent className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
                <TextElement
                  variant="title"
                  className="whitespace-pre-line text-4xl"
                >
                  {item.data.title}
                </TextElement>
                <TextElement variant="body" className="whitespace-pre-line">
                  {item.data.description}
                </TextElement>
                <ButtonLink
                  href={getContentUrl(item, lang)}
                  aria-labelledby={`read-more-${item.slug}`}
                >
                  <span id={`read-more-${item.slug}`}>
                    Read more
                    <span className="sr-only"> about {item.data.title}</span>
                  </span>
                </ButtonLink>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
