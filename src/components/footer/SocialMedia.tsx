import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialMediaLinks";

export default function SocialMedia() {
  return (
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
  );
}
