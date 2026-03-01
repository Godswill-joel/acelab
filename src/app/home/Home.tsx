import Hero from "./hero";
import About from "./about ";
import BespokeServices from "./bespoke";
import TestimonialSection from "./testimonialSection";


export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <BespokeServices
                videoUrl="https://youtu.be/WerYyfIM5Lw"
                title="LNG Diesel Electric Propulsion Aft Engine Room Walk Through"
                description="We deliver tailored marine electrical and industrial automation solutions for vessels, offshore platforms, and industrial facilities."
            />
            <TestimonialSection />
        </div>
    )
}