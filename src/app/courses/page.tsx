"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarineElectricalTraining from "./marineElectricalTraining";

export default function courses() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      <Image
        src="/images/marine-eto-bg.jpg" 
        alt="Marine Electro Technical Officer Training"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          {/* Title */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: [0, -12, 0], opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Marine Electro-Technical Officer <br className="hidden sm:block" />
            (Preparatory Class)
          </motion.h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Eligibility: Marine Electricians, Marine Engineers, Diploma / HND /
            BEE / MEE
          </p>

          {/* Divider */}
          <div className="w-16 h-[3px] bg-blue-400 mx-auto mt-6 rounded-full" />
        </div>
      </div>
      <MarineElectricalTraining />
    </section>
  );
}
