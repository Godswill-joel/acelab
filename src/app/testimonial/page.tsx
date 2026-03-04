"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialImages } from "../data/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

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

        {/* ===== CAROUSEL SECTION ===== */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonialImages.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="rounded-2xl overflow-hidden shadow-lg border bg-white">
                  <CardContent className="relative h-[280px] sm:h-[320px] md:h-[360px] p-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}