import Testimonial1 from "../../../public/assets/images/Testimonial1.png";
import Testimonial2 from "../../../public/assets/images/Testimonial2.png";
import Testimonial3 from "../../../public/assets/images/Testimonial3.png";
import Testimonial4 from "../../../public/assets/images/Testimonial4.png";

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    location:string;
    content: string;
    image: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Tom Akpors Okosubide",
      role: " Marine Engineer",
      location: "Port-harcourt, Nigeria",
      content:
        "The experience was absolutely outstanding. The crew made everything smooth and enjoyable, and the yacht incredibly comfortable. Every detail was carefully handled, creating a truly unforgettable journey I'd happily recommend to anyone seeking luxury experience.",
      image: Testimonial1.src,
    },
    {
      id: 2,
      name: "Ediale Nathaniel",
      role: "Marine Engineer",
      location: "Port-harcourt, Nigeria",
      content:
        "Exceptional service and professionalism. The training and support exceeded my expectations and gave me real industry confidence.",
      image: Testimonial2.src,
    },
    {
      id: 3,
      name: "Samuel Agboola",
      role: "Naval Architect",
      location: "Port-harcourt, Nigeria",
      content:
        "Highly structured and practical training. The hands-on approach made complex systems easy to understand.",
      image: Testimonial3.src,
    },
    {
      id: 4,
      name: "Samuel Agboola",
      role: " Marine surveyor",
      location: "Port-harcourt, Nigeria",
      content:
        "Highly structured and practical training. The hands-on approach made complex systems easy to understand.",
      image: Testimonial4.src,
    },
  ];