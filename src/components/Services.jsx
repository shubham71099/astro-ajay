import {
  FaStar,
  FaMoon,
  FaSun,
  FaUserAstronaut,
  FaChartLine,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    text: "Personal Astrology Consultation",
    icon: <FaUserAstronaut />,
    desc: "One-on-one guidance based on your unique birth chart and planetary positions.",
  },
  {
    text: "Kundli & Horoscope Analysis",
    icon: <FaChartLine />,
    desc: "Detailed analysis of your natal chart for deeper life insights.",
  },
  {
    text: "Marriage & Relationship",
    icon: <FaMoon />,
    desc: "Compatibility matching and guidance for harmonious relationships.",
  },
  {
    text: "Career & Business Predictions",
    icon: <FaSun />,
    desc: "Strategic astrological advice for professional growth and success.",
  },
  {
    text: "Numerology Analysis",
    icon: <FaStar />,
    desc: "Unlock the hidden meaning behind your numbers and life path.",
  },
  {
    text: "Yearly Horoscope Reports",
    icon: <FaCalendarAlt />,
    desc: "Comprehensive yearly forecasts to plan your year ahead wisely.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 cosmic-bg overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            data-aos="fade-up"
            className="inline-block text-xs uppercase tracking-[0.3em] text-saffron-500 mb-3"
          >
            What We Offer
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
          >
            <span className="text-cosmic-900">Our </span>
            <span className="text-gradient">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <a
              href={`https://wa.me/919999999999?text=Hi Astrologer Ajay, I would like to know more about your ${service.text} service.`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative block p-6 rounded-2xl glass overflow-hidden transition-all duration-500 hover:scale-[1.03] cursor-pointer"
            >
              {/* Gradient Border Glow (top) */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-500/20 to-orange-600/10 flex items-center justify-center text-saffron-400 text-2xl mb-4 group-hover:text-saffron-300 group-hover:shadow-lg group-hover:shadow-saffron-500/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="font-heading text-sm sm:text-lg font-semibold text-white mb-2 group-hover:text-saffron-300 transition-colors duration-300">
                {service.text}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.desc}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1 text-saffron-500 opacity-0 group-hover:opacity-100 text-sm transition-all duration-300 group-hover:translate-x-1 font-medium">
                Learn more <span className="text-xs ml-1">→</span>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-saffron-400 to-orange-500 group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="section-divider w-full absolute bottom-0" />
    </section>
  );
}
