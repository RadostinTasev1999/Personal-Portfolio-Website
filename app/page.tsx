import Skills from "./ui/skills/skills";
import HeroSection from "./ui/hero/hero";
import About from "./ui/about/about";
import Experience from './ui/experience/experience'



export default function Page() {


  return (
    <>
    <div className="container mx-auto py-30">
    {/* HeroSection */}
    <HeroSection />
    {/* About */}
    <About />
    {/* Skills section */}
    <Skills />
    {/* Experience section */}
    <Experience />
    </div>
    
    </>
  );
}
