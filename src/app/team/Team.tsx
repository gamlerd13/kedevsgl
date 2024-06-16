import React from "react";
import { Button } from "@/components/ui/button";
import team from "./devs.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function Team() {
  return (
    <main className="pt-20 px-16 md:w-5/6 xl:w-4/6 w-6/6">
      <div className="text-center text-[36px] font-bold underline">
        <h1> Our Team </h1>
      </div>
      <div>
        {team.length &&
          team.map((e) => (
            <div key={e.id}>
              <h1 className="font-bold text-xl px-4 py-2">
                {e.position_category == "development"
                  ? "Equipo de desarrollo"
                  : "Equipo de Marketing"}
              </h1>
              <hr />
              <div className="grid grid-cols-5 gap-5 pt-4">
                <Card className=" md:col-span-2 col-span-5">
                  <CardHeader>
                    <CardTitle>{e.name}</CardTitle>
                    <CardDescription>{e.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full flex justify-center ">
                      <div className="relative w-4/6  sm:w-3/6 md:w-5/6  h-36 rounded-full overflow-hidden">
                        <Image
                          src={e.url_image}
                          alt="Kedevs"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full "
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <ul>
                      <li className="font-bold text-xl">
                        {e.experiencie}+{" "}
                        <span className="font-normal text-sm">
                          de experiencia
                        </span>
                      </li>
                      <li>
                        <a
                          href="www.github.com"
                          className="text-blue-500 underline"
                        >
                          Linkedin
                        </a>
                      </li>
                    </ul>
                  </CardFooter>
                </Card>
                <div className="md:col-span-3 col-span-5 md:px-10">
                  <h1 className="p-4 font-medium text-lg">Descripción</h1>
                  <p className="px-4 text-slate-400">{e.background}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Team;
