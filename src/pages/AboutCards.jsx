import { motion } from "framer-motion";
import about1 from "../assets/about1.mp4";



function VerticalSliceVideo({ video, slices = 4, gap = 4 }) {
  return (
    <div
      className={`w-full h-96 flex gap-${gap} overflow-hidden`}
      style={{ overflowX: "hidden" }}
    >
      {[...Array(slices)].map((_, idx) => (
        <motion.div
          key={idx}
          className="flex-1 h-full overflow-hidden rounded-2xl shadow-lg"
          initial={{
            opacity: 0,
            y: idx % 2 === 0 ? -50 : 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: idx * 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{
            y: idx % 2 === 0 ? -10 : 10,
            transition: { type: "spring", stiffness: 120 },
          }}
        >
          <video
            src={about1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
            style={{
              objectPosition: `${(idx * 100) / slices}% center`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function MultiVideoCard({ title, text, video, slices = 4, reversed = false, link = "#" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-10 my-16 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Video  */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="w-full md:w-1/2 overflow-hidden"
      >
        <VerticalSliceVideo video={video} slices={slices} gap={6} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
          {title}
        </h2>

        <p className="text-gray-100 text-lg leading-relaxed max-w-xl">
          {text}
        </p>

       
        <a
          href={link}
          className="mt-4 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          View More →
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function AboutCards() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 py-12 flex flex-col items-center overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-black text-center mb-16 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
      >
        About Us
      </motion.h2>

      <div className="grid gap-24 w-full max-w-7xl">
        <MultiVideoCard
          title="What is LBC?"
          text="Learning Beyond Classroom (LBC) is a flagship outreach program of PPGS, IIT Kharagpur, started in 2024. The idea is to take learning outside textbooks and classrooms. Through interactive sessions, competitions, and open discussions, LBC encourages students to think in new directions and relate what they study with real-world issues."
          video="/about1.mp4"
          slices={4}
          reversed={false}
          link="https://www.linkedin.com/company/civil-services-club-iitkgp/"
        />

        <MultiVideoCard
          title="Last LBC Program Success"
          text="The most recent edition of LBC was conducted across 8 regions and covered more than 45 schools. Each session focused on engaging students through activities that were fun yet meaningful. The program helped them connect academics with practical issues in society and gave them a platform to share their own ideas with confidence and creativity."
          video="/about1.mp4"
          slices={4}
          reversed={true}
          link="https://www.linkedin.com/posts/civil-services-club-iitkgp_from-conception-to-implementation-this-was-activity-7347588327803359232-g0IE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ5lngBA7dTq5VdjvACncAGKhJ8ke-2FKE"
        />

        <MultiVideoCard
          title="What We Do?"
          text="Through LBC, PPGS reaches out to school students to broaden their learning experience. We try to create a space where young minds can explore, question, and learn beyond their syllabus. Our aim is to inspire awareness, critical thinking, and responsibility so that students can grow into more thoughtful and informed individuals."
          video="/about1.mp4"
          slices={4}
          reversed={false}
          link="https://www.linkedin.com/posts/civil-services-club-iitkgp_the-youth-of-today-are-the-leaders-of-tomorrow-activity-7333395941300826112-LLaG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ5lngBA7dTq5VdjvACncAGKhJ8ke-2FKE"
        />
      </div>
    </section>
  );
}
