import HeroSection from "./ui/hero/Hero";
import About from "./ui/about/About";
import Skills from "./ui/skills/Skills";
import Experience from "./ui/experience/Experience";
import Projects from "./ui/projects/Projects";
import Resume from "./ui/resume/Resume";
import Contact from "./ui/contact/Contact";

export default function Page() {

  

  return (
    <>
      <div className="container mx-auto py-10" id="main-container">
        {/* HeroSection */}
        <HeroSection />
        {/* About (client component)*/}
        <About />
        {/* Skills section */}
        <Skills />
        {/* Experience section */}
        <Experience />
        {/* Projects section */}
        <Projects />
        {/* Resume section */}
        <Resume />
        {/* Contact Form - client component */}
        <Contact />

      </div>
    </>
  );
}
