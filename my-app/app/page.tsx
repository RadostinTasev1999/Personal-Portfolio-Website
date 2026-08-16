import Skills from "./ui/skills/skills";
import Home from "./ui/home/home";
import About from "./ui/about/about";
import Experience from './ui/experience/experience'

export default function Page() {
  return (
    <>
    <div className="container mx-auto py-30">
    {/* Home section */}
    <Home />
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
