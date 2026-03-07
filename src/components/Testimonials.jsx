import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Astro Ajay's predictions were extremely accurate. His guidance helped me make the right career decision.",
    name: "Vinay Singh",
    initials: "VS",
  },
  {
    text: "I was facing marriage issues for years. After consultation, things improved within months.",
    name: "Rohit Chauhan",
    initials: "RC",
  },
  {
    text: "Ajay's guidance on business astrology was spot on. My business has seen significant growth.",
    name: "Savlibhai Dholakiya",
    initials: "SD",
  },
  {
    text: "Very humble and knowledgeable astrologer. His remedies really worked for me.",
    name: "Amit Verma",
    initials: "AV",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);

  /* Auto slide */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  /* Swipe handlers */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (endX - startX.current > 50) {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 cosmic-bg overflow-hidden scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            data-aos="fade-up"
            className="inline-block text-xs uppercase tracking-[0.3em] text-saffron-500 mb-3"
          >
            Testimonials
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
          >
            <span className="text-white">What </span>
            <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="max-w-2xl mx-auto"
        >
          <div
            key={index}
            className="relative p-8 sm:p-10 rounded-2xl glass glow-border shadow-xl shadow-saffron-500/10 animate-[slide-in-right_0.3s_ease-out_forwards]"
          >
            {/* Large Quote Mark */}
            <div className="absolute top-4 left-6 text-6xl sm:text-7xl text-saffron-500/10 font-serif leading-none">
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-5 gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-saffron-400 text-lg"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed text-center mb-6 relative z-10">
              "{testimonials[index].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-400 to-orange-600 flex items-center justify-center text-cosmic-900 font-bold text-sm">
                {testimonials[index].initials}
              </div>
              <div>
                <h4 className="font-semibold text-saffron-400 text-sm">
                  {testimonials[index].name}
                </h4>
                <p className="text-gray-500 text-xs">Verified Client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index
                ? "bg-saffron-400 w-7 shadow-lg shadow-saffron-500/30"
                : "bg-gray-600 hover:bg-gray-500"
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Google Rating */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-center text-sm text-gray-500"
        >
          ⭐ Rated <span className="text-saffron-400 font-semibold">4.9</span> based on Google Reviews
        </p>
      </div>

      <div className="section-divider w-full absolute bottom-0" />
    </section>
  );
}
