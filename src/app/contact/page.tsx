import React from "react";
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
import ContactForm from "./ContactForm";

function page() {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <Card>
          <CardHeader>
            <CardTitle>Contáctanos</CardTitle>
            <CardDescription>Queremos conocer todo acerca de tu proyecto</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm/>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default page;
