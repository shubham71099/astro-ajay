export default function FreeKundli() {
  return (
    <section id="kundli" className="py-16 bg-yellow-100">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Free Kundli
        </h2>

        <form className="space-y-4 bg-white p-6 rounded-xl shadow">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="date" className="input" />
          <input type="time" className="input" />
          <input type="text" placeholder="Place of Birth" className="input" />

          <button
            type="button"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold"
            onClick={() =>
              alert("Kundli will be generated after consultation")
            }
          >
            Generate Free Kundli
          </button>
        </form>
      </div>
    </section>
  );
}
