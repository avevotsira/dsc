import { ExternalLink } from "lucide-react";

export default function UnitLinks() {
  const ExternalLinks = [
    {
      label: "Cambodian Cyber Security Unit",
      link: "https://mptc.gov.kh",
    },
    {
      label: "Anti-Cybsecurity Unit",
      link: "https://mptc.gov.kh",
    },
    { 
      label: "National Cyberspace Defense Unit", 
      link: "https://mptc.gov.kh" 
    },
    { 
      label: "Cyber Diplomacy Unit", 
      link: "https://mptc.gov.kh" 
    },
  ];

  return (
    <nav>
      <ul className="grid list-none grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
        {ExternalLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 hover:underline"
              aria-label={`${item.label} (opens in a new tab)`}
            >
              <ExternalLink
                size={30}
                className="mt-1 shrink-0 transition-colors group-hover:text-secondary"
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
