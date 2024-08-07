import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextElement from "@/components/TextElement";

import Autoplay from "embla-carousel-autoplay";

interface CarouselData {
  image: string;
  text: string;
  buttonText: string;
}

interface ImageCarouselProps {
  carouselDatas: CarouselData[];
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
            key={item.text}
            className="relative h-[350px] w-full md:h-[450px]"
          >
            <img
              src={item.image}
              alt={item.text}
              sizes="100vw"
              className="absolute inset-0 size-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <CardContent className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
                <TextElement variant="title" className="whitespace-pre-line">
                  {item.text}
                </TextElement>
                <Button
                  asChild
                  variant={"secondary"}
                  aria-label={item.buttonText}
                >
                  <a href="/">{item.buttonText}</a>
                </Button>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
