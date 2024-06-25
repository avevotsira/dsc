import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialMediaLinks";
import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="container grid max-w-screen-2xl grid-cols-1 gap-y-10 py-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-7 md:gap-10">
        <div className="flex flex-col items-center space-y-4 md:col-span-2">
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
        <div className="grid gap-4 gap-y-10 sm:col-span-2 md:col-span-5 md:grid-cols-5">
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
            <ul className="grid gap-3">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Library
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  News & events
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Project
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <h4 className="mb-3 text-lg font-semibold">Contact</h4>
            <ul className="grid gap-3">
              <li>
                <a href="tel:#" target="_blank">
                  <span>Tel: +855 94 85834 975</span>
                </a>
              </li>
              <li>
                <a href="mailtoexample@gmail.com" target="_blank">
                  <span>Email: example@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/7S8TwSuD47Ee8MG26" target="_blank">
                  <span>
                    Address: Building 13, Monivong Blvd, Sangkat Srah Chak, Khan
                    Daun Penh Phnom Penh, Cambodia, 120210
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 md:col-span-2">
            <h4 className="mb-3 text-lg font-semibold">Other Links</h4>
            <ul className="grid gap-5">
              <li>
                <a href="/" className="flex gap-2 hover:underline">
                  <Link size={20} className="mt-0.5" /> Ministry of Post and
                  Telecommunications
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-2 hover:underline">
                  <Link size={20} className="mt-0.5" /> Digital Economy And
                  Business Committee
                </a>
              </li>
              <li>
                <a href="/" className="flex gap-2 hover:underline">
                  <Link size={20} className="mt-0.5" /> Digital Goverment
                  Committee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
