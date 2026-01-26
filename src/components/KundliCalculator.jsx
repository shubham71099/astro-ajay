import { useState } from "react";

export default function FreeKundli() {
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Your Kundli has been generated, Please consult for details.");
    }, 2000);
  };

  return (
    <section id="kundli" className="py-16 bg-yellow-100">
      <div className="max-w-xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6
                     bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
                     bg-clip-text text-transparent"
        >
          Free Kundli
        </h2>

        <form className="space-y-4 bg-white p-5 sm:p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="date" className="w-full px-4 py-3 border rounded-lg" />
            <input type="time" className="w-full px-4 py-3 border rounded-lg" />
          </div>

          <input
            type="text"
            placeholder="Place of Birth"
            className="w-full px-4 py-3 border rounded-lg"
          />

          {/* Button with Loader */}
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-gray-900
              bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600
              transition-all duration-300 shadow-md
              flex items-center justify-center gap-2
              ${loading ? "opacity-80 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                Generating...
              </>
            ) : (
              "Generate Free Kundli"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
