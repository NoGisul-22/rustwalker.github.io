import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const slides = [
  { src: "/src/assets/images/carousel/map1.png", alt: "Slide 1 carrusel" },
  { src: "/src/assets/images/carousel/map2.png", alt: "Slide 2 carrusel" },
  { src: "/src/assets/images/carousel/map3.png", alt: "Slide 3 carrusel" },
];

const CarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      className="relative w-full h-[70%] pt-10"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Carrusel */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className="flex-[0_0_50%] w-full h-full flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: selectedIndex === i ? 1 : 0.3,
                scale: selectedIndex === i ? 1 : 0.9,
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-contain h-[420px] w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Barra de navegación animada */}
      <div className="bottom-4 left-0 right-0 px-10 pt-10">
        <div className="h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            animate={{
              width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselComponent;
