import TextElement from "./TextElement";
import { ClipboardList } from "lucide-react";

interface WhatWeDoCardProps {
  title: string;
  description: string;
}

const WhatWeDoCard = ({ title, description }: WhatWeDoCardProps) => (
  <article className="flex h-full flex-col items-start gap-2 rounded-lg border bg-card p-5 text-card-foreground">
    <div className="icon-wrapper">
      <ClipboardList size={37} className="text-primary" aria-hidden="true" />
      <span className="sr-only">{`Clipboard icon representing ${title}`}</span>
    </div>
    <div>
      <TextElement variant="title" className="text-lg text-primary">
        {title}
      </TextElement>
      <TextElement variant="body" className="line-clamp-4 text-pretty">
        {description}
      </TextElement>
    </div>
  </article>
);

export default WhatWeDoCard;
