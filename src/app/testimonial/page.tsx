"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonialImages } from "../data/data";


export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonialImages.length - 1 ? 0 : prev + 1
            );
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#eef3f3] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <Image
                        src="/images/marine-eto-bg.jpg"
                        alt="Marine Electro Technical Officer Training"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">

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
                                className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-400 leading-tight mb-4"
                            >
                                Testimoines
                            </motion.h1>
                            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
                                Hear what our Previous Students
                            </p>

                            {/* Divider */}
                            <div className="w-16 h-[3px] bg-blue-400 mx-auto mt-6 rounded-full" />
                        </div>
                    </div>

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
