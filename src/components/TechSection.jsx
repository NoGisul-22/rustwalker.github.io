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
          className="text-[18px]"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quam voluptates repellendus ducimus pariatur, ab quisquam suscipit
          architecto a voluptatibus repudiandae cupiditate tenetur officia neque
          dicta blanditiis esse necessitatibus temporibus.
        </motion.p>
      </div>

      {/* Columna derecha (iconos animados) */}
      <div
        className="w-[70%] h-full bg-[url(/fondo_black.png)] bg-no-repeat bg-center bg-cover bg-[#212121]/50 bg-blend-multiply"
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
