import React from "react";

import WhatWeDoCard from "./WhatWeDoCard";

const cards = [
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  {
    title: "Header",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.",
  },
  // Add more cards as needed
];

const WhatWeDoGrid = () => {
  return (
    <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <li key={card.title}>
          <WhatWeDoCard title={card.title} description={card.description} />
        </li>
      ))}
    </ul>
  );
};

export default WhatWeDoGrid;
