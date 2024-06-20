import React from "react";
import NavBar from "@/app/components/common/NavBar";
import Footer from "@/app/components/common/Footer";

function page() {
  return (
    <div>
      <NavBar />
      <main className={`pt-20`}>
        <div className="px-16 pt-10 md:pt-32">
          <h1 className="text-4xl text-rose-600">
            Ops!!!, vista en construcción
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default page;
