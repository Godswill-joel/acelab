"use client";

import Image from "next/image";
import Hero from "../../../public/assets/images/ Aboutsection.png"
import { useState } from "react";
import { motion } from "framer-motion";
import About from "../home/about ";
import { executiveTeam } from "../data/data";

export default function AboutPage() {
    const [openMember, setOpenMember] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setOpenMember((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-white text-black">
            <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
                <Image
                    src={Hero.src}
                    alt="About Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: [0, -10, 0], opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatDelay: 4 }}
                        className="text-4xl md:text-8xl font-bold text-blue-400 text-center"
                    >
                        About River
                    </motion.h1>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
                {/* KNOW ABOUT US */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        Know About Us
                    </h2>
                    <p className="text-gray-600 text-2xl leading-relaxed max-w-5xl">
                        Ace Labview Limited is a leading provider of electrical technical services, training services, competency and consultancy solutions for a range of engineering industries, energy and the maritime sector. Our team of professionals boast a joint experience spanning over 60 years in the industry. We have gathered a group of professionals with similar ambitions who are passionate about what they do to help provide solutions for our clients.
                    </p>
                </div>

                {/* WHAT WE DO */}
                <div className="mt-24 mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold mb-6 ">Electrical/Electronic Engineering Field Services</h3>
                    <p className="text-gray-600 text-2xl leading-relaxed max-w-5xl mb-10">
                        Technical operations in the maritime, oil and gas industry are extremely diverse, demanding, and dynamic due to technological advancements. Therefore, it is vital to build a technical team equipped with the right knowledge to oversee these activities.  So far, Ace Labview’s technical service team has built a formidable reputation by providing excellent electrical and electronic engineering field services onboard vessels operating in Nigeria.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Procurement & Supply",
                                text: "The procurement and supply unit has an established quality management system (QMS) in place in line with international best practices. We have a team of professionals adequately versed in the different sectors of supply chain management (SCM) system needed to provide excellent products and services.",
                            },
                            {
                                title: "Consultancy Services",
                                text: "We consult for organisations operating in the marine sector, oil & gas industry, manufacturing, fabrication, and construction. Our services consist of routine machinery inspection, crew assessment and administrative services.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-100 p-8 rounded-2xl">
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-xl leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXECUTIVE TEAM */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                        Our Executive Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {executiveTeam.map((member) => {
                            const isOpen = openMember === member.id;

                            return (
                                <div key={member.id} className="flex flex-col items-center text-center">
                                    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 w-full transition-transform hover:scale-[1.02]">
                                        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-gray-500 mb-3">{member.role}</p>

                                        <button
                                            onClick={() => handleToggle(member.id)}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            {isOpen ? "CLOSE ✕" : "READ MORE"}
                                        </button>
                                    </div>

                                    <div
                                        className={`w-full text-left border-t border-gray-200 pt-6 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 leading-relaxed px-2 md:px-6">
                                            {member.about}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* EXTRA ABOUT SECTION */}
                <About />
            </div>
        </section>
    );
}
