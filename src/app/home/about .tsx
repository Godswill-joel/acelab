"use client";

import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, LucideIcon } from "lucide-react";

type AboutItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const aboutData: AboutItem[] = [
  {
    title: "Our Vision",
    description:
      "To be the largest provider of Marine electrical/electronic engineering services and trainings in Nigeria, Sub-Saharan Africa and globally.",
    icon: TrendingUp,
  },
  {
    title: "Mission",
    description:
      "To inspire success in the Marine industry by offering exceptional engineering services and standardised hands-on training to prospective clients.",
    icon: Users,
  },
  {
    title: "Core Values",
    description: "Honesty. Excellence. Integrity. Respect.",
    icon: ShieldCheck,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            About Acelabview
          </h2>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Empowering the marine industry with world-class engineering
            solutions and practical training for future professionals.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {aboutData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-transparent" />

                {/* Icon */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="relative z-10 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-blue-500/30 transition" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
