import { ExternalLink } from "lucide-react";

export default function OtherLinks() {
  const ExternalLinks = [
    {
      label: "Ministry of Economy and Finance",
      link: "https://mef.gov.kh/",
    },
    {
      label: "Ministry of Interior",
      link: "https://www.interior.gov.kh/",
    },
    {
      label: "Ministry of National Defence",
      link: "https://mod.gov.kh/",
    },
    {
      label: "Ministry of Post and Telecommunications",
      link: "https://mptc.gov.kh",
    },
    {
      label: "Ministry of Foreign Affairs and International Cooperation",
      link: "https://www.mfaic.gov.kh/",
    },
    {
      label: "Digital Economy And Business Committee",
      link: "https://digitaleconomy.gov.kh",
    },
    { label: "Digital Government Committee", link: "https://dgc.gov.kh" },
  ];

  return (
    <nav className="lg:col-span-2">
      <h2 className="mb-4 text-lg font-semibold">Other Links</h2>
      <ul className="space-y-4">
        {ExternalLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 hover:underline"
              aria-label={`${item.label} (opens in a new tab)`}
            >
              <ExternalLink
                size={20}
                className="mt-1 shrink-0 transition-colors group-hover:text-secondary"
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
