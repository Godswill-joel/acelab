"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

        <div className="relative  flex items-center justify-center h-[280px]  mx-auto sm:h-[340px] md:h-[400px] lg:h-[500px]  overflow-hidden">
          {testimonialImages.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity p-4 bg-white-500 duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index === currentIndex}
                className="object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>


        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${index === currentIndex
                ? "bg-blue-400 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}