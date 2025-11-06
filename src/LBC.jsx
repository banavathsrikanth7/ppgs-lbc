import Navbar from "./components/Navbar";
import AboutCards from "./components/AboutCards";
import Footer from "./components/Footer";

export default function Lbc() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />

      {/* photo */}
      <section className="relative w-full">
        <img
          src="/LBCimage.jpg"
          alt="Hero"
          className="w-full h-auto"
        />

        {/* explore */}
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="#about"
            className="px-8 py-4 text-lg sm:text-xl font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            style={{ transform: "translateY(190px)" }} 
          >
            Explore Programs
          </a>
        </div>
      </section>

      {/* main  */}
      <main>
        <AboutCards />
      </main>

      <Footer />
    </div>
  );
}

