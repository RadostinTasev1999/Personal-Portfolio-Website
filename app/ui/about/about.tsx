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
                className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-200"
                 >
                <div id="about-section-inner">
                    {/* Section Header */}
                    <SectionHeader heading={heading} header={header} text={text} />

                    {/* About Layout */}
                    <div id="about-layout" className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                        {/* About content */}
                        <div id="about-content" className="flex flex-col gap-10">
                            {/* About Body */}
                            <div id="about-body" className="flex flex-col gap-4 max-w-xl">
                                                       
                                {
                                    aboutBioText.map((el) => (
                                        <p className="text-base leading-7 text-slate-600" key={el.id}>{el.text}</p>                                               
                                    ))
                                }
                            </div>
                            {/* Values */}
                            <AboutValues />
                            {/* Buttons */}
                            <AboutButtons />
                        </div>
                        {/* About Photo */}
                        <div id="about-photo-col" className="flex flex-col gap-8">
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
