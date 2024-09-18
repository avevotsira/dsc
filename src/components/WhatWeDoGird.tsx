import WhatWeDoCard from "./WhatWeDoCard";

const cards = [
  {
    title: "Digital Security Management",
    description:
      "Lead, coordinate, and promote the management of digital security including cybersecurity, cybercrime, cyber defence and cyber diplomacy.",
  },
  {
    title: "Digital Security Policymaker",
    description:
      "Review and decide on proposals for revision and/or amendment of laws, regulations and policies related to digital security.",
  },
  {
    title: "Digital Security Regulations and Policies Implementation Evaluator",
    description:
      "Promote and review the implementation of policies, strategies, laws and regulations related to digital security.",
  },
  {
    title: "Coordinator of Cybersecurity Incidents Prevention ",
    description:
      "Lead and coordinate at the political level and take action to respond to cybersecurity incidents and prevent cybersecurity threats in both public and private sectors.",
  },
  {
    title: "Digital Security Data Management",
    description: "Manage and collect data related to digital security.",
  },
  {
    title: "Human Resource Development",
    description:
      "Accumulate financial, technical, and human resources with the attribution of building and developing digital security.",
  },
  {
    title: "Building and Developing Digital Security of Kingdom of Cambodia ",
    description:
      "Motivate, encourage, and support the building and development of digital security from every aspect.",
  },
  {
    title:
      "Coordinator and Promoter of National and International Cooperation Regarding Digital Security",
    description:
      "Coordinate and promote national and international cooperation related to digital security.",
  },
];

const WhatWeDoGrid = () => {
  return (
    <ul className="grid list-none grid-cols-1 gap-4 pt-5 lg:grid-cols-2">
      {cards.map((card) => (
        <li key={card.title}>
          <WhatWeDoCard title={card.title} description={card.description} />
        </li>
      ))}
    </ul>
  );
};

export default WhatWeDoGrid;
