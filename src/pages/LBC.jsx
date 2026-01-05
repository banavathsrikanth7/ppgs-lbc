import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import AboutCards from "./AboutCards";
import Programs from "./Programs"
import Footer from "../components/Footer";
import LBCimage from "../assets/LBCimage.jpg";


function StatsCircles() {
  const stats = [
    { value: 10, label: "No. of States" },
    { value: 15, label: "No. of Schools" },
    { value: 10, label: "Competitions" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    const timers = [];

    stats.forEach((stat, i) => {
      const timer = setInterval(() => {
        setCounts((prev) => {
          if (prev[i] >= stat.value) {
            clearInterval(timer);
            return prev;
          }

          const updated = [...prev];
          updated[i] = updated[i] + 1;
          return updated;
        });
      }, 120);

      timers.push(timer);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#120042] via-[#1b0057] to-[#0a0029] py-16"
    >
      <div className="flex flex-wrap justify-center gap-18 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white transition-transform duration-300 hover:scale-110"
          >
            <div className="relative w-25 h-25 sm:w-40 sm:h-40 flex items-center justify-center group">
              <div
                className="
                  absolute inset-0 rounded-full p-[4px]
                  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                  group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-red-500
                  transition-all duration-500
                "
              ></div>

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

            <p className="text-xl sm:text-2xl mt-4 font-semibold tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function Lbc() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />

      {/* photo */}
      <section className="relative w-full">
        <img src={LBCimage} alt="Hero" className="w-full h-auto" />

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
     <Programs />

      </main>

      <StatsCircles />

      <Footer />
    </div>
  );
}
