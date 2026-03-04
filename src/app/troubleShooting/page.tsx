"use client";

import Image from "next/image";
import Link from "next/link";
import Automation from "../../../public/assets/images/automatiohero.png";
import { useState } from "react";
import { Troubleshooting, Topic } from "../data/data";

export default function TroubleShootingControlSystem() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    setOpenTopic((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-2 sm:px-6 md:px-10">
      <div className="max-w-8xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-12 h-[65vh] sm:h-[75vh] md:h-[85vh] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={Automation}
            alt="PLC & SCADA Programming"
            fill
            priority
            className="object-cover rounded-2xl"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-6 leading-tight">
              Troubleshooting <span className="text-white">Industrial Control</span> Systems
            </h1>
          </div>
        </div>

        {/* Topics */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden md:block" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {Troubleshooting.map((topic, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = openTopic === topic.id;

              return (
                <div
                  key={topic.id}
                  className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-blue-500 rounded-full z-10" />

                  {/* Topic Card */}
                  <div
                    className={`w-full md:w-[46%] bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm transition hover:shadow-md ${isLeft ? "md:mr-auto" : "md:ml-auto"
                      }`}
                  >
                    {/* Title + Toggle */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg md:text-xl text-black font-semibold">
                        {topic.title}
                      </h3>

                      <button
                        onClick={() => toggleTopic(topic.id)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                      >
                        {isOpen ? "Hide" : "View Outline"}
                      </button>
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`mt-4 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                        {topic.subtitle}
                      </h4>

                      <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base mb-4">
                        {topic.description}
                      </p>

                      {/* Outline List */}
                      <ul className="list-disc list-inside mb-6 text-gray-700 text-sm sm:text-base">
                        {topic.outline.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href={{
                          pathname: "/contact",
                          query: { course: topic.title },
                        }}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white 
                          text-sm sm:text-base font-medium px-6 py-3 
                          rounded-lg transition duration-300"
                      >
                        Enroll in This Course
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}