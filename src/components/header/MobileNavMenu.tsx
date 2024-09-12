import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";

export interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

const NavMenu: React.FC<{ navMenuItem: NavMenuProps[] }> = ({
  navMenuItem,
}) => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="size-8 text-blue-950" aria-label="Open mobile menu" />
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Menu</SheetTitle>
          <SheetDescription>Mobile Navigation</SheetDescription>
        </SheetHeader>
        <ul className="h-[calc(100vh-4rem)] overflow-auto px-0 pb-2">
          {navMenuItem?.map((item, index) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  className="block rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent md:text-base"
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <Accordion type="single" collapsible className="border-0">
                  <AccordionItem
                    value={`item_${index}`}
                    className="rounded border-0 data-[state=open]:bg-accent/50"
                  >
                    <AccordionTrigger className="rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-t bg-transparent px-4 py-2">
                      <ul>
                        {item.children?.map((child) => (
                          <li
                            key={child.label}
                            className="rounded-md bg-transparent text-sm font-medium hover:bg-accent md:text-base"
                          >
                            <a className="block px-4 py-2" href={child.href}>
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </li>
          ))}
          <Separator />
          <li className="flex justify-center pt-4">
            <Button className="lg:hidden">Report Incident</Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
