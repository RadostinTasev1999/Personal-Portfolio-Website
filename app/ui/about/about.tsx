'use client'

import * as motion from "motion/react-client";
import Image from 'next/image'
import Link from "next/link";

import SectionHeader from '../section-header/sectionHeader'

import {sectionHeadings} from '@/app/lib/placeholder-data'
import { aboutText } from "@/app/lib/placeholder-data";

import { SectionHeaders } from "@/app/lib/definitions";

import ValueCard from "./valueCard";
import AboutValues from "./aboutValues";
import AboutPhoto from './aboutPhoto'
import AboutFacts from './aboutFacts'

export default function About() {

     const { heading, header, text } : SectionHeaders = sectionHeadings.about

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
                    <div id="about-layout" className="grid gap-12 lg:grid-cols-2 lg:items-start border border-gray-300 shadow-md rounded-md px-6 py-10 bg-slate-50 ">
                        {/* About content */}
                        <div id="about-content" className="flex flex-col gap-[28px]">
                            {/* About Body */}
                            <div id="about-body" className="block">
                                {
                                    aboutText.map((el) => (
                                        <p key={el.id} className="pb-[10px]">{el.text}</p>
                                    ))
                                }
                            </div>
                            {/* Values */}
                            <AboutValues />
                            {/* Buttons */}
                            <div id="buttons" className="flex flex-wrap gap-[16px] items-center">
                                {/* Download Resume */}
                                
                                <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1" className="shadow-lg flex gap-[10px] text-[15.2px] border border-gray-300 text-slate-50 bg-sky-500 font-[600px] tracking-[0.152px] py-[13px] px-[28px] border rounded-[10px] hover:bg-sky-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>

                                    <b>Download my resume</b>
                                </Link>
                                
                                {/* Contact Form */}
                                <Link href="/#contact-section" className="shadow-lg text-sky-500 py-[13.6px] px-[28px] text-[15.2px] border border-gray-300 rounded-[10px] font-semibold tracking-[0.16px] hover:border-sky-500">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                        {/* About Photo */}
                        <div id="about-photo-col" className="flex flex-col gap-[20px]">
                            {/* Photo */}
                            <AboutPhoto />
                            {/* Quick Facts */}
                            <AboutFacts />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    
    )
}
