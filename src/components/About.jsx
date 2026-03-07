import { FaStar, FaUsers, FaCalendarCheck } from "react-icons/fa";

const highlights = [
  {
    icon: <FaStar />,
    title: "Precision Astrology",
    desc: "Data-driven planetary insights designed for proactive growth and smarter life decisions.",
    symbol: "✦",
  },
  {
    icon: <FaUsers />,
    title: "Unlock Your Cosmic Blueprint",
    desc: "Discover your strengths, challenges, and opportunities written in your birth chart.",
    symbol: "☽",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Guidance That Empowers",
    desc: "Practical remedies and clear guidance to help you move forward with confidence.",
    symbol: "☀",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 cosmic-bg-alt overflow-hidden scroll-mt-16">
      {/* Decorative Top Divider */}
      <div className="section-divider w-full absolute top-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            data-aos="fade-up"
            className="inline-block text-xs uppercase tracking-[0.3em] text-saffron-500 mb-3"
          >
            Who We Are
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5"
          >
            <span className="text-cosmic-900">About </span>
            <span className="text-gradient">Astro Ajay</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-xl sm:text-2xl font-heading text-gradient-shimmer mb-4"
          >
            Decode Your Destiny, Master Your Path
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Astro Ajay is a professional Vedic astrologer helping people with
            career, marriage, finance, and spiritual guidance through accurate
            horoscope analysis and time-tested remedies.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group relative p-6 sm:p-8 rounded-2xl glass glow-border transition-all duration-500 hover:scale-[1.03] glow-border-hover"
            >
              {/* Decorative Symbol */}
              <span className="absolute top-4 right-4 text-3xl text-saffron-500/10 group-hover:text-saffron-500/20 transition-colors duration-300">
                {item.symbol}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-500/20 to-orange-500/10 flex items-center justify-center text-saffron-400 text-2xl mb-5 group-hover:shadow-lg group-hover:shadow-saffron-500/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-saffron-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-saffron-400 to-orange-500 group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="section-divider w-full absolute bottom-0" />
    </section>
  );
}
