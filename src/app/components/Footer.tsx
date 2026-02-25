// components/Footer.tsx
import Link from "next/link";
import ITF from "../../../public/assets/Logo/ITF.png";
import NSITF from "../../../public/assets/Logo/NSITF.png";
import FMOLP from "../../../public/assets/Logo/FMOLP.png";
import NABTEB from "../../../public/assets/Logo/NABTEB.png";
import ACE from "../../../public/assets/Logo/ACE-Logo-White.png";
import { Facebook, X, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2f435a] text-gray-200 pt-20 pb-10">
            <div className="max-w-8xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-22">
                <div>
                    <img src={ACE.src} alt="Acelab Logo" className="w-32 h-18 mb-5" />

                    <p className="mt-6 text-gray-300 leading-relaxed text-xl">
                        AceLab Academy Limited is a leading provider of electrical technical
                        services, training services, competency and consultancy solutions
                        for a range of engineering industries, energy and the maritime
                        sector.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-white mb-5">
                        Contact Us
                    </h3>

                    <p className="text-xl mb-4 text-blue-200">
                        Mon – Fri: 9:00am – 5:00pm
                    </p>

                    <div className="space-y-3 text-xl">
                        <p className="text-xl leading-relaxed mb-4">
                            <MapPin /> No 2 Orji Close, Off Ada George Road, Port Harcourt
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone className="text-blue-300 font-bold" />
                            +234 902 554 2433, +234 803 880 3207
                        </p>

                        <a className="flex items-center gap-3">
                            <Mail className="text-blue-300" />
                            info@acelabview.com <br /> technical@acelabview.com
                        </a>
                    </div>
                </div>

                <div >
                    <h3 className="text-2xl font-semibold text-white mb-5">
                        Useful Links
                    </h3>

                    <ul className="space-y-5 text-xl">
                        {["Home", "Cookie Policy", "Privacy Policy", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="group flex items-center gap-2 hover:text-blue-300 transition"
                                    >
                                        <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition"></span>
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-white mb-5">
                        Accreditations
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-3 hover:scale-105 transition shadow-md">
                            <img
                                src={NABTEB.src}
                                alt="NABTEB"
                                className="w-full object-contain"
                            />
                            <p className="text-xs text-center text-gray-700 mt-2">
                                NABTEB Accredited
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-3 hover:scale-105 transition shadow-md">
                            <img
                                src={FMOLP.src}
                                alt="Ministry"
                                className="w-full object-contain"
                            />
                            <p className="text-xs text-center text-gray-700 mt-2">
                                Federal Ministry of Labour & Employment
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-3 hover:scale-105 transition shadow-md">
                            <img
                                src={ITF.src}
                                alt="ITF"
                                className="w-full object-contain"
                            />
                            <p className="text-xs text-center text-gray-700 mt-2">
                                Industrial Training Fund
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-3 hover:scale-105 transition shadow-md">
                            <img
                                src={NSITF.src}
                                alt="NSITF"
                                className="w-full object-contain"
                            />
                            <p className="text-xs text-center text-gray-700 mt-2">
                                NSITF Compliant
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        {[Facebook, X, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition"
                            >
                                <Icon className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-400/30 mt-16 pt-6 text-center text-sm text-blue-200">
                © {new Date().getFullYear()} Ace Labview Limited. All rights reserved.
            </div>
        </footer>
    );
}
