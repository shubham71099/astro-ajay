import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "9251170521";
  const msg = "Hello Astro Ajay, I want to book a consultation.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse-ring" />

      {/* Button */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300 animate-bounce-in">
        <FaWhatsapp />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-cosmic-900/90 backdrop-blur-sm text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 border border-white/10">
        Chat with us
        <div className="absolute top-full right-5 w-2 h-2 bg-cosmic-900/90 rotate-45 -mt-1" />
      </div>
    </a>
  );
}
