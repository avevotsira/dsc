import type { SupportedLanguage } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import { ExternalLink } from "lucide-react";

interface OtherlinkProps {
  content: CollectionEntry<"other-links">[];
  lang: SupportedLanguage;
}

export default function OtherLinks({ content, lang }: OtherlinkProps) {
  const t = useTranslations(lang);
  return (
    <nav className="lg:col-span-3 lg:pl-12">
      <h2 className="mb-4 text-lg font-semibold">{t("footer.otherLinks")}</h2>
      <ul className="space-y-4">
        {content.map((item) => (
          <li key={item.data.label}>
            <a
              href={item.data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 hover:underline"
              aria-label={`${item.data.label} (opens in a new tab)`}
            >
              <ExternalLink
                size={20}
                className="mt-1 shrink-0 transition-colors group-hover:text-secondary"
                aria-hidden="true"
              />
              <span>{item.data.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
