import { useRef } from "react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextElement from "@/components/TextElement";

import article2Image from "@/asset/articles/1-article-dsc-meeting/article-1-photo-2.webp";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      playOnInit: true,
      stopOnInteraction: false,
    }),
  );

  const carouselItem = [
    {
      title: "Safeguarding Cambodia’s Digital Security",
      description:
        "The Digital Security Committee (DSC) was established in order to ensure the efficient and effective in supporting the National Council for Digital Economy and Society, with function of leading, coordinating and promoting the management of digital security in Cambodia",
      image: article2Image,
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {carouselItem?.map((item) => (
          <CarouselItem
            key={item.title}
            className="relative h-[350px] w-full md:h-[450px]"
          >
            <img
              src={item.image.src}
              alt={item.title}
              sizes="100vw"
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <CardContent className="container mx-auto flex flex-col items-center justify-center space-y-4 p-4 text-center text-primary-foreground sm:p-6 md:p-8">
                <TextElement
                  variant="heading"
                  className="line-clamp-4 whitespace-pre-line text-pretty text-4xl"
                >
                  {item.title}
                </TextElement>
                <TextElement>{item.description}</TextElement>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
