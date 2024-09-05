export default function UnitLinks() {
  const ExternalLinks = [
    {
      label: "Cambodian Cyber Security Unit",
      link: "https://mptc.gov.kh",
      image: "/assets/images/mptc-logo.png",
    },
    {
      label: "Anti-Cybsecurity Unit",
      link: "https://mptc.gov.kh",
      image: "/assets/images/mptc-logo.png",
    },
    {
      label: "National Cyberspace Defense Unit",
      link: "https://mptc.gov.kh",
      image: "/assets/images/mptc-logo.png",
    },
    {
      label: "Cyber Diplomacy Unit",
      link: "https://mptc.gov.kh",
      image: "/assets/images/mptc-logo.png",
    },
  ];

  return (
    <nav>
      <ul className="grid list-none grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
        {ExternalLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 hover:underline"
              aria-label={`${item.label} (opens in a new tab)`}
            >
              <div className="flex items-center">
                <img src={item.image} alt={item.label} width="30" height="30" />
                <span className="ml-2">{item.label}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
