"use client";

import React from "react";
import NavBar from "@/app/components/common/NavBar";
import Footer from "@/app/components/common/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, ShoppingCart, Hotel, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "CRM",
    icon: Users,
    description: "Gestión de relaciones con clientes eficiente y personalizada",
  },
  {
    name: "Landing Pages",
    icon: Monitor,
    description: "Páginas de aterrizaje que convierten visitantes en clientes",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Tiendas en línea robustas y fáciles de usar",
  },
  {
    name: "Páginas para Hoteles",
    icon: Hotel,
    description: "Sitios web elegantes para la industria hotelera",
  },
];

function page() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen  pt-20">
        <main className="container mx-auto  p-16 pt-10 md:pt-26 bg-blue-found">
          <motion.h1
            className="text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sobre <span className="text-green-letter"> Nosotros</span>
          </motion.h1>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-400">
              En Kedevs, nos dedicamos a crear experiencias digitales
              excepcionales que impulsan el crecimiento de tu negocio.
              Combinamos diseño innovador, tecnología de vanguardia y
              estrategias personalizadas para ofrecer soluciones web que
              destacan en el mercado digital.
            </p>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold  mb-6 text-white">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link href={`/contact`}>
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <service.icon className="w-12 h-12  mb-4" />
                    <h3 className="text-xl font-semibold  mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-white text-3xl font-semibold  mb-4">
              Nuestro Enfoque
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              Nos enorgullecemos de nuestro enfoque centrado en el cliente y
              nuestro compromiso con la excelencia en cada proyecto. Nuestro
              equipo de expertos combina creatividad y experiencia técnica para
              ofrecer soluciones web que no solo se ven increíbles, sino que
              también funcionan a la perfección.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3  font-semibold rounded-lg  transition-colors duration-300 bg-black text-white hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos <ArrowRight className="ml-2" />
            </motion.a>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold  mb-4 text-white">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-400">
              Fundada en 2024, DigiSolutions ha crecido de un pequeño equipo de
              desarrolladores apasionados a una agencia digital líder en la
              industria. A lo largo de los años, hemos ayudado a cientos de
              empresas a establecer su presencia en línea y alcanzar sus
              objetivos digitales. Nuestro compromiso con la innovación y la
              satisfacción del cliente nos ha permitido mantenernos a la
              vanguardia de las tendencias tecnológicas y de diseño, ofreciendo
              siempre soluciones de primera clase.
            </p>
          </motion.section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default page;
