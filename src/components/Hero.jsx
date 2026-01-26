import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "Accurate Horoscope Predictions",
    "Marriage & Relationship Guidance",
    "Career & Business Astrology",
    "Vedic Remedies for Life Problems",
  ];

  // ✅ Images from public/images folder
  const images = [
    "/images/astro1.jpg",
    "/images/astro2.jpg",
  ];

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
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  // Background image auto change (every 2 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === imageIndex ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Trusted Astrologer – Astro Ajay
        </h1>

        <p
          data-aos="fade-up"
          className="text-lg md:text-xl text-amber-400 font-semibold mb-6 h-8"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

       <a
        href="#contact"
        className="inline-block px-8 py-3 rounded-full font-bold
                  text-gray-900
                  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                  hover:from-yellow-500 hover:via-orange-600 hover:to-red-600
                  transition-all duration-300 shadow-lg"
      >
        Book Consultation
      </a>

      </div>
    </section>
  );
}
