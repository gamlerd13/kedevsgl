import React from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Team from "./Team";

function page() {
  return (
    <>
      <NavBar />

      <header className={` pt-20`}>
        <div className="pt-32">
          <h1 className="text-6xl text-center font-bold px-16">
            Nuestro equipo es una comunidad en crecimiento y con
            <span className="font-bold text-violet-600"> diversidad </span>
            de personas con
            <span className="font-bold text-violet-600"> talento </span> y muy
            <span className="font-bold text-violet-600"> comprometidas. </span>
          </h1>
          <div className="flex justify-center py-8">
            <Link href="/hiring" legacyBehavior passHref>
              <Button>
                Estamos contrando <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className="w-full flex justify-center">
        <Team />
      </div>

      <Footer />
    </>
  );
}

export default page;