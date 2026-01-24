import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "9251170521";
  const message = "Hello Astro Ajay, I want to book a consultation.";

  return (
    <section
      id="contact"
      className="py-16 bg-yellow-500 text-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Book Your Consultation
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-8 text-lg"
        >
          Chat directly on WhatsApp for appointment & guidance.
        </p>

        {/* WhatsApp Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-center"
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
