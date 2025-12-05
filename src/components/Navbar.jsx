import { useState, useEffect } from "react";
import logo from "../assets/PPGSlogo.png"; 


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gradientButton =
    "relative inline-block px-6 py-2 font-semibold text-center rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? " backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* website nam */}
         <img
    src={logo}
    alt="PPGS Logo"
    className="w-16 h-16 sm:w-20 sm:h-20 object-contain -ml-4 sm:-ml-2 -mt-3"

  />
        <h1
          className={`font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors duration-300 md:block hidden ${
            scrolled ? "text-indigo-700" : "text-white"
          }`}
        >
          Learning Beyond the Classroom
        </h1>

        {/* laptop set */}
        <nav className="hidden md:flex items-center gap-6">
          {["About", "Programs", "Reach Out"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`${gradientButton} border-2 border-transparent`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile  purpose */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-7 h-7 ${scrolled ? "text-indigo-800" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile use */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80" : "max-h-0"
        } ${scrolled ? "bg-indigo-900/95" : ""} backdrop-blur-sm`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {["About", "Programs", "Reach Out"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className={`${gradientButton} text-sm py-3`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
