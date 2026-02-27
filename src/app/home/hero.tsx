"use client";
import Image from "next/image";
import Hero1 from "../../../public/assets/images/Hero2.png";
import Hero2 from "../../../public/assets/images/hero3.png";
import Hero4 from "../../../public/assets/images/hero4.jpg";
import Hero3 from "../../../public/assets/images/Vesselocen.webp";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  Description: string[];
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "ACELAB ACADEMY",
    subtitle: "Procurement",
    Description: [
      "Procurement of electrical/mechanical spares on all types of vessels,Industrial machinery/electrical components for all industries,Construction equipment/tools,General office supplies",
    ],
    image: Hero1.src,
  },
  {
    id: 2,
    title: "ACELAB ACADEMY",
    subtitle: "Training Services",
    Description: [
      "Hands-on technical training programs, Certified industrial safety courses, Engineering competency development, On-site corporate training",
    ],
    image: Hero2.src,
  },
  {
    id: 3,
    title: "ACELAB ACADEMY",
    subtitle: "Technical Services",
    Description: [
      "Electrical installations and maintenance, Automation & control systems, Industrial troubleshooting, Marine electrical services",
    ],
    image: Hero3.src,
  },
  {
    id: 4,
title: "ACELAB ACADEMY",
    subtitle: "Consultancy",
    Description: [
      "Engineering consultancy solutions, Operational audits, Project planning & execution, Technical advisory services ",
    ],
    image: Hero4.src,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.subtitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center text-white text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-blue-400"
            >
              {currentSlide.title}
            </motion.h1>

            <motion.h2
              className="mt-2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold"
            >
              {currentSlide.subtitle}
            </motion.h2>

            <motion.ul
              className="mt-4 sm:mt-6 space-y-2 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2"
            >
              {currentSlide.Description.map((Description, i) => (
                <li key={i}>{Description}</li>
              ))}
            </motion.ul>

            <motion.button
              className="mt-6 sm:mt-8 rounded-full bg-blue-400 hover:bg-blue-700 transition px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
