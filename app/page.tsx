import Skills from "./ui/skills/skills";
import HeroSection from "./ui/hero/hero";
import About from "./ui/about/about";
import Experience from './ui/experience/experience'



export default function Page() {


  return (
    <>
      <main className="min-h-screen bg-[url(/background2.png)] bg-cover bg-center bg-fixed">
        <div className="container mx-auto py-10">
          {/* HeroSection */}
          <HeroSection />
          {/* About */}
          <About />
          {/* Skills section */}
          <Skills />
          {/* Experience section */}
          <Experience />
        </div>
      </main>
    </>
  );
}
