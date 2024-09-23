import type { CollectionEntry } from "astro:content";

interface UnitLinkProps {
  content: CollectionEntry<"unit-link">[];
}

export default function UnitLinks({ content }: UnitLinkProps) {
  return (
    <nav>
      <ul className="grid list-none grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
        {content.map((item) => (
          <li key={item.data.label}>
            <a
              href={item.data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 hover:underline"
              aria-label={`${item.data.label} (opens in a new tab)`}
            >
              <div className="flex items-center">
                <img
                  src={item.data.image}
                  alt={item.data.label}
                  width="30"
                  height="30"
                />
                <span className="ml-2 underline hover:text-primary">
                  {item.data.label}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
