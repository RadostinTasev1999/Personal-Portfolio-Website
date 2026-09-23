'use client';

import * as motion from "motion/react-client";

import SectionHeader from '../section-header/SectionHeader';
import AboutButtons from "./AboutButtons";

import { AboutData } from "@/app/lib/definitions";

import AboutValues from "./AboutValues";
import AboutPhoto from "./AboutPhoto";
import AboutFacts from './AboutFacts';

export default function About({
    heading,
    header,
    text,
    aboutBioText
}: AboutData) {

    return (
        <>
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                id="about"
                className="py-20 max-w-7xl mx-auto px-6"
                
                 >
                <div id="about-section-inner">
                    {/* Section Header */}
                    <SectionHeader heading={heading} header={header} text={text} />

                    {/* About Layout */}
                    <div id="about-layout" className="flex flex-row flex-wrap gap-[60px] border border-gray-300 shadow-md rounded-xl px-6 py-10 bg-[#f5f8ff] md:flex-nowrap">
                        {/* About content */}
                        <div id="about-content" className="flex flex-col gap-[28px] shrink basis-full">
                            {/* About Body */}
                            <div id="about-body" className="flex flex-col gap-[5px]">
                                {
                                    aboutBioText.map((el) => (
                                        <p className="max-w-110 text-sm font-normal" key={el.id}>{el.text}</p>
                                    ))
                                }
                            </div>
                            {/* Values */}
                            <AboutValues />
                            {/* Buttons */}
                            <AboutButtons />
                        </div>
                        {/* About Photo */}
                        <div id="about-photo-col" className="flex flex-col gap-[28px] shrink basis-full">
                            {/* Photo */}
                            <AboutPhoto />
                            {/* Quick Facts */}
                            <AboutFacts />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    
    );
};
