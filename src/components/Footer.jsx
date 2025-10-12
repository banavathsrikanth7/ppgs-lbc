import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Reach Out */}
        <div>
          <h4 className="font-bold text-lg mb-3">Reach Out</h4>
          <p>Email: <a href="mailto:contact@lbc.org" className="underline hover:text-indigo-300">contact@lbc.org</a></p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-4">IIT Kharagpur, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-indigo-300 transition">About</a></li>
            <li><a href="#programs" className="hover:text-indigo-300 transition">Programs</a></li>
            <li><a href="#contact" className="hover:text-indigo-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-300 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-300 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} LBC • All rights reserved
      </div>
    </footer>
  );
}

