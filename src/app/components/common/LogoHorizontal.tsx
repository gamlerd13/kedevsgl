"use client";

import React from "react";
import logo from "../../../../public/kedevs.jpg";
import Image from "next/image";

function LogoHorizontal() {
  return (
    <Image
      src={logo}
      alt="Kedevs"
      width={120}
      height={40}
      className="rounded-md"
    ></Image>
  );
}

export default LogoHorizontal;
