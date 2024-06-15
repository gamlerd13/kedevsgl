"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Title() {
  return (
    <main className={`h-[32rem] pt-20`}>
      <div className="pt-32">
        <h1 className="text-6xl text-center font-bold px-16">
          Desata el potencial de
          <span className="font-bold text-violet-600"> crecimiento </span>
          de tu organización e impúlsala a convertirse en su mejor versión
        </h1>
        <div className="flex justify-center py-8">
          <Button>
            Contactarse <ChevronRight />
          </Button>
        </div>
      </div>
    </main>
  );
}
export default Title;
