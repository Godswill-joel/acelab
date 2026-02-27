"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../../public/assets/Logo/ACE-Logo.png";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Courses",
    path: "/courses",
    children: [
      { name: "Marine Electrical Engineering Training", path: "/courses/marineElectricalEngineeringTraining" },
      { name: "Automation and Control ", path: "/courses/automationControl" },
      { name: "Troubleshooting industrial control systems ", path: "/courses/safety" },
    ],
  },
  { name: "Contact", path: "/contact" },
  { name: "Testimonial", path: "/testimonial" },
];

export default function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const coursesRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (pathname === "/contact") setScrolled(true);

    const handleScroll = () => setScrolled(window.scrollY > 9);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
    router.push(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md py-3" : " py-4"}
      `}
    >
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Acelab academy Logo" width={150} height={60} className="object-contain" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10 font-Bold text-xl tracking-widest">
          {navlinks.map((link) => (
            <li key={link.name} className="relative" ref={link.children ? coursesRef : null}>
              {!link.children ? (
                <button
                  onClick={() => handleNavClick(link.path)}
                  className={`relative uppercase transition
                    ${pathname === link.path
                      ? "text-blue-400 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-400"
                      : "text-slate-700 hover:text-blue-400"
                    }`}
                >
                  {link.name}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsCoursesOpen((prev) => !prev)}
                    className={`relative uppercase transition flex items-center gap-1
                      ${pathname.startsWith(link.path)
                        ? "text-blue-400"
                        : "text-slate-700 hover:text-blue-400"
                      }`}
                  >
                    {link.name}
                    <ChevronDown className={`transition ${isCoursesOpen ? "rotate-180" : ""}`} size={18} />
                  </button>

                  <AnimatePresence>
                    {isCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-100"
                      >
                        <ul className="py-2">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <button
                                onClick={() => handleNavClick(child.path)}
                                className="block w-full text-left px-4 py-2 text-xl text-slate-700 hover:bg-blue-50 hover:text-blue-500 transition"
                              >
                                {child.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-black p-2 rounded-md border border-slate-300"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white z-50 p-8 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 mt-20">
              {navlinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  {!link.children ? (
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`text-left text-lg uppercase tracking-wide font-medium
                        ${pathname === link.path ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsCoursesOpen((prev) => !prev)}
                        className="flex items-center justify-between text-left text-lg uppercase tracking-wide font-medium text-slate-700"
                      >
                        {link.name}
                        <ChevronDown className={`transition ${isCoursesOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleNavClick(child.path)}
                                className="text-left text-sm text-slate-600 hover:text-blue-500 transition"
                              >
                                {child.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
