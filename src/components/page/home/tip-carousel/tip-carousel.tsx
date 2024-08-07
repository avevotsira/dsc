import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    text: "It was popularised in the 1960s",
    buttonText: "Learn More",
  },
  {
    text: "It was popularised in the 1960s. It was popularised in the 1960s",
    buttonText: "Find out more",
  },
  {
    text: "It was popularised in the 1960s",
    buttonText: "Learn More",
  },
  {
    text: "It was popularised in the 1960s. It was popularised in the 1960s",
    buttonText: "Find out more",
  },
  {
    text: "It was popularised in the 1960s",
    buttonText: "Learn More",
  },
  {
    text: "It was popularised in the 1960s. It was popularised in the 1960s",
    buttonText: "Find out more",
  },
];

export function TipCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {carouselData.map((item) => (
          <CarouselItem key={item.text} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span>{item.text}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
