export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light pt-20">
      <div className="text-center px-4">
        <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-bold mb-4">
          Trusted Astrologer – Astro Ajay
        </h1>
        <p data-aos="fade-up" className="text-gray-600 mb-6">
          Accurate predictions • Kundli analysis • Life guidance
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
