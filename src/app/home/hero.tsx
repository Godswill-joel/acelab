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
        title: "ACELABVIEW",
        subtitle: "Procurement",
        Description: [
            "Procurement of electrical/mechanical spares on all types of vessels,Industrial machinery/electrical components for all industries,Construction equipment/tools,General office supplies",
        ],
        image: Hero1.src,
    },
    {
        id: 2,
        title: "ACELABVIEW",
        subtitle: "Training Services",
        Description: [
            "Hands-on technical training programs, Certified industrial safety courses, Engineering competency development, On-site corporate training",
        ],
        image: Hero2.src,
    },
    {
        id: 3,
        title: "ACELABVIEW",
        subtitle: "Technical Services",
        Description: [
            "Electrical installations and maintenance, Automation & control systems, Industrial troubleshooting, Marine electrical services",
        ],
        image: Hero3.src,
    },
    {
        id: 4,
        title: "ACELABVIEW",
        subtitle: "Consultancy",
        Description: [
            "Engineering consultancy solutions, Operational audits, Project planning & execution, Technical advisory services ",
        ],
        image: Hero4.src,
    },
];

const imageAnimations = [
    { initial: { x: 120, opacity: 0 }, animate: { x: 0, opacity: 1 } },   // slide in
    { initial: { y: 120, opacity: 0 }, animate: { y: 0, opacity: 1 } },   // from below
    { initial: { y: -120, opacity: 0 }, animate: { y: 0, opacity: 1 } },  // from top
    { initial: { scale: 1.1, opacity: 0 }, animate: { scale: 1, opacity: 1 } }, // zoom-in
];

const titleAnimations = [
    { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
];

const textAnimations = [
    { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
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
    const imageAnim = imageAnimations[index];
    const titleAnim = titleAnimations[index];
    const textAnim = textAnimations[index];

    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
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
                        {...imageAnim}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={currentSlide.image}
                            alt={currentSlide.subtitle}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-white text-center">
                        <motion.h1
                            {...titleAnim}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl  md:text-7xl md:mt-3 font-extrabold tracking-wide text-blue-400"
                        >
                            {currentSlide.title}
                        </motion.h1>

                        <motion.h2
                            {...titleAnim}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-3xl md:text-4xl font-semibold mt-2"
                        >
                            {currentSlide.subtitle}
                        </motion.h2>

                        <motion.ul
                            {...textAnim}
                            transition={{ duration: 0.9, delay: 0.6 }}
                            className="mt-6 space-y-2 max-w-3xl text-2xl leading-relaxed"
                        >
                            {currentSlide.Description.map((Description, i) => (
                                <li key={i}>{Description}</li>
                            ))}
                        </motion.ul>

                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 rounded-full bg-blue-400 hover:bg-blue-700 transition px-10 py-3 text-sm font-semibold"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>

    );
}
