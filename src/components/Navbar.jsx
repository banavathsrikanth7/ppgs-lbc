import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background change
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 ml-0 py-3 flex items-center justify-between">
        <h1 className={`font-bold  text-2xl md:text-2xl tracking-wide 
                ${scrolled ? 'text-black' : 'text-white'}`}>
  Learning Beyond the Classroom
</h1>

      

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className={`hover:text-indigo-500 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>About</a>
            <a href="#programs" className={`hover:text-indigo-500 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Programs</a>
            <a href="#contact" className={`hover:text-indigo-500 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Reach Out</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${scrolled ? 'text-blue-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
    <div className={`md:hidden transition-all duration-300 overflow-hidden 
                 ${open ? 'max-h-96' : 'max-h-0'}
                 ${scrolled ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`}>
  <div className="px-6 py-6 flex flex-col gap-4">
    <a href="#about" onClick={() => setOpen(false)} 
       className={`block w-full py-3 px-4 text-xl font-semibold transition-colors
                   rounded-md border-2
                   ${scrolled ? 'text-white border-white hover:border-indigo-300 hover:text-indigo-300' 
                              : 'text-black border-black hover:border-indigo-500 hover:text-indigo-500'}`}>
      About
    </a>
    <a href="#programs" onClick={() => setOpen(false)} 
       className={`block w-full py-3 px-4 text-xl font-semibold transition-colors
                   rounded-md border-2
                   ${scrolled ? 'text-white border-white hover:border-indigo-300 hover:text-indigo-300' 
                              : 'text-black border-black hover:border-indigo-500 hover:text-indigo-500'}`}>
      Programs
    </a>
    <a href="#contact" onClick={() => setOpen(false)} 
       className={`block w-full py-3 px-4 text-xl font-bold transition-colors
                   rounded-md border-2
                   ${scrolled ? 'text-white border-white hover:border-indigo-300 hover:text-indigo-300' 
                              : 'text-black border-black hover:border-indigo-500 hover:text-indigo-500'}`}>
      Reach Out
    </a>
  </div>
</div>

      </header>

      {/* Hero Section */}
      <section className="w-full h-[80vh] md:h-[90vh] lg:h-[200vh] relative flex items-center justify-center overflow-hidden">
        <img
          src="/LBCimage.jpg" // put this in public folder
          alt="LBC Hero"
          className="w-auto min-w-full h-full object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-100">
          <a href="#programs" className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors">
            Explore Programs
          </a>
        </div>
      </section>
    </div>
  );
}
