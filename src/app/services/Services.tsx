"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { ServiceType } from "@/app/types/global";
import { useDefaultMessage } from "@/store/defaultMessage";

function Services({ service }: { service: ServiceType }) {
  const { message, changeField } = useDefaultMessage();

  const { name, title, description } = service;

  const handleRequestInformation = (name: string) => {
    changeField({
      ...message,
      message: `Hola equipo de Kedevs, quiero información acerca del servicio de:  ${name}, que ustedes ofrecen ...`,
    });
  };
  return (
    <Card className="mb-4 ">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link href="/contact" legacyBehavior passHref>
          <Button onClick={() => handleRequestInformation(name)}>
            Solicitar información <ChevronRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Services;
