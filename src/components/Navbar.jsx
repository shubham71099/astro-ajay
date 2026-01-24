import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-yellow-400 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-800">
          Astro Ajay
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#services" className="hover:text-orange-800">Services</a>
          <a href="#kundli" className="hover:text-orange-800">Free Kundli</a>
          <a href="#contact" className="hover:text-orange-800">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-orange-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-yellow-300 px-4 pb-4">
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block py-2 border-b"
          >
            Services
          </a>
          <a
            href="#kundli"
            onClick={() => setOpen(false)}
            className="block py-2 border-b"
          >
            Free Kundli
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
