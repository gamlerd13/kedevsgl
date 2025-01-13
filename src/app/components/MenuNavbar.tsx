import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavigationMenuIndicator } from "@radix-ui/react-navigation-menu";
import LogoHorizontal from "./common/LogoHorizontal";
import ImageComponent from "./common/Image";
import React from "react";
import { cn } from "@/lib/utils";
import { ServiceType } from "../types/global";
import { usePathname } from "next/navigation";

interface MenuNavbarProps {
  components: ServiceType[];
}

export const MenuNavbar = ({ components }: MenuNavbarProps) => {
  const pathname = usePathname();

  const navigateToAboutUs = () => {
    return pathname === "/" ? "#about-us" : "/#about-us";
  };

  return (
    <>
      <NavigationMenuItem className="hidden brake:block">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LogoHorizontal />
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <div className={`flex-col md:flex-row items-center`}>
        <NavigationMenuList className="flex flex-col md:flex-row">
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-3 gap-3 p-4 w-[400px] md:w-[400px] lg:w-[500px]">
                <li className="row-span-3 sm:col-span-1 col-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="border border-green-light rounded-md">
                        <ImageComponent />
                      </div>
                      <div className="mb-2 mt-4 text-lg text-center hover:underline">
                        Kedevs
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div className="sm:col-span-2 col-span-3">
                  <ListItem
                    href={navigateToAboutUs()}
                    title="About us"
                    className="hover:bg-green-light"
                  >
                    Conoce más acerca de Kedevs
                  </ListItem>
                  <ListItem
                    href="/team"
                    title="Team"
                    className="hover:bg-green-light"
                  >
                    Nuestro Equipo
                  </ListItem>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.id}
                    title={component.name}
                    href="/services"
                  >
                    {component.title}
                  </ListItem>
                ))}
                <ListItem
                  href="/services"
                  title="Servicios"
                  className="col-span-2 bg-green-light hover:bg-green-dark underline"
                >
                  Ver todos los servicios
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/hiring" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Estamos contratando
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contáctanos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Proyectos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuIndicator className="w-5 h-5">
            <div className="Arrow" />
          </NavigationMenuIndicator>
        </NavigationMenuList>
      </div>
    </>
  );
};

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
