import { ExternalLink } from "lucide-react";

export default function OtherLinks() {
  return (
    <nav>
      <h2 className="mb-4 text-lg font-semibold">Other Links</h2>
      <ul className="space-y-4">
        {[
          "Ministry of Post and Telecommunications",
          "Digital Economy And Business Committee",
          "Digital Government Committee",
        ].map((item) => (
          <li key={item}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 hover:underline"
              aria-label={`${item} (opens in a new tab)`}
            >
              <ExternalLink
                size={20}
                className="mt-1 shrink-0 transition-colors group-hover:text-secondary"
                aria-hidden="true"
              />
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
