import Hero from "./hero";
import About from "./about ";
import BespokeServices from "./bespoke";
import TestimonialSection from "./testimonialSection";


export default function Home(){
    return (
        <div>
            <Hero />
            <About />
            <BespokeServices />
            <TestimonialSection/>
        </div>
    )
}