import {
  FaStar,
  FaMoon,
  FaSun,
  FaUserAstronaut,
  FaChartLine,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  { text: "Personal Astrology Consultation", icon: <FaUserAstronaut /> },
  { text: "Kundli & Horoscope Analysis", icon: <FaChartLine /> },
  { text: "Marriage & Relationship Guidance", icon: <FaMoon /> },
  { text: "Career & Business Predictions", icon: <FaSun /> },
  { text: "Numerology Analysis", icon: <FaStar /> },
  { text: "Yearly Horoscope Reports", icon: <FaCalendarAlt /> },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-yellow-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-orange-800"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white border-l-4 border-orange-500 p-4 rounded-xl shadow flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-orange-500 text-3xl mb-2">
                {service.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-lg">
                {service.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
