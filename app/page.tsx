import Skills from "./ui/skills/skills";
import HeroSection from "./ui/hero/hero";
import About from "./ui/about/about";
import Experience from './ui/experience/experience'
import Contact from "./ui/contact/contact";


export default function Page() {

  

  return (
    <>
      <div className="container mx-auto py-10">
        {/* HeroSection */}
        <HeroSection />
        {/* About (client component)*/}
        <About />
        {/* Skills section */}
        <Skills />
        {/* Experience section */}
        <Experience />

        {/* Contact Form - client component */}
        <Contact />

      </div>
    </>
  );
}
