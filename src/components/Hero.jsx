import { useEffect, useState, useMemo } from "react";

/* ── Floating Particles Component ── */
function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, rgba(255,193,7,${p.opacity}), transparent)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Zodiac Decorations ── */
function ZodiacSymbols() {
  const symbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((s, i) => (
        <span
          key={i}
          className="zodiac-float"
          style={{
            left: `${(i / symbols.length) * 100}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            fontSize: `${1.2 + Math.random() * 1.5}rem`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const texts = [
    "Accurate Horoscope Predictions",
    "Marriage & Relationship Guidance",
    "Career & Business Astrology",
    "Vedic Remedies for Life Problems",
  ];

  const images = ["/images/astro1.jpg", "/images/astro2.jpg"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  // Background image cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${index === imageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${img})`,
            animation: index === imageIndex ? "ken-burns 20s ease-in-out infinite alternate" : "none",
          }}
        />
      ))}

      {/* Gradient Overlays */}
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 via-black/70 to-[#0a0a1a]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/50 via-transparent to-[#0a0a1a]/50" />

      {/* Particles */}
      <Particles />
      <ZodiacSymbols />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm text-saffron-300"
        >
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
          Trusted by 1000+ Clients Worldwide
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="block text-white"
          >
            Design Your Destiny
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gradient-shimmer"
          >
            with Astro Ajay
          </span>
        </h1>

        {/* Typing Text */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg sm:text-xl md:text-2xl mb-8 h-9 font-light"
        >
          <span className="text-cosmic-800">{displayText}</span>
          <span className="text-cosmic-600 animate-pulse font-thin">|</span>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white btn-cosmic bg-gradient-to-r from-saffron-500 to-orange-600 shadow-lg shadow-orange-500/20 hover:scale-105 flex items-center justify-center gap-2"
          >
            Book Consultation ✦
          </a>
          <a
            href="#kundli"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white glass hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Free Horoscope
          </a>
        </div>

        {/* Stats Row */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "1000+", label: "Happy Clients" },
            { num: "4.9★", label: "Google Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient font-heading">{stat.num}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce z-20 scale-75 sm:scale-100 transform origin-bottom">
        <span className="text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 sm:h-2 bg-saffron-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
