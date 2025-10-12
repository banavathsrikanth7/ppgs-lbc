function Card({ title, text, image, reversed = false, bg = "bg-white" }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center rounded-2xl shadow-xl overflow-hidden ${bg} transform transition duration-500 hover:scale-[1.02]`}
    >
      {/* Text Section */}
      <div className="md:w-1/2 p-8">
        <h3 className="text-4xl font-bold mb-3">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed  ">{text}</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 h-56 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function AboutCards() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  About Us
</h2>


      {/* Cards */}
      <div className="grid gap-12">
        <Card
          title="What is LBC?"
          text="Learning Beyond Classroom (LBC) is a flagship outreach program of PPGS, IIT Kharagpur, started in 2024. The idea is to take learning outside textbooks and classrooms. Through interactive sessions, competitions, and open discussions, LBC encourages students to think in new directions and relate what they study with real-world issues."
          image="/about1.jpg"
          bg="bg-pink-100"
          reversed={false}
        />

        <Card
          title=" Last LBC Program Success"
          text="The most recent edition of LBC was conducted across 8 regions and covered more than 45 schools. Each session focused on engaging students through activities that were fun yet meaningful. The program helped them connect academics with practical issues in society and gave them a platform to share their own ideas with confidence and creativity.
"
          image="/about2.jpg"
          bg="bg-yellow-100"
          reversed={true}
        />

        <Card
          title=" What We Do?"
          text="Through LBC, PPGS reaches out to school students to broaden their learning experience. We try to create a space where young minds can explore, question, and learn beyond their syllabus. Our aim is to inspire awareness, critical thinking, and responsibility so that students can grow into more thoughtful and informed individuals."
          image="/about3.jpg"
          bg="bg-green-100"
          reversed={false}
        />
      </div>
    </section>
  );
}
