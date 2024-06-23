import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "./SocialMediaLinks";

export default function Footer() {
  return (
    <footer className="bg-muted py-6 text-muted-foreground">
      <div className="container grid max-w-screen-2xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <a href="/" className="gap-2">
            <div className="h-[118px] w-[168.65px] bg-gray-300" />
          </a>
          <div className="flex gap-4">
            <a href="/" aria-label="Twitter">
              <TwitterIcon className="size-6" />
            </a>
            <a href="/" aria-label="Facebook">
              <FacebookIcon className="size-6" />
            </a>
            <a href="/" aria-label="Instagram">
              <InstagramIcon className="size-6" />
            </a>
            <a href="/" aria-label="LinkedIn">
              <LinkedinIcon className="size-6" />
            </a>
          </div>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Quick Linkss</h4>
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/" className="hover:underline">
            Menu
          </a>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <PhoneIcon className="size-5" />
              <span>tel: 9485834975</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="size-5" />
              <span>email: example@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="size-5" />
              <span>Address: lorem address.....</span>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Other Links</h4>
          <a href="/" className="hover:underline">
            Ministry of Post and Telecommunications
          </a>
          <a href="/" className="hover:underline">
            Digital Economy And Business Committee
          </a>
        </div>
      </div>
    </footer>
  );
}
