"use client";

import React from "react";
// import logo from "../../../../public/kedevs-logo_horizontal.png";
import logo from "../../../../public/kedevs.png";
import Image from "next/image";

function LogoHorizontal() {
  return <Image src={logo} alt="Kedevs" width={120} height={40}></Image>;
}

export default LogoHorizontal;
