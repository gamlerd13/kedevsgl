import React from "react";
import type { Metadata } from "next";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Link from "next/link";
import Team from "./Team";
import { BtnContact } from "../components/common/btn-contact";

export const metadata: Metadata = {
  title: "Kedevs | Equipo",
  description: "Team kedevs",
};

function page() {
  return (
    <>
      <NavBar />

      <header className={` pt-20`}>
        <div className="pt-10 md:pt-32">
          <h1 className="text-xl md:text-6xl text-center font-bold px-16">
            Nuestro equipo es una comunidad en crecimiento y con
            <span className="font-bold text-green-letter"> diversidad </span>
            de personas con
            <span className="font-bold text-green-letter"> talento </span> y muy
            <span className="font-bold text-green-letter">
              {" "}
              comprometidas.{" "}
            </span>
          </h1>
          <div className="flex justify-center py-8">
            <Link href="/hiring" legacyBehavior passHref>
              <BtnContact title="Estamos contrando" />
            </Link>
          </div>
        </div>
      </header>
      <div className="w-ful">
        <Team />
      </div>

      <Footer />
    </>
  );
}

export default page;
