import TextElement from "./TextElement";
import { ClipboardList } from "lucide-react";

interface WhatWeDoCardProps {
  title: string;
  description: string;
}

const WhatWeDoCard = ({ title, description }: WhatWeDoCardProps) => (
  <div className="flex flex-col items-start gap-2 rounded-lg border bg-card p-5 text-card-foreground">
    <ClipboardList size={37} className="text-primary" />
    <div>
      <TextElement variant="smallheading" className="text-primary">
        {title}
      </TextElement>
      <TextElement variant="body" className="line-clamp-4 text-pretty">
        {description}
      </TextElement>
    </div>
  </div>
);

export default WhatWeDoCard;
