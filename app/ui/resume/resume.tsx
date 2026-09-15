import * as motion from "motion/react-client";
import SectionHeader from "../section-header/sectionHeader";
import {sectionHeadings} from '@/app/lib/placeholder-data' ;
import { resumeTags } from "@/app/lib/placeholder-data";
import { resumeHighlights } from "@/app/lib/placeholder-data";

import ResumeTags from './resumeTags';
import ResumeButtons from "./resumeButtons";
import ResumeNote from './resumeNote';
import ResumeHighlight from './resumeHighlight';

export default function Resume() {

    const {heading, header, text} = sectionHeadings.resume;

    return (
        <motion.section 
            id="resume-section" 
            className="w-full py-[100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
             >
            {/* Container for the content */}
            <div id="resume-section-inner" className="w-full max-w-[1200px] mx-auto px-[24px]">

                {/* Section Header */}
                <div id="section-header" className="mb-[40px] text-center">
                    <SectionHeader heading={heading} header={header} text={text} />
                </div>

                {/* Resume card */}
                <div id="resume-card" className="flex flex-wrap gap-[64px] p-[48px] justify-center border-[1px] border-gray-300 rounded-xl bg-[#f5f8ff] shadow-lg md:flex-nowrap">

                    {/* Left side of card */}
                    <div id="resume-left" className="flex flex-col gap-[24px] shrink basis-full">

                        {/* Heading */}
                        <h2 className="font-bold text-[35.2px] font-[800] tracking-[0.64px] m-0">Download My Resume</h2>
                        {/* Description */}
                        <p id="resume-note" className="text-sm font-normal leading-[1.7]">
                            Learn more about my background, including Skills, Experience and Projects.
                        </p>
                        {/* Technology tags */}
                        <div id="resume-tags" className="flex flex-wrap gap-[8px]">
                            
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
                    <div id="resume-right" className="flex flex-col gap-[20px] shrink basis-full">
                        
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