import React from "react";
import type { Metadata } from "next";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Services from "./Services";
import servicesData from "@/app/components/common/services.json";
import { ServiceType } from "@/app/types/global";

export const metadata: Metadata = {
  title: "Kedevs | servicios",
  description: "Kedevs Services",
};

function page() {
  const data: ServiceType[] = servicesData;
  return (
    <div>
      <NavBar />
      <header className="pt-20 p-4">
        <h1 className="text-xl md:text-6xl text-center font-bold md:px-16 pt-20">
          Ofrecemos una amplia gama de{" "}
          <span className="text-green-letter font-bold">
            soluciones digitales
          </span>{" "}
          diseñadas para optimizar la{" "}
          <span className="text-green-letter font-bold">
            gestión empresarial
          </span>
        </h1>
      </header>
      <main className="lg:mx-32 px-4 grid grid-cols-4 gap-2">
        {data.length &&
          data.map((item) => (
            <div key={item.id} className="col-span-4 md:col-span-2">
              <Services service={item} />
            </div>
          ))}
      </main>

      <Footer />
    </div>
  );
}

export default page;
