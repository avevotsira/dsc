import TextElement from "./TextElement";
import { ClipboardList } from "lucide-react";

interface WhatWeDoCardProps {
  title: string;
  description: string;
}

const WhatWeDoCard = ({ title, description }: WhatWeDoCardProps) => (
  <article className="flex h-full flex-col items-start gap-2 rounded-lg border bg-card p-5 text-card-foreground">
    <div className="icon-wrapper" aria-hidden="true">
      <ClipboardList size={37} className="text-primary" />
    </div>
    <div>
      <TextElement
        variant="title"
        className="mb-2 line-clamp-1 text-lg text-primary"
      >
        {title}
      </TextElement>
      <TextElement variant="body" className="line-clamp-4 text-pretty">
        {description}
      </TextElement>
    </div>
  </article>
);

export default WhatWeDoCard;
