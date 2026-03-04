"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialImages } from "../data/data";

export default function TestimonialSection() {
    return (
        <section className="bg-[#eef3f3] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* ===== HERO HEADER SECTION ===== */}
                <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden mb-16">
                    <Image
                        src="/images/marine-eto-bg.jpg"
                        alt="Marine Electro Technical Officer Training"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
                        <div className="text-center max-w-5xl">
                            <motion.h1
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4"
                            >
                                Testimonials
                            </motion.h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
                                Hear what our previous students have to say about their
                                experience with us.
                            </p>

                            <div className="w-16 h-[3px] bg-blue-400 mx-auto mt-6 rounded-full" />
                        </div>
                    </div>
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