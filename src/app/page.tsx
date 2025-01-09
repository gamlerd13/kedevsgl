"use client";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Title from "./Title";
import ValueCompany from "./ValueCompany";
import DiagonalBrandCarousel from "./components/DiagonalBrandCarousel";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Title />
      <ValueCompany />
      <div className="mx-2 py-10 rounded-lg mt-4">
        <h2 className="text-2xl md:text-6xl font-bold text-center mt-8 md:mx-32">
          <span className="text-green-letter">¡¡¡ </span>
          Gracias por confiar en{" "}
          <span className="text-green-letter">Nosotros </span>
          !!!
        </h2>
        <DiagonalBrandCarousel />
      </div>
      <Footer />
    </div>
  );
}
