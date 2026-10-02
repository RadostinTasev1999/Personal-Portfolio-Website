import HeroSection from "../components/homepage/hero/Hero";
import About from "../components/homepage/about/About";
import Skills from "@/components/homepage/skills/Skills";
import Experience from "../components/homepage/experience/Experience";
import Projects from "../components/homepage/projects/Projects";
import Resume from "../components/homepage/resume/Resume";
import Contact from "../components/homepage/contact/Contact";
import { name } from "@/lib/placeholder-data";
import { biographyText } from "@/lib/placeholder-data";
import { sectionHeadings } from "@/lib/placeholder-data";
import { aboutBioText } from "@/lib/placeholder-data";
import { skillTypes } from "@/lib/placeholder-data";
import { timelineItems } from "@/lib/placeholder-data";
import { projectCardsData } from "@/lib/placeholder-data";
import { resumeTags } from "@/lib/placeholder-data";
import { resumeHighlights } from "@/lib/placeholder-data";
import { heroBadgeText } from "@/lib/placeholder-data";
import {jobRolesText} from '@/lib/placeholder-data';
import {heroCtaButtons} from '@/lib/placeholder-data';
import {statistics} from '@/lib/placeholder-data';
import { valueCards } from "@/lib/placeholder-data";
import {aboutButtonsText} from "@/lib/placeholder-data";
import {aboutFacts} from '@/lib/placeholder-data';
import {resumeData} from '@/lib/placeholder-data';
import { 
    initialInputs,
    initialErrors,
    initialState
 } from "@/lib/placeholder-data";

 import {contactFormData} from '@/lib/placeholder-data';

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
          heroBadgeText={heroBadgeText}
          jobRolesText={jobRolesText}
          heroCtaButtons={heroCtaButtons}
          statistics={statistics}
          />
        {/* About (client component)*/}
        <About 
          heading={aboutHeading}
          header={aboutHeader}
          text={aboutText}
          aboutBioText={aboutBioText}
          valueCards={valueCards}
          aboutButtonsText={aboutButtonsText}
          aboutFacts={aboutFacts}
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
          resumeData={resumeData}
        />
        {/* Contact Form - client component */}
        <Contact 
          contactHeading={contactHeading}
          contactHeader={contactHeader}
          contactText={contactText}
          initialInputs={initialInputs}
          initialErrors={initialErrors}
          initialState={initialState}
          contactFormData={contactFormData}
        />

      </div>
    </>
  );
}
