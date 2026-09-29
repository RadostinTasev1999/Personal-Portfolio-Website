import HeroSection from "./ui/hero/hero";
import About from "./ui/about/about";
import Skills from "./ui/skills/skills";
import Experience from "./ui/experience/experience";
import Projects from "./ui/projects/projects";
import Resume from "./ui/resume/resume";
import Contact from "./ui/contact/contact";
import { name } from '@/app/lib/placeholder-data';
import { biographyText } from "@/app/lib/placeholder-data";
import { sectionHeadings } from "@/app/lib/placeholder-data";
import { aboutBioText } from "@/app/lib/placeholder-data";
import { skillTypes } from "@/app/lib/placeholder-data";
import { timelineItems } from "@/app/lib/placeholder-data";
import { projectCardsData } from "@/app/lib/placeholder-data";
import { resumeTags } from "@/app/lib/placeholder-data";
import { resumeHighlights } from "@/app/lib/placeholder-data";


export default function Page() {

  const { aboutHeading, aboutHeader, aboutText } = sectionHeadings.about;
  const { skillsHeading, skillsHeader, skillsText } = sectionHeadings.skills;
  const { experienceHeading, experienceHeader, experienceText } = sectionHeadings.experience;
  const { projectsHeading, projectsHeader, projectsText } = sectionHeadings.projects;
  const { resumeHeading, resumeHeader, resumeText } = sectionHeadings.resume;
  const { contactHeading, contactHeader, contactText } = sectionHeadings.contact;

  return (
    <>
      <div id="main-container">
        {/* HeroSection */}
        <HeroSection 
          firstName={name.firstName}
          lastName={name.lastName}
          bioText={biographyText}
          />
        {/* About (client component)*/}
        <About 
          heading={aboutHeading}
          header={aboutHeader}
          text={aboutText}
          aboutBioText={aboutBioText}
        />
        {/* Skills section */}
        <Skills 
          heading={skillsHeading}
          header={skillsHeader}
          text={skillsText}
          skillTypes={skillTypes}
        />
        {/* Experience section */}
        <Experience 
          experienceHeading={experienceHeading}
          experienceHeader={experienceHeader}
          experienceText={experienceText}
          timelineItems={timelineItems}
        />
        {/* Projects section */}
        <Projects 
          projectsHeading={projectsHeading}
          projectsHeader={projectsHeader}
          projectsText={projectsText}
          projectCardsData={projectCardsData}
        />
        {/* Resume section */}
        <Resume 
          resumeHeading={resumeHeading}
          resumeHeader={resumeHeader}
          resumeText={resumeText}
          resumeTags={resumeTags}
          resumeHighlights={resumeHighlights}
        />
        {/* Contact Form - client component */}
        <Contact 
          contactHeading={contactHeading}
          contactHeader={contactHeader}
          contactText={contactText}
        />

      </div>
    </>
  );
}
