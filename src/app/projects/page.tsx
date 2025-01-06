"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const projects = [
  {
    id: 1,
    title: "CRM sms masivos",
    image: "/crm-wsp.webp",
    video: "I0WRofsjD8U",
  },
  {
    id: 2,
    title: "Landing Page Para Hotel",
    image: "/hoteles.webp",
    video: "SdAAV9L3F_Y",
  },
  {
    id: 3,
    title: "CRM A Medida",
    image: "/crms.webp",
    video: "VPGjBBmOa60",
  },
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <NavBar />

      <div className="pt-10 md:pt-32">
        <h1 className="text-xl md:text-6xl text-center font-bold px-16">
          Desata el potencial de
          <span className="font-bold text-green-letter"> crecimiento </span>
          de tu organización e impúlsala a convertirse en su mejor versión
        </h1>
      </div>
      <section id="proyectos" className="py-20 bg-blue-found mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-20 capitalize">
            Algunos de nuestros proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className={`h-[60%] w-full cursor-pointer ${index == projects.length - 1 ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto md:w-[50%] lg:w-full" : ""}`}
              >
                <motion.div className={`rounded-2xl shadow-lg overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold text-gray-800 text-center uppercase">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={`project-${selectedId}`}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  className="bg-white rounded-lg p-6 w-full max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-2xl font-bold mb-4">
                    {projects.find((p) => p.id === selectedId)?.title}
                  </h2>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${projects.find((p) => p.id === selectedId)?.video}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Cerrar
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  );
}
