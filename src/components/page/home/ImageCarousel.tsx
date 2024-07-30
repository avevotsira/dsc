import * as React from "react";

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
  image: string; // Accepting a React Node for the image
  text: string;
  buttonText: string;
}

interface ImageCarouselProps {
  carouselDatas: CarouselData[];
}

export default function ImageCarousel({ carouselDatas }: ImageCarouselProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: 8000,
      playOnInit: true,
      stopOnInteraction: false,
      jump: true,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full"
    >
      <TextElement variant="smallheading" className="visuallyhidden">
        It was popularised in the 1960s
      </TextElement>
      <CarouselContent>
        {carouselDatas?.map((item, index) => (
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <CardContent className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
                <TextElement variant="title" className="whitespace-pre-line">
                  {item.text}
                </TextElement>
                <Button
                  asChild
                  variant={"secondary"}
                  aria-label={item.buttonText}
                >
                  <a>{item.buttonText}</a>
                </Button>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
