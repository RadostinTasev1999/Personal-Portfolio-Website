import * as motion from "motion/react-client";
import SectionHeader from "../section-header/sectionHeader";

import ResumeTags from "./resumeTags";
import ResumeButtons from "./resumeButtons";
import ResumeNote from "./resumeNote";
import ResumeHighlight from "./resumeHighlight";
import { ResumeData } from "@/app/lib/definitions";

export default function Resume({
    resumeHeading,
    resumeHeader,
    resumeText,
    resumeTags,
    resumeHighlights
}: ResumeData) {

    
    return (
        <motion.section 
            id="resume-section" 
            className="mx-auto w-full max-w-6xl border-t border-slate-200 px-6 py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
             >
            {/* Container for the content */}
            <div id="resume-section-inner">

                {/* Section Header */}
                <div id="section-header">
                    <SectionHeader heading={resumeHeading} header={resumeHeader} text={resumeText} />
                </div>

                {/* Resume card */}
                <div id="resume-card" className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left side of card */}
                    <div id="resume-left" className="flex flex-col gap-6">

                        {/* Heading */}
                        <h2 className="m-0 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Download My Resume</h2>
                        {/* Description */}
                        <p id="resume-note" className="max-w-md text-base leading-7 text-slate-600">
                            Learn more about my background, including Skills, Experience and Projects.
                        </p>
                        {/* Technology tags */}
                        <div id="resume-tags" className="flex flex-wrap items-center gap-x-4 gap-y-1">
                            {
                                resumeTags.map((el) => (
                                    <ResumeTags key={el.id} tag={el.tag} />
                                ))
                            }
                            
                        </div>
                        {/* Buttons */}
                        <ResumeButtons />
                        {/* Availability note / Status message */}
                        <ResumeNote />
                    </div>

                    {/* Right side of card */}
                    <div id="resume-right" className="flex flex-col border-t border-slate-200 lg:border-t-0 lg:border-l lg:pl-16">
                                                  
                        
                        {
                            resumeHighlights.map((el) => (
                                <ResumeHighlight key={el.id} heading={el.heading} items={el.items} id={el.id}/>
                            ))
                        }
                            
                        
                    </div>

                </div>

            </div>
        </motion.section>
    );
}