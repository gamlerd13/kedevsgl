import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Services from "./Services";
import servicesData from "@/app/components/common/services.json";
import { ServiceType } from "@/app/types/global";

function page() {
  const data: ServiceType[] = servicesData;
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <NavBar />
      <header className="pt-20 lg:mx-32 p-4">
        <h1 className="lg:text-6xl text-lg text-center">
          Ofrecemos una amplia gama de{" "}
          <span className="text-violet-600 font-medium">
            soluciones digitales
          </span>{" "}
          diseñadas para optimizar la{" "}
          <span className="text-violet-600 font-medium">
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
