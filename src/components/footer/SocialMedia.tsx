import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialMediaLinks";

export default function SocialMedia() {
  const socialMediaLinks = [
    { Icon: TwitterIcon, label: "Twitter", link: "/" },
    { Icon: FacebookIcon, label: "Facebook", link: "/" },
    { Icon: InstagramIcon, label: "Instagram", link: "/" },
    { Icon: LinkedinIcon, label: "LinkedIn", link: "/" },
  ];

  return (
    <nav aria-label="Social Media Links">
      <ul className="flex gap-6">
        {socialMediaLinks.map(({ Icon, label, link }) => (
          <li key={label}>
            <a
              href={link}
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
