"use client";

import React from "react";
import logo from "../../../../public/kedevs_logo.png";
import Image from "next/image";

function ImageComponent() {
  return (
    <Image
      src={logo}
      alt="Kedevs"
      width={500}
      height={300}
      className="w-[200px]"
    ></Image>
  );
}

export default ImageComponent;
