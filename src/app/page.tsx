"use client";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Title from "./Title";
import ValueCompany from "./ValueCompany";
import DiagonalBrandCarousel from "./components/DiagonalBrandCarousel";
import UserReviews from "./components/user-reviews";
import AboutUs from "./components/about-us";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Title />
      <AboutUs />
      <UserReviews />
      <div className="mx-2 py-10 rounded-lg mt-4">
        <h2 className="text-2xl md:text-6xl font-bold text-center mt-8 md:mx-32">
          <span className="text-green-letter">¡¡¡ </span>
          Gracias por confiar en{" "}
          <span className="text-green-letter">Nosotros </span>
          !!!
        </h2>
        <DiagonalBrandCarousel />
        <ValueCompany />
      </div>
      <Footer />
    </div>
  );
}
