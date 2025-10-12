import Navbar from "./components/Navbar";

import AboutCards from "./components/AboutCards";

import Footer from "./components/Footer";


export default function Lbc() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Navbar />
      <main className="pt-[64px] bg-indigo-50">
        
        <AboutCards />
      </main>
      <Footer />
    </div>
  );
}

