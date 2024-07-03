import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialMediaLinks";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-screen-2xl px-4 py-12 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:w-1/4 lg:items-start">
            <a href="/" className="mb-6 inline-block">
              <div className="flex size-28 items-center justify-center rounded-full bg-blue-500">
                <span className="text-4xl font-bold text-white">DSC</span>
              </div>
            </a>

            <nav aria-label="Social Media Links">
              <ul className="flex gap-6">
                {[
                  { Icon: TwitterIcon, label: "Twitter" },
                  { Icon: FacebookIcon, label: "Facebook" },
                  { Icon: InstagramIcon, label: "Instagram" },
                  { Icon: LinkedinIcon, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <li key={label}>
                    <a
                      href="/"
                      aria-label={label}
                      className="transition-colors hover:text-secondary"
                    >
                      <Icon className="size-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="grid gap-12 lg:w-3/4 lg:grid-cols-3">
            <nav>
              <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About us",
                  "Library",
                  "News & events",
                  "Projects",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                      className="hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="not-italic">
              <h2 className="mb-4 text-lg font-semibold">Contact</h2>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+85594858349751" className="hover:underline">
                    Tel: +855 94 85834 975
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:example@gmail.com"
                    className="hover:underline"
                  >
                    Email: example@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/7S8TwSuD47Ee8MG26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Address: Building 13, Monivong Blvd, Sangkat Srah Chak, Khan
                    Daun Penh Phnom Penh, Cambodia, 120210
                  </a>
                </li>
              </ul>
            </address>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
