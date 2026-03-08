import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "9251170521";
  const message = "Hello Astro Ajay, I want to book a consultation.";

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden scroll-mt-16"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 cosmic-bg opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900 via-transparent to-cosmic-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-5xl text-white/5 animate-float">☿</div>
        <div className="absolute bottom-20 right-16 text-4xl text-white/5 animate-float-delayed">✦</div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-white/5 animate-float-slow">☉</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <span
          data-aos="fade-up"
          className="inline-block text-xs uppercase tracking-[0.3em] text-saffron-200 mb-3"
        >
          Get In Touch
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 glow-text"
        >
          Book Your Consultation
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-saffron-100/80 mb-10 text-lg max-w-xl mx-auto"
        >
          Ready to unlock the secrets of your stars? Chat directly on WhatsApp for instant appointment & guidance.
        </p>

        {/* WhatsApp CTA */}
        <div data-aos="zoom-in" data-aos-delay="200" className="mb-12">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 text-lg"
          >
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse-ring" />
            <FaWhatsapp className="text-2xl" />
            Book on WhatsApp
          </a>
        </div>

        {/* Contact Info Cards */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
            <FaPhoneAlt className="text-saffron-300" />
            <span className="text-sm">+91 92511 70521</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
            <FaEnvelope className="text-saffron-300" />
            <span className="text-sm">ajaynareshparmar@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
