import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const DownloadSection = () => {
  return (
    <div className="w-full h-[75vh] bg-[url(/download_bg.png)] bg-no-repeat bg-cover bg-start flex text-white">
      {/* Columna izquierda */}
      <div className="flex-1 h-full flex flex-col justify-start pl-10 pr-30 pt-30 gap-10">
        <motion.h1
          className="text-4xl"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0}
        >
          ¡DESCARGA -JUEGO- YA!
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.2}
        >
          Este juego se encuentra actualmente en desarrollo, sin embargo, puedes
          descargar aquí la versión beta:
        </motion.p>

        <motion.div
          className="pl-15"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.4}
        >
          <p className="text-gray-500">
            - Descargar para:{" "}
            <a href="#" className="hover:text-blue-300 transition duration-200">
              windows 64 bits XMB
            </a>
          </p>
          <p className="text-gray-500">
            - Descargar para:{" "}
            <a href="#" className="hover:text-blue-300 transition duration-200">
              windows 32 bits XMB
            </a>
          </p>
        </motion.div>
      </div>

      {/* Columna derecha */}
      <div className="flex-1 h-full flex flex-col justify-start pl-10 pr-30 pt-30 gap-10">
        <motion.h1
          className="text-4xl"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0}
        >
          REQUISITOS
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.2}
        >
          El juego es lo suficientemente liviano como para correr en
          prácticamente cualquier computadora actual
        </motion.p>
      </div>
    </div>
  );
};

export default DownloadSection;
