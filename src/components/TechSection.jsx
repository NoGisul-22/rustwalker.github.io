import React from "react";
import { motion } from "framer-motion";
import TechIcons from "./TechIcons";

const TechSection = () => {
  return (
    <section className="w-full h-screen flex">
      {/* Columna izquierda (texto) */}
      <div
        className="w-[30%] h-full bg-[#212121] p-10 flex flex-col justify-start gap-5 text-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl"
        >
          Tecnologias Usadas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-[18px] font-light text-gray-400"
        >
          Este proyecto fue desarrollado como parte del parcial de la asignatura
          de Compiladores en la Universidad Uniremington - Sede Yopal. Para su
          elaboración se emplearon diversas tecnologías, entre ellas GitHub,
          LibreSprite, Pygame, Python como lenguaje principal y Tiled para el
          diseño de los mapas. Puedes hacer clic en los íconos para acceder a
          sus páginas oficiales.
        </motion.p>
      </div>

      {/* Columna derecha (iconos animados) */}
      <div
        className="w-[70%] h-full bg-[url(/src/assets/images/fondo_black.png)] bg-no-repeat bg-center bg-cover bg-[#212121]/50 bg-blend-multiply"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <TechIcons />
      </div>
    </section>
  );
};

export default TechSection;
