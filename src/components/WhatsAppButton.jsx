export default function WhatsAppButton() {
  const phone = "9251170521";
  const msg = "Hello Astro Ajay, I want to book a consultation.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
className="fixed bottom-5 right-5 z-50 bg-primary text-dark p-4 rounded-full shadow-lg hover:scale-105 transition"
    >
      💬
    </a>
  );
}
