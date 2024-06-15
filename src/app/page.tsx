"use client"
import Image from "next/image";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Title from "./Title";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Title/>
      <Footer/>
    </div>
  );
}
