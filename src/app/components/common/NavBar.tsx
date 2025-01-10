"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import servicesData from "./servicesData.json";
import { ServiceType } from "@/app/types/global";
import { MenuNavbar } from "../MenuNavbar";
import MenuHamburguer from "../MenuHamburguer";

function NavBar() {
  const components: ServiceType[] = servicesData;

  return (
    <div className={`w-full flex`}>
      <NavigationMenu
        className="text-xl font-medium h-20 bg-white fixed
        w-full flex justify-between brake:justify-center items-center px-4 md:px-8 z-50"
      >
        <div className="hidden brake:flex">
          <MenuNavbar components={components} />
        </div>

        <div className="relative brake:hidden">
          <MenuHamburguer />
        </div>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-green-light",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 font-normal text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
