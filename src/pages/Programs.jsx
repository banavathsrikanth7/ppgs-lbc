import { useEffect, useRef, useState } from "react";
import prog1 from "../assets/image1.jpg";
import prog2 from "../assets/image2.jpg";
import prog3 from "../assets/image3.jpg";

export default function Programs() {
  const programs = [
    {
      title: "Public Policy Awareness Drive 2025",
      img: prog1,
      link: "https://www.linkedin.com/company/civil-services-club-iitkgp/",
    },
    {
      title: "Know Your Government  School Outreach Program",
      img: prog2,
      link: "https://www.linkedin.com/posts/civil-services-club-iitkgp_from-conception-to-implementation-this-was-activity-7347588327803359232-g0IE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ5lngBA7dTq5VdjvACncAGKhJ8ke-2FKE",
    },
    {
      title: "Citizens of Tomorrow  Public Policy Basics",
      img: prog3,
      link: "https://www.linkedin.com/posts/civil-services-club-iitkgp_the-youth-of-today-are-the-leaders-of-tomorrow-activity-7333395941300826112-LLaG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ5lngBA7dTq5VdjvACncAGKhJ8ke-2FKE",
    },
  ];

  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="bg-gradient-to-b from-[#120042] to-[#0a0029] py-20 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-14">
        Our Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <div
            key={i}
            className={`
              relative h-[360px] rounded-3xl overflow-hidden shadow-2xl group
              transform transition-all duration-700
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

            {/* Text + View Button */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md leading-snug">
                {p.title}
              </h3>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block w-fit text-sm text-white bg-indigo-500/80 px-4 py-1.5 rounded-full hover:bg-indigo-600 transition"
              >
                View more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
