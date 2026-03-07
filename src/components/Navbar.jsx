import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Free Kundli", href: "#kundli" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-cosmic-900/80 backdrop-blur-xl shadow-lg shadow-saffron-500/5 border-b border-saffron-500/10"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12">
                ☿
              </span>
              <span className="font-heading text-xl md:text-2xl font-bold text-gradient">
                Astro Ajay
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-saffron-400 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-saffron-400 to-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-5 py-2 bg-gradient-to-r from-saffron-500 to-orange-600 text-cosmic-900 font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-saffron-500/30 transition-all duration-300 hover:scale-105"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-2xl text-saffron-400 hover:text-saffron-300 transition-colors z-50"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-cosmic-900/95 backdrop-blur-xl border-l border-saffron-500/10 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="pt-20 px-6 space-y-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-saffron-400 hover:bg-saffron-500/5 rounded-lg transition-all duration-300 font-medium border-b border-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-saffron-500/50 mr-3 text-xs">0{i + 1}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-4 py-3 px-4 bg-gradient-to-r from-saffron-500 to-orange-600 text-cosmic-900 font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-saffron-500/30 transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
