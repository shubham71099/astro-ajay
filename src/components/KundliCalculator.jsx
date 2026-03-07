import { useState } from "react";

export default function FreeKundli() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
  });

  const isFormValid = formData.name && formData.dob && formData.tob && formData.pob;

  const handleGenerate = () => {
    if (!isFormValid) return;
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        dob: "",
        tob: "",
        pob: "",
      });

      setTimeout(() => setSuccess(false), 7000);
    }, 7000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kundli" className="relative py-20 md:py-28 cosmic-bg-alt overflow-hidden scroll-mt-16">
      {/* Decorative Top Divider */}
      <div className="section-divider w-full absolute top-0" />

      {/* Background Decorations (Hidden on Mobile) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:flex items-center justify-center">
        {/* Giant Rotating Moon */}
        <div
          className="absolute right-[-20%] top-[-10%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full opacity-40 blur-[1px] animate-[spin_60s_linear_infinite]"
          style={{
            background: "radial-gradient(circle at 30% 30%, #FFD54F 0%, #FF8F00 40%, #E65100 80%, #0a0a1a 100%)",
            boxShadow: "inset -20px -20px 40px rgba(0,0,0,0.8), 0 0 100px rgba(255,193,7,0.4), 0 0 30px rgba(255,255,255,0.2)"
          }}
        >
          {/* Craters (CSS simulated texture) */}
          <div className="absolute top-[20%] left-[20%] w-[15%] h-[15%] rounded-full bg-black/20 blur-[2px]" />
          <div className="absolute top-[40%] left-[60%] w-[25%] h-[20%] rounded-full bg-black/20 blur-[4px]" />
          <div className="absolute bottom-[30%] left-[30%] w-[10%] h-[12%] rounded-full bg-black/15 blur-[2px]" />
          <div className="absolute top-[60%] right-[20%] w-[12%] h-[12%] rounded-full bg-black/15 blur-[3px]" />
        </div>

        {/* Floating Planet */}
        <div className="absolute bottom-10 left-[-4rem] sm:left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full opacity-[0.2] blur-[8px] animate-[spin_30s_linear_infinite_reverse] bg-gradient-to-tr from-saffron-400 via-orange-500 to-transparent shadow-[0_0_80px_rgba(255,193,7,0.5)] mix-blend-screen" />

        {/* Subtle Stars/Symbols */}
        <div className="absolute top-1/4 left-1/4 text-5xl text-saffron-500/30 animate-float-delayed drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">✦</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl text-saffron-500/30 animate-pulse drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">✧</div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <span
            data-aos="fade-up"
            className="inline-block text-xs uppercase tracking-[0.3em] text-saffron-500 mb-3"
          >
            Free Tool
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
          >
            <span className="text-white">Free </span>
            <span className="text-gradient">Kundli</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 mt-3 text-sm"
          >
            Generate your birth chart instantly
          </p>
        </div>

        {/* Form Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="p-6 sm:p-8 rounded-2xl glass glow-border relative mt-16 min-h-[420px] flex flex-col justify-center"
        >
          {/* Success Message Banner */}
          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center animate-fade-in backdrop-blur-md shadow-lg shadow-green-500/10 z-20">
              <p className="font-semibold flex items-center justify-center gap-2">
                <span className="text-xl">✓</span> Your Kundli has been generated successfully!
              </p>
              <p className="text-sm mt-1 opacity-90">Please contact us for detailed analysis.</p>
            </div>
          )}

          {loading ? (
            <div className="py-8 flex flex-col items-center justify-center text-center animate-fade-in-up h-full">
              <div className="relative w-28 h-28 flex items-center justify-center mb-8">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 border-4 border-saffron-500/10 border-t-saffron-400 rounded-full animate-spin" />
                {/* Inner reverse rotating ring */}
                <div className="absolute inset-2 border-4 border-orange-500/10 border-b-orange-400 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                {/* Center glowing symbol */}
                <span className="text-5xl text-saffron-300 animate-pulse glow-text">ॐ</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-saffron-400 mb-3 animate-pulse">Reading the Stars...</h3>
                <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">Calculating accurate planetary positions and generating your comprehensive birth chart.</p>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 input-glow transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white input-glow transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Time of Birth</label>
                  <input
                    type="time"
                    name="tob"
                    value={formData.tob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white input-glow transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Place of Birth</label>
                <input
                  type="text"
                  name="pob"
                  value={formData.pob}
                  onChange={handleChange}
                  placeholder="Enter birth place"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 input-glow transition-all duration-300"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={!isFormValid}
                className={`w-full py-3.5 rounded-xl font-semibold text-white mt-2
                  ${isFormValid
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] hover:from-blue-400 hover:to-indigo-500 cursor-pointer"
                    : "bg-gray-600 cursor-not-allowed opacity-60"
                  }
                  transition-all duration-300
                  flex items-center justify-center gap-2`}
              >
                ✦ Generate Free Kundli
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="section-divider w-full absolute bottom-0" />
    </section>
  );
}
