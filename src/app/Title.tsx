"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Title() {
  return (
    <main className={`pt-20`}>
      <div className="pt-10 md:pt-32">
        <h1 className="text-xl md:text-6xl text-center font-bold px-16">
          Desata el potencial de
          <span className="font-bold text-green-letter"> crecimiento </span>
          de tu organización e impúlsala a convertirse en su mejor versión
        </h1>
        <div className="flex justify-center py-8">
          <Link href="/contact" legacyBehavior passHref>
            <Button>
              Contactarse <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Title;
