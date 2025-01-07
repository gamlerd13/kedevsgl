"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import LogoHorizontal from "./common/LogoHorizontal";

export default function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full bg-blue-found text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span className="sr-only">Open menu</span>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 45, y: 0 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-white absolute"
        ></motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-white"
        ></motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: -45, y: 0 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-white absolute"
        ></motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-screen backdrop-blur-md bg-white/20  text-white p-6 shadow-lg"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-red-400 hover:text-red-400 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <Link href="/">
              <LogoHorizontal />
            </Link>
            <nav className="flex flex-col space-y-6 mt-16 ">
              <Link
                href="/"
                className="text-xl text-blue-found font-semibold hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/services"
                className="text-xl text-blue-found font-semibold hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link
                href="/hiring"
                className="text-xl text-blue-found font-semibold hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Estamos Contratando
              </Link>
              <Link
                href="/contact"
                className="text-xl font-semibold text-blue-found hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Contáctanos
              </Link>
              <Link
                href="/projects"
                className="text-xl font-semibold text-blue-found hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Proyectos
              </Link>
              <Link
                href="/team"
                className="text-xl text-blue-found font-semibold hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Nuestro Equipo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
