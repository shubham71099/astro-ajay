export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About Astro Ajay
        </h2>

        {/* Tagline */}
        <p
          data-aos="fade-up"
          className="text-xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
        >
          Decode Your Destiny, Master Your Path
        </p>

        {/* Main description */}
        <p
          data-aos="fade-up"
          className="text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Astro Ajay is a professional Vedic astrologer helping people with
          career, marriage, finance, and spiritual guidance through accurate
          horoscope analysis and time-tested remedies.
        </p>

        {/* Highlight points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            data-aos="fade-up"
            className="p-6 rounded-xl shadow-sm border"
          >
            <h3 className="font-semibold text-lg mb-2">
              Precision Astrology
            </h3>
            <p className="text-gray-600 text-sm">
              Data-driven planetary insights designed for proactive growth and
              better decision-making.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-6 rounded-xl shadow-sm border"
          >
            <h3 className="font-semibold text-lg mb-2">
              Unlock Your Cosmic Blueprint
            </h3>
            <p className="text-gray-600 text-sm">
              Discover your strengths, challenges, and opportunities written
              in your birth chart.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 rounded-xl shadow-sm border"
          >
            <h3 className="font-semibold text-lg mb-2">
              Guidance That Empowers
            </h3>
            <p className="text-gray-600 text-sm">
              Practical remedies and clear guidance to help you move forward
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
