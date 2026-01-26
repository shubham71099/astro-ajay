import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "Accurate Horoscope Predictions",
    "Marriage & Relationship Guidance",
    "Career & Business Astrology",
    "Vedic Remedies for Life Problems",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <section className="min-h-screen flex items-center justify-center bg-light pt-20">
      <div className="text-center px-4">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Trusted Astrologer – Astro Ajay
        </h1>

        {/* Typing text */}
        <p
          data-aos="fade-up"
          className="text-lg md:text-xl text-amber-500 font-semibold mb-6 h-8"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <a
          href="#contact"
          className="inline-block bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}
