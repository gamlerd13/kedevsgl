"use client";

import React from "react";
import LogoHorizontal from "./LogoHorizontal";

function Footer() {
  return (
    <footer className="pt-16 md:mx-32 mx-5 text-zinc-500 tracking-wide leading-loose">
      <nav className="px-5">
        <ul className="grid md:grid-cols-5 gap-4 grid-cols-1">
          <li className="md:col-span-2">
            <span className="font-bold text-lg">Contactanos</span>
            <ul>
              <li>
                Escribenos - <a className="font-medium text-violet-600 underline" href="#">hola@kedevs.com</a>
              </li>
              <li>
                Llamanos - <span>96521424</span>
              </li>
              <li className="text-green-600">
                Whatsapp - <span className="font-medium">96521424</span>
              </li>
              <li>
              <a href="#" className="text-blue-600 font-medium underline">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 font-medium underline">Linkedin</a>
              </li>
              <li>
                <a href="#" className="text-black font-medium underline">twitter</a>
              </li>
              <li>
                <a href="#" className="text-rose-600 font-medium underline">Instagram</a>
              </li>
              <li>Estamos en todo el Perú</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg" >Empresa</span>
            <ul className="">
                <li>
                  <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="#">Clientes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Proceso de seleccíon</a>
                </li>
                <li>
                  <a href="#">Carrera -- Estamos contratando</a>
                </li>
                <li>
                  <a href="#">Posiciones abiertas</a>
                </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg" >Servicios</span>
            <ul>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
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
          <h1 className="text-sm">
            COPYRIGHT © 2012-2024 Kedevs, INC.
          </h1>
          <p className="text-xs">Todos los derechos reservados</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
