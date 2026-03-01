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
import testimony11 from "../../../public/assets/images/14.png";
import CEO from "../../../public/assets/images/CEO.png";
import manager from "../../../public/assets/images/manager.png";
import STO from "../../../public/assets/images/sto.png";
import Poster from "../../../public/assets/images/poster.png";
import consultant from "../../../public/assets/images/consultant.png"
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
  { id: 11, src: testimony11.src, alt: "Testimonial 11" },
];

export const executiveTeam = [
  {
    id: "Engr. Oyama Osam",
    name: "Engr. Oyama Osam",
    role: "Founder, CEO & CTO",
    image: CEO,
    linkedin: "https://linkedin.com/in/alexleishman",
    about:
      "Engr. oyama osam is a (Reg. Engineer-Coren) MSc.EE, IPMA-UK, IEC-UK ETO Class 1, Marine Warranty Surveyor.",
  },
  {
    id: "Donald Ogar",
    name: "Donald Ogar",
    role: "Chief Operating Officer",
    image: manager,
    linkedin: "https://linkedin.com/in/juliaduzon",
    about:
      "Donald Ogar drives MSc. Reservoir Dev & prod.",
  },
  {
    id: "Engr. Elvis Iweriebor",
    name: "Engr. Elvis Iweriebor",
    role: "Chief Financial Officer",
    image: STO,
    linkedin: "https://linkedin.com/in/davidmiller",
    about:
      "Engr. Elvis Iweriebor is a  (Reg. Engineer-COREN) and our Snr. Technical Superintendent/Accessor.",
  },
  {
    id: "Engr. Rex Kalada",
    name: "Engr. Rex Kalada",
    role: "Chief Product Officer",
    image: Poster,
    linkedin: "https://linkedin.com/in/davidmiller",
    about:
      "James Page is the Chief Product Officer at River. In this role, James is responsible for driving product strategy and managing River's product management and design teams.",
  },
  {
    id: "Arjun Murali",
    name: "Arjun Murali",
    role: "Chief Security Officer",
    image: consultant,
    linkedin: "https://linkedin.com/in/davidmiller",
    about:
      "Cem is the Chief Security Officer at River, where he oversees the security of all systems. He is an information security & cryptography professional with 25 years of experience in risk management for online services and fintech.",
  },
];

type CourseTopic = {
  id: string;
  title: string;
  description?: string;
  outline: string[];
};


export const marineCourseTopics: CourseTopic[] = [
  {
    id: "1",
    title: "Electrical,Electronic & Control Engineering at Operational Level",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Overview of marine electrical architecture",
      "AC vs DC systems on vessels",
      "Basic electrical safety onboard",
      "Marine electrical standards & compliance",
    ],
  },
  {
    id: "2",
    title: "Monitor the Operation of Automatic Control Systems of Propulsion & Auxilliary Machinery",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Generators and alternators",
      "Switchboards and distribution panels",
      "Load sharing and power management",
      "Emergency power systems",
    ],
  },
  {
    id: "3",
    title: "Fundamentals of electronics and Power Electronics ",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Star-delta starters",
      "Soft starters",
      "Variable Frequency Drives (VFDs)",
      "Marine motor protection methods",
    ],
  },
  {
    id: "4",
    title: "Operation & Maintenance of Power Systems in Excess of 1,000 Volts",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Radar and GPS systems",
      "ECDIS overview",
      "Internal communication systems",
      "Troubleshooting nav electronics",
    ],
  },
  {
    id: "5",
    title: "Computer Operation & Networks on Ship",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "PLC basics for marine applications",
      "Sensor & actuator integration",
      "Alarm & monitoring systems",
      "Basic fault diagnostics",
    ],
  },
  {
    id: "6",
    title: "Operation of All Internal Communication Systems on Board",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "7",
    title: "Maintenance & Repair of Electrical & Electronic Equipment",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "8",
    title: "Maintenance/Repair of Automation & Control Systems of Main Propulsion & Auxilliary Machinery",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "9",
    title: "Maintenance/Repair of Bridge Navigation equipment & Ship Communication Systems",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "10",
    title: "Maintenance & Repair of Electrical, Electronic & Control Systems of Deck Machinery & Cargo Handling Equipment",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "11",
    title: "Maintenance/Repair of Control & Safety Systems of Hotel Equipment",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
  {
    id: "12",
    title: " Troubleshooting Bridge Equipment & Engine Room Control Systems",
    description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
    outline: [
      "Fault-finding techniques",
      "Insulation testing",
      "Preventive maintenance schedules",
      "Real-world case studies",
    ],
  },
];

export type CoursesTopic = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export const automationControl: CoursesTopic[] = [
  {
    id: "1",
    title: "PLC Programming Series (For Beginners)",
    subtitle: "Main Objectives",
    description: `To ensure you are able to understand the basics of PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs to Industrial Standards using Ladder Logic and common routines that help to create a full program including Alarms and Status.

We will walk you through the foundations of PLC Programming, universal to all PLCs, covering common programming instructions as well as how to design and structure a program.

Our PLC programming courses not only teach you the basics of the PLC equipment which every programmer is required to learn but more importantly, how to write control routines and programs to a standard that is required in industry.

Throughout the course, you’ll have access to Omron’s Syswin34 and a Live Omron CPM PLC Training Station, where you will be able to download, monitor and test your projects.

At the end of the course, you are expected to have a detailed understanding of the most used instructions and routines in programming, as well as being able to design your own programs from scratch.`,
  },
  {
    id: "2",
    title: "Siemens S7 & TIA Portal Programming Series",
    subtitle: "Main Objectives",
    description: `To ensure you are able to understand the basics of Siemens S7 PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Siemens Organisational Blocks, Functions, Function Blocks and Data Blocks.
The Siemens TIA Portal Programming Series provides you with an understanding of Siemens S7 PLCs and the TIA Portal programming software including the background of the Siemens PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Siemens S7-1200 PLCs and TIA Portal programming software including advanced programming techniques using functions, function blocks, data blocks and how to apply them in programming.
This course is primarily for people who will be working with Siemens PLCs but also may be found useful to anyone interested in Siemens PLCs.
Throughout the course, you’ll have access to TIA Portal and a Live Siemens S7-1200 PLC Training Station, where you will be able to download, monitor and test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the TIA Portal environment.
At the end of the course, you are expected to have a detailed understanding of the Siemens S7 PLC and TIA Portal, as well as being able to use Organisation Blocks, Functions, Function Block and Data Blocks.`,
  },
  {
    id: "3",
    title: "Siemens S7 & STEP7 Programming Series",
    subtitle: "Main Objectives",
    description: `To ensure you are able to understand the basics of Siemens S7 PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Siemens Organisational Blocks, Functions, Function Blocks and Data Blocks.
The Siemens Programming Series provides you with an understanding of Siemens S7 PLCs and the STEP7 Professional programming software including the background of the Siemens PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Siemens S7-300 PLCs and STEP7 Professional programming software including advanced programming techniques using functions, function blocks, data blocks and how to apply them in programming.
This course is primarily for people who will be working with Siemens PLCs but also may be found useful to anyone interested in Siemens PLCs.
Throughout the course, you’ll have access to STEP7 Professional and a Siemens Simulator, where you will be able to download, monitor and test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the STEP7 Professional environment.
At the end of the course, you are expected to have a detailed understanding of the Siemens S7 PLC and STEP7 Professional, as well as being able to use Organisation Blocks, Functions, Function Block and Data Blocks..`,
  },
  {
    id: "4",
    title: "Allen Bradley RSLogixStudio 5000 Programming",
    subtitle: "Main Objectives",
    description: `To ensure you are able to understand the basics of Allen Bradley ControlLogix PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Allen Bradley Routines and Add-on Instructions.
The Allen Bradley Programming Series provides you with an understanding of Allen Bradley ControlLogix PLCs and the RSLogix 5000 programming software including the background of the Allen Bradley PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Allen Bradley ControlLogix PLCs and RSLogix 5000 programming software including advanced programming techniques using Routines and Add-on Instructions and how to apply them in programming. This course is primarily for people who will be working with Allen Bradley PLCs but also may be found useful to anyone interested in Allen Bradley PLCs.
Throughout the course, you’ll have access to RSLogix 5000 and a Live Allen Bradley ControlLogix PLC Training Station for you to download and test your programs, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the RSLogix 5000 environment.
At the end of the course, you are expected to have a detailed understanding of the Allen Bradley ControlLogix PLC and RSLogix 5000, as well as being able to use Routines and Add-on Instructions.`,
  },
  {
    id: "5",
    title: "SCADA Programming Series",
    subtitle: "Main Objectives",
    description: `To ensure you are able to understand the basics of SCADA such as its hardware and programming components as well as being able to create your own SCADA projects using the tools available.
The SCADA Programming Series provides you with an understanding of SCADAs and their software including the background of SCADAs and HMIs, how and where they are used in today’s industry as well as setup and design techniques. You will also gain an understanding of CitectSCADA programming software including advanced design techniques using Genies, Paste Symbols and Symbol Sets and how to apply them in programming. This course is primarily for people who will be working with SCADAs but also may be found useful to anyone interested in SCADA design.
Throughout the course, you’ll have access to CitectSCADA and Simulator for you to test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design objects and screens in the CitectSCADA environment.
At the end of the course, you are expected to have a detailed understanding of how to create your own SCADA screens and projects from scratch to Industrial Standards, as well as understanding the fundamentals to SCADA design from how to setup a project to developing your own dynamic screens which react to Tags from PLCs displaying real-time processes and applications to Operators and Engineers on the shop-floor.`,
  },
];
