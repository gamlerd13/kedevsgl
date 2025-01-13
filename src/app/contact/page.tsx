import React from "react";
import type { Metadata } from "next";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "sonner";
import ContactForm from "./ContactForm";
export const metadata: Metadata = {
  title: "Kedevs | contacto",
  description: "En Kedevs es donde encontraras los mejores servicios",
};
function page() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-found">
      <Toaster />
      <NavBar />
      <div className="pt-32 lg:mx-64 mx-5 ">
        <Card>
          <CardHeader>
            <CardTitle>Contáctanos</CardTitle>
            <CardDescription>
              Queremos conocer todo acerca de tu proyecto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default page;
