import TextElement from "./TextElement";
import { ClipboardList } from "lucide-react";

interface WhatWeDoCardProps {
  title: string;
  description: string;
}

const WhatWeDoCard = ({ title, description }: WhatWeDoCardProps) => (
  <article className="flex flex-col items-start gap-2 rounded-lg border bg-card p-5 text-card-foreground">
    <ClipboardList size={37} className="text-primary" />
    <div>
      <header>
        <TextElement variant="smallheading" className="text-primary">
          {title}
        </TextElement>
      </header>
      <TextElement variant="body" className="line-clamp-4 text-pretty">
        {description}
      </TextElement>
    </div>
  </article>
);

export default WhatWeDoCard;
