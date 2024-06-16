"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import ImageComponent from "./Image";
import LogoHorizontal from "./LogoHorizontal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "CRM",
    href: "/docs/primitives/alert-dialog",
    description: "Administra interacciones y datos de clientes.",
  },
  {
    title: "Plataforma de E-commerce",
    href: "/docs/primitives/hover-card",
    description: "Vende productos en línea fácilmente.",
  },
  {
    title: "Sistema de Reservas",
    href: "/docs/primitives/progress",
    description: "Gestiona reservas y citas fácilmente.",
  },
  {
    title: "Software de Contabilidad",
    href: "/docs/primitives/scroll-area",
    description: "Registra y analiza transacciones financieras.",
  },
  {
    title: "Sistema de Facturación Electrónica",
    href: "/docs/primitives/tabs",
    description: "Emite facturas electrónicas legalmente.",
  },
  {
    title: "Plataforma de Delivery de Comida",
    href: "/docs/primitives/tooltip",
    description: "Ordena comida de restaurantes cercanos.",
  },
  {
    title: "Software de Gestión Educativa",
    href: "/docs/primitives/tooltip",
    description: "Administra colegios y universidades eficientemente.",
  },
  {
    title: "Marketplace Local",
    href: "/docs/primitives/tooltip",
    description: "Compra y vende productos locales.",
  },
  {
    title: "Sistema de Turnos Médicos",
    href: "/docs/primitives/tooltip",
    description: "Reserva citas médicas fácilmente.",
  },
  {
    title: "Gestión de Nómina y Recursos Humanos",
    href: "/docs/primitives/tooltip",
    description: "Administra pagos y empleados eficazmente.",
  },
  {
    title: "Plataforma de E-learning",
    href: "/docs/primitives/tooltip",
    description: "Accede a cursos y formación online.",
  },
  {
    title: "Sistema de Gestión de Inventarios",
    href: "/docs/primitives/tooltip",
    description: "Controla stock y productos eficientemente.",
  },
];

function NavBar() {
  return (
    <div className="w-full flex justify-center">
      <NavigationMenu className="text-xl font-medium h-20 bg-white fixed">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <LogoHorizontal />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-4 gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 col-span-1">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <ImageComponent />
                      <div className="mb-2 mt-4 text-lg text-center hover:underline">
                        Kedevs
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/about"
                  title="About us"
                  className="col-span-2 hover:bg-violet-400 underline"
                >
                  Conoce más acerca de Kedevs
                </ListItem>
                <ListItem
                  href="/team"
                  title="Team"
                  className="col-span-2 hover:bg-violet-400 underline"
                >
                  Nuestro Equipo
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
                <ListItem
                  href="/services"
                  title="Servicios"
                  className="col-span-2 bg-violet-400 hover:bg-violet-500 underline"
                >
                  Ver todo los servicios
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
                Contactanos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
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
