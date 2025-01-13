"use client";

import { motion } from "framer-motion";
import { Users, Target, History } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { BtnContact } from "./common/btn-contact";
import Link from "next/link";

interface AboutUsProps {
  idAboutUs: string;
}

export default function AboutUs({ idAboutUs }: AboutUsProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20"
      id={idAboutUs}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-emerald-500/30 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl  text-white md:text-5xl font-bold mb-4">
            Sobre <span className="text-emerald-500 test">Nosotros</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-emerald-500/10 w-fit rounded-lg">
                  <Target className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-500 transition-colors">
                  Nuestra Misión
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  En Kedevs, nos dedicamos a crear experiencias digitales
                  excepcionales que impulsan el crecimiento de tu negocio.
                  Combinamos diseño innovador, tecnología de vanguardia y
                  estrategias personalizadas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-500/10 w-fit rounded-lg">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-500 transition-colors">
                  Nuestro Enfoque
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Nos enorgullecemos de nuestro enfoque centrado en el cliente y
                  nuestro compromiso con la excelencia. Nuestro equipo combina
                  creatividad y experiencia técnica para ofrecer soluciones web
                  excepcionales.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg">
                  <History className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">
                  Nuestra Historia
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Fundada en 2024, hemos crecido desde un pequeño equipo de
                  desarrolladores apasionados hasta convertirnos en una agencia
                  digital líder, ayudando a cientos de empresas a alcanzar sus
                  objetivos digitales.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact">
            <BtnContact title="Contáctanos" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
