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
      <SheetTrigger>
        <Menu
          className="ml-4 h-8 w-8 text-blue-950 lg:hidden"
          aria-label="Open mobile menu"
        />
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        {/* need to include tittle and description otherwise it'll log error and warning */}
        <SheetHeader className="hidden">
          <SheetTitle>Mobile Menu</SheetTitle>
          <SheetDescription>Mobile Navigation</SheetDescription>
        </SheetHeader>
        <ul className="h-[calc(100vh-4rem)] overflow-auto px-0 pt-2">
          <Accordion type="single" collapsible className="border-0">
            {navMenuItem?.map((item, index) => (
              <AccordionItem
                key={item.label}
                value={"item_" + index}
                className="rounded border-0 data-[state=open]:bg-accent/50"
              >
                {item.href ? (
                  <li className="rounded-md bg-background text-sm font-medium hover:bg-accent md:text-base">
                    <a className="block px-4 py-2" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <>
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
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
