"use client";
import Image from "next/image";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Title from "./Title";
import ValueCompany from "./ValueCompany";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Title />
      <ValueCompany />
      <Footer />
    </div>
  );
}
