import * as motion from "motion/react-client";
import SectionHeader from "../section-header/sectionHeader";
import {sectionHeadings} from '@/app/lib/placeholder-data' ;
import { resumeTags } from "@/app/lib/placeholder-data";
import { resumeHighlights } from "@/app/lib/placeholder-data";

import ResumeTags from './resumeTags';
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                        <p id="resume-note" className="text-[15.2px] leading-[1.7]">
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
                        <div id="resume-buttons" className="flex flex-nowrap gap-[12px] mt-[8px]">
                            <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1">
                                <Button id="btn-primary" className="inline-flex items-center gap-[8px] py-[13.6px] px-[28px] border-gray-400 bg-sky-400 rounded-[10px] text-[15.2px] text-slate-50 font-[600] shadow-md tracking-[0.16px] hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    Download PDF
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com/in/radostin-tasev-360a6016b" >
                                <Button id="btn-outline" variant="link" className="inline-flex items-center py-[13.6px] px-[28px] border border-gray-300 bg-slate-50 rounded-[10px] text-[15.2px] text-sky-500 font-[600] shadow-lg tracking-[0.16px] hover:border-sky-500">
                                    LinkedIn Profile
                                </Button>
                                
                            </Link>
                        
                        </div>
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