"use client";

import Image from "next/image";
import { Testimonial } from "../data/data";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative w-fill h-[320px] md:h-[420px] rounded-lg overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
          “{testimonial.content}”
        </p>

        <div>
          <h4 className="text-xl font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-blue-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}