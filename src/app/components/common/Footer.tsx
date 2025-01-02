"use client";

import React from "react";
import LogoHorizontal from "./LogoHorizontal";
import services from "@/app/components/common/servicesData.json";
import {
  KEDEVS_PHONE_NUMBER,
  KEDEVS_PHONE_NUMBER_WSP,
} from "@/utils/whatsappUtils";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="pt-16 lg:mx-32 mx-5 text-zinc-500 tracking-wide leading-loose">
      <hr />
      <nav className="px-5 text-sm text-center sm:text-left mb-2">
        <ul className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1">
          <li className="">
            <span className="font-bold text-lg">Contactanos</span>
            <ul className="flex flex-col gap-2 items-center sm:items-start">
              <li className="flex gap-2 items-center">
                <Link
                  className="font-medium text-violet-600 underline flex gap-4"
                  href="/contact"
                >
                  <img src="/gmail.png" className="w-7 h-7" />
                  <p className="break-all">kedevs.pe@gmail.com</p>
                </Link>
              </li>
              <li className="flex gap-2  items-center">
                <img src="/call.png" className="w-8 h-8" />
                <span>{KEDEVS_PHONE_NUMBER}</span>
              </li>
              <Link
                href={`https://wa.me/${KEDEVS_PHONE_NUMBER_WSP}?text=Hola,%20quisiera%20información%20sobre%20sus%20servicios.`}
                target="_blank"
                className="text-green-600 flex gap-2 items-center"
              >
                <img src="/wsp.png" className="w-8 h-8" />
                <span className="font-medium">{KEDEVS_PHONE_NUMBER}</span>
              </Link>
              <li className="mt-2">Estamos en todo el Perú</li>
            </ul>
          </li>
          <li className="order-3">
            <Link href="/">
              <span className="font-bold text-lg">Empresa</span>
            </Link>
            <ul className="hidden sm:block">
              <li>
                <a href="/">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#">Clientes</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="/hiring">Proceso de seleccíon</a>
              </li>
              <li>
                <a href="/hiring">Carrera -- Estamos contratando</a>
              </li>
              <li>
                <a href="/hiring">Posiciones abiertas</a>
              </li>
            </ul>
          </li>
          <li className="order-3">
            <Link href="/services">
              <span className="font-bold text-lg">Servicios</span>
            </Link>
            <ul className="hidden sm:block">
              {services &&
                services.map((e) => (
                  <li key={e.id}>
                    <a className="hover:underline " href="/services">
                      {e.name}
                    </a>
                  </li>
                ))}
              <li>
                <a className="text-blue-400 underline" href="/services">
                  Ver más servicios
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/projects">
              <span className="font-bold text-lg">Experiencia</span>
            </Link>
            <ul className="hidden sm:block">
              <li>
                <a href="#">Desarrollo Web</a>
              </li>
              <li>
                <a href="#">Desarrollo Mobile</a>
              </li>
              <li>
                <a href="#">Automatización de procesos</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center w-full">
        <div className="border-t border-gray-300 flex-1"></div>
        <div className="mx-4">
          <LogoHorizontal />
        </div>
        <div className="border-t border-gray-300 flex-1"></div>
      </div>

      <main className="mb-4 mt-2">
        <div className="text-center">
          <h1 className="text-sm">COPYRIGHT © 2017-2024 Kedevs, INC.</h1>
          <p className="text-xs">Todos los derechos reservados</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
