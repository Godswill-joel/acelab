"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/Logo/ACE-Logo.png"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Virtual Class Room", path: "/virtual-classroom" },
  { name: "Contact", path: "/contact" },
  { name: "Reviews", path: "/reviews" },
];

export default function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") setScrolled(true);

    const handleScroll = () => setScrolled(window.scrollY > 9);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"}
      `}
    >
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Acelab academy Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-10 font-medium text-sm tracking-widest">
          {navlinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.path)}
                className={`relative uppercase transition
                  ${pathname === link.path
                    ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                  }
                `}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-black p-2 rounded-md border border-slate-300"
        >
          {isMobileMenuOpen ? <X className="text-black"/>  : <Menu /> }
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

      {/* Mobile Menu Panel */}
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
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-left text-lg uppercase tracking-wide font-medium
                    ${pathname === link.path
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                    }
                  `}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
