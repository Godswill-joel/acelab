"use client";

import { useState } from "react";

type CourseTopic = {
  id: string;
  title: string;
  outline: string[];
};

const marineCourseTopics: CourseTopic[] = [
  {
    id: "1",
    title: "Introduction to Marine Electrical Systems",
    outline: [
      "Overview of marine electrical architecture",
      "AC vs DC systems on vessels",
      "Basic electrical safety onboard",
      "Marine electrical standards & compliance",
    ],
  },
  {
    id: "2",
    title: "Marine Power Generation & Distribution",
    outline: [
      "Generators and alternators",
      "Switchboards and distribution panels",
      "Load sharing and power management",
      "Emergency power systems",
    ],
  },
  {
    id: "3",
    title: "Motor Control & Drives",
    outline: [
      "Star-delta starters",
      "Soft starters",
      "Variable Frequency Drives (VFDs)",
      "Marine motor protection methods",
    ],
  },
  {
    id: "4",
    title: "Navigation & Communication Systems",
    outline: [
      "Radar and GPS systems",
      "ECDIS overview",
      "Internal communication systems",
      "Troubleshooting nav electronics",
    ],
  },
  {
    id: "5",
    title: "Marine Automation & Control",
    outline: [
      "PLC basics for marine applications",
      "Sensor & actuator integration",
      "Alarm & monitoring systems",
      "Basic fault diagnostics",
    ],
  },
  {
    id: "6",
    title: "Troubleshooting & Maintenance",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
];

export default function MarineElectricalTraining() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    setOpenTopic((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Marine Electrical Engineering Training
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A structured, hands-on curriculum designed to build real-world marine
            electrical engineering competence. Each topic expands into practical
            learning outcomes.
          </p>
        </div>

        {/* Tree Line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden md:block" />

          <div className="space-y-20">
            {marineCourseTopics.map((topic, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = openTopic === topic.id;

              return (
                <div
                  key={topic.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Connector dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full z-10" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold">
                        {topic.title}
                      </h3>
                      <button
                        onClick={() => toggleTopic(topic.id)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        {isOpen ? "Hide" : "View Outline"}
                      </button>
                    </div>

                    {/* Outline */}
                    <div
                      className={`mt-4 transition-all duration-500 overflow-hidden ${
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                        {topic.outline.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
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
