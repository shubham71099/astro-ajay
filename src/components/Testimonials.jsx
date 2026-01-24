import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Astro Ajay’s predictions were extremely accurate. His guidance helped me make the right career decision.",
      name: "Shubham Jha",
    },
    {
      text: "I was facing marriage issues for years. After consultation, things improved within months.",
      name: "Rohit Chauhan",
    },
    {
      text: "Very humble and knowledgeable astrologer. His remedies really worked for me.",
      name: "Amit Verma",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);

  /* Auto slide */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, testimonials.length]);

  /* Swipe handlers */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (endX - startX.current > 50) {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-16 bg-yellow-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold mb-8 text-orange-800">
          What Clients Say
        </h2>

        {/* Testimonial Card */}
        <div
          key={index}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="bg-white border border-orange-300 p-6 rounded-xl shadow 
                     transition-opacity duration-500 ease-in-out"
          style={{ opacity: 1 }}
        >
          {/* Stars */}
          <div className="flex justify-center mb-3 text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="italic text-gray-700">
            “{testimonials[index].text}”
          </p>

          <h4 className="mt-4 font-semibold text-orange-700">
            — {testimonials[index].name}
          </h4>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-orange-600 scale-110" : "bg-orange-300"
              }`}
            />
          ))}
        </div>

        {/* Google Reviews Label */}
        <p className="mt-4 text-sm text-gray-600">
          ⭐ Rated 5.0 based on Google Reviews
        </p>
      </div>
    </section>
  );
}
