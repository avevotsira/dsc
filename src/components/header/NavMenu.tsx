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
    <div>
      <NavigationMenu className="relative z-10 hidden w-full flex-1 items-center justify-center lg:flex">
        <NavigationMenuList>
          {navMenuItem?.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] py-4 pl-4 md:w-[100px] md:grid-cols-1 lg:w-[400px]">
                      {item.children?.map((child) => (
                        <ListItem
                          key={child.label}
                          title={child.label}
                          href={child.href}
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
    </div>
  );
};

export default NavMenu;
