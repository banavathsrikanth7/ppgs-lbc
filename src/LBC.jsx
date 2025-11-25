import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AboutCards from "./components/AboutCards";
import Footer from "./components/Footer";

// ------------------- STATS CIRCLES COMPONENT -------------------
function StatsCircles() {
  const stats = [
    { value: 10, label: "No. of States" },
    { value: 15, label: "No. of Schools" },
    { value: 10, label: "Competitions" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // Number animation from 0 → final value
  useEffect(() => {
    const timers = stats.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[i] < stat.value) updated[i]++;
          return updated;
        });
      }, 100)
    );

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#120042] via-[#1b0057] to-[#0a0029] py-16">
      <div className="flex flex-wrap justify-center gap-16 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white transition-transform duration-300 hover:scale-110"
          >
            {/* Circle wrapper */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center group">

              {/* Outer Glow Ring */}
              <div
                className="
                  absolute inset-0 rounded-full p-[4px]
                  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                  group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-red-500
                  transition-all duration-500
                "
              ></div>

              {/* Inner Circle */}
              <div
                className="
                  relative w-full h-full rounded-full
                  bg-[#1a0030] flex items-center justify-center
                  group-hover:bg-[#2b004a]
                  transition-all duration-500
                "
              >
                <span className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
                  {counts[index]}+
                </span>
              </div>
            </div>

            {/* Label */}
            <p className="text-xl sm:text-2xl mt-4 font-semibold tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------- MAIN PAGE -------------------
export default function Lbc() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />

      {/* photo */}
      <section className="relative w-full">
        <img src="/LBCimage.jpg" alt="Hero" className="w-full h-auto" />

        {/* Explore button */}
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

      {/* main */}
      <main>
        <AboutCards />
      </main>

      {/* ⭐ ADDED NEW BEAUTIFUL STATS SECTION HERE ⭐ */}
      <StatsCircles />

      <Footer />
    </div>
  );
}
