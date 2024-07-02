import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ListItem } from "./ListItem";

export interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

const NavMenu: React.FC<{ navMenuItem: NavMenuProps[] }> = ({
  navMenuItem,
}) => {
  return (
    <nav>
      <NavigationMenu className="relative z-10 hidden w-full flex-1 items-center justify-center lg:flex">
        <NavigationMenuList>
          {navMenuItem?.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.href ? (
                <a href={item.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </a>
              ) : (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-4 md:w-[100px] md:grid-cols-1 lg:w-[400px]">
                      {item.children?.map((item) => (
                        <ListItem
                          key={item.label}
                          title={item.label}
                          href={item.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavMenu;
