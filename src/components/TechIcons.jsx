import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importaciones de imágenes
import githubIcon from "../assets/icons/github.webp";
import librespriteIcon from "../assets/icons/libresprite.webp";
import pygameIcon from "../assets/icons/pygame.webp";
import pythonIcon from "../assets/icons/python.webp";
import tiledIcon from "../assets/icons/tiled.webp";

const techData = {
  github: {
    img: githubIcon.src,
    name: "GitHub",
    link: "https://github.com",
    description:
      "Usado para control de versiones y almacenamiento del código del proyecto.",
    help: "Da clic afuera de esta pantalla para salir",
  },
  libresprite: {
    img: librespriteIcon.src,
    name: "LibreSprite",
    link: "https://libresprite.github.io/",
    description:
      "Herramienta utilizada para crear y editar sprites en pixel art.",
    help: "Da clic afuera de esta pantalla para salir",
  },
  pygame: {
    img: pygameIcon.src,
    name: "Pygame",
    link: "https://www.pygame.org/",
    description:
      "Librería de Python usada para desarrollar la lógica del videojuego.",
    help: "Da clic afuera de esta pantalla para salir",
  },
  python: {
    img: pythonIcon.src,
    name: "Python",
    link: "https://www.python.org/",
    description: "Lenguaje principal del proyecto para programar el juego.",
    help: "Da clic afuera de esta pantalla para salir",
  },
  tiled: {
    img: tiledIcon.src,
    name: "Tiled",
    link: "https://www.mapeditor.org/",
    description: "Editor de mapas usado para diseñar los niveles del juego.",
    help: "Da clic afuera de esta pantalla para salir",
  },
};

const TechIcons = () => {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <div className="w-full h-full p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 select-none">
      {/* Fila 1 */}
      {["github", "libresprite", "pygame"].map((tech, i) => (
        <motion.div
          key={tech}
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            draggable="false"
            src={techData[tech].img}
            alt={techData[tech].name}
            className="w-50 h-auto select-none cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => setSelected(tech)}
          />
        </motion.div>
      ))}

      {/* Fila 2 */}
      <motion.div
        className="col-span-1 sm:col-span-3 flex justify-center items-center gap-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {["python", "tiled"].map((tech) => (
          <motion.img
            key={tech}
            draggable="false"
            src={techData[tech].img}
            alt={techData[tech].name}
            className="w-50 h-auto select-none cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => setSelected(tech)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#212121] text-white rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-[80%] max-h-[70%] overflow-y-auto"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={techData[selected].img}
                alt={techData[selected].name}
                className="w-40 h-auto mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">
                {techData[selected].name}
              </h2>
              <a
                href={techData[selected].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold underline mb-6 hover:text-blue-300"
              >
                Ir al sitio oficial
              </a>
              <p className="text-center text-lg text-gray-200">
                {techData[selected].description}
              </p>
              <p className="text-center text-[14px] text-green-600">
                {techData[selected].help}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechIcons;
