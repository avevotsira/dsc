import WhatWeDoCard from "./WhatWeDoCard";
import type { CollectionEntry } from "astro:content";

interface WhatWeDoProps {
  content: CollectionEntry<"what-we-do">[];
}

export default function WhatWeDoGrid({ content }: WhatWeDoProps) {
  return (
    <ul className="grid list-none grid-cols-1 gap-4 pt-5 lg:grid-cols-2">
      {content.map((card) => (
        <li key={card.data.title}>
          <WhatWeDoCard
            title={card.data.title}
            description={card.data.description}
          />
        </li>
      ))}
    </ul>
  );
}
