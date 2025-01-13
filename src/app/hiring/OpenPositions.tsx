"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { BtnContact } from "../components/common/btn-contact";

function OpenPositions() {
  const [isLoading, setIsLoading] = useState(true);
  const [lookupPosition, setLookupPosition] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [lookupPosition]);

  const handleLookup = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsLoading(true);
    setLookupPosition(e.target.value);
  };

  return (
    <div className="md:mx-32">
      <div className="p-5 grid grid-cols-5 gap-1 place-items-center">
        <Input
          onChange={(e) => {
            if (e.target.value.trim().length > 0) {
              return handleLookup(e);
            }
          }}
          className="sm:col-span-4 col-span-5"
          type="text"
          placeholder="Fronted .."
        />
        <BtnContact title="Buscar" />
      </div>
      <div className="p-5 h-48">
        {isLoading ? (
          <h1>Cargando ...</h1>
        ) : (
          <h1>
            Lo sentimos, actualmente no tenemos posiciones abiertas
            {lookupPosition.trim().length > 0 && (
              <>
                <span> para el puesto de </span>

                <span className="font-medium text-violet-600">{`${lookupPosition}`}</span>
              </>
            )}
          </h1>
        )}
      </div>
    </div>
  );
}

export default OpenPositions;
