import React from "react";
import Link from "next/link";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import OpenPositions from "./OpenPositions";
import type { Metadata } from "next";
import { BtnContact } from "../components/common/btn-contact";

export const metadata: Metadata = {
  title: "Kedevs | hiring",
  description: "Se parte de Kedevs",
};

function page() {
  return (
    <>
      <NavBar />

      <main className={`pt-20`}>
        <div className="pt-10 md:pt-32">
          <h1 className="text-xl md:text-6xl text-center font-bold px-16">
            Deja huella trabajando a distancia con nosotros y
            <span className="font-bold text-green-letter">
              {" "}
              clientes de todo el mundo,{" "}
            </span>
            aprende con los mejores.
          </h1>
          <div className="flex justify-center py-8">
            <Link href="/team" legacyBehavior passHref>
              <BtnContact title="Nuestro Equipo" />
            </Link>
          </div>
        </div>
      </main>
      <OpenPositions />
      <Footer />
    </>
  );
}

export default page;
