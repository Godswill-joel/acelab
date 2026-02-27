import testimony1 from "../../../public/assets/images/1.png";
import testimony2 from "../../../public/assets/images/5.png";
import testimony3 from "../../../public/assets/images/3.png";
import testimony4 from "../../../public/assets/images/6.png";
import testimony5 from "../../../public/assets/images/7.png";
import testimony6 from "../../../public/assets/images/8.png";
import testimony7 from "../../../public/assets/images/9.png";
import testimony8 from "../../../public/assets/images/10.png";
import testimony9 from "../../../public/assets/images/13.png";
import testimony10 from "../../../public/assets/images/12.png";
import testimony11 from "../../../public/assets/images/114.png";
import Testimonial1 from "../../../public/assets/images/Testimonial1.png";
import Testimonial2 from "../../../public/assets/images/Testimonial2.png";
import Testimonial3 from "../../../public/assets/images/Testimonial3.png";
import Testimonial4 from "../../../public/assets/images/Testimonial4.png";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
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

type TestimonialImage = {
  id: number;
  src: string;
  alt: string;
};


 export const testimonialImages: TestimonialImage[] = [
  { id: 1, src: testimony1.src, alt: "Testimonial 1" },
  { id: 2, src: testimony2.src, alt: "Testimonial 2" },
  { id: 3, src: testimony3.src, alt: "Testimonial 3" },
  { id: 4, src: testimony4.src, alt: "Testimonial 4" },
  { id: 5, src: testimony5.src, alt: "Testimonial 5" },
  { id: 6, src: testimony6.src, alt: "Testimonial 6" },
  { id: 7, src: testimony7.src, alt: "Testimonial 7" },
  { id: 8, src: testimony8.src, alt: "Testimonial 8" },
  { id: 9, src: testimony9.src, alt: "Testimonial 9" },
  { id: 10, src: testimony10.src, alt: "Testimonial 10" },
];