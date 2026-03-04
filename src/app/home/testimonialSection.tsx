"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonialImages } from "../data/data";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonialImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#eef3f3] py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-2xl tracking-widest text-blue-400 uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 max-w-xl">
              What Our Guests Say About Us
            </h2>
          </div>

          <button className="mt-6 md:mt-0 bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            <Link href="/testimonial" className="block w-full h-full">
              View All Testimonials
            </Link>
          </button>
        </div>

        {/* ===== SIMPLE HORIZONTAL SCROLL SECTION ===== */}
        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">
                    {testimonialImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl bg-white shadow-lg overflow-hidden"
                        >
                            <div className="relative h-72 sm:h-80 md:h-96 p-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
      </div>
    </section>
  );
}