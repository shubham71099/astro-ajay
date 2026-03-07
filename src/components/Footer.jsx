import { FaInstagram, FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Free Kundli", href: "#kundli" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-cosmic-900 border-t border-saffron-500/10">
      {/* Golden Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-saffron-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☿</span>
              <span className="font-heading text-xl font-bold text-gradient">Astro Ajay</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional Vedic astrologer helping you navigate life's journey through the wisdom of the stars.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-saffron-400 hover:border-saffron-500/30 hover:bg-saffron-500/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-saffron-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-saffron-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-saffron-500/30 group-hover:bg-saffron-400 transition-colors duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-saffron-400 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919251170521"
                className="flex items-center gap-3 text-gray-400 hover:text-saffron-400 text-sm transition-colors duration-300"
              >
                <FaPhoneAlt className="text-orange-600" />
                +91 92511 70521
              </a>
              <p className="text-gray-500 text-xs leading-relaxed mt-4">
                Available for consultations<br />
                Mon - Sat, 10 AM - 7 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Astro Ajay. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Developed by{" "}
            <a
              href="https://shubhamkumarjha.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-500/60 hover:text-saffron-400 transition-colors duration-300"
            >
              Shubham Jha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
