import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Title from "./Title";
import ValueCompany from "./ValueCompany";
import DiagonalBrandCarousel from "./components/DiagonalBrandCarousel";
import UserReviews from "./components/user-reviews";
import AboutUs from "./components/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kedevs",
  description: "En Kedevs es donde encontraras los mejores servicios",
  openGraph: {
    title: "Kedevs",
    description: "En kedevs encontraras los mejores servicios",
    images: [
      {
        url: "/kedevs.jpg",
        width: 1200,
        height: 630,
        alt: "kedevs logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <Title />
      <AboutUs idAboutUs="about-us" />
      <div className="md:mx-32 ">
        <UserReviews />
      </div>
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
