"use client";

import React from "react";
import LogoHorizontal from "./LogoHorizontal";
import services from "@/app/components/common/servicesData.json";
import { KEDEVS_PHONE_NUMBER } from "@/utils/whatsappUtils";

function Footer() {
  return (
    <footer className="pt-16 lg:mx-32 mx-5 text-zinc-500 tracking-wide leading-loose">
      <hr />
      <nav className="px-5 text-sm">
        <ul className="grid md:grid-cols-5 gap-4 grid-cols-1">
          <li className="md:col-span-2">
            <span className="font-bold text-lg">Contactanos</span>
            <ul>
              <li>
                Escribenos -{" "}
                <a
                  className="font-medium text-violet-600 underline"
                  href="/contact"
                >
                  kedevs.pe@gmail.com
                </a>
              </li>
              <li>
                Llamanos - <span>{KEDEVS_PHONE_NUMBER}</span>
              </li>
              <li className="text-green-600">
                Whatsapp -{" "}
                <span className="font-medium">{KEDEVS_PHONE_NUMBER}</span>
              </li>
              <li>
                <a href="#" className="text-blue-600 font-medium underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 font-medium underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-medium underline">
                  twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@kedevss"
                  target="_blank"
                  className="text-black font-medium underline"
                >
                  Tick tock
                </a>
              </li>
              <li>
                <a href="#" className="text-rose-600 font-medium underline">
                  Instagram
                </a>
              </li>
              <li>Estamos en todo el Perú</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg">Empresa</span>
            <ul className="">
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
          <li>
            <span className="font-bold text-lg">Servicios</span>
            <ul>
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
            <span className="font-bold text-lg">Experiencia</span>
            <ul>
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
      <hr />
      <main className="grid grid-cols-3">
        <div className="px-5">
          <LogoHorizontal />
        </div>
        <div className="col-span-2">
          <h1 className="text-sm">COPYRIGHT © 2017-2024 Kedevs, INC.</h1>
          <p className="text-xs">Todos los derechos reservados</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
