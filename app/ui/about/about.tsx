'use client'

import * as motion from "motion/react-client";
import Image from 'next/image'
import Link from "next/link";
import SectionHeader from '../section-header/sectionHeader'
import {sectionHeadings} from '@/app/lib/placeholder-data'
import { SectionHeaders } from "@/app/lib/definitions";
import ValueCard from "./valueCard";
import { valueCards } from "@/app/lib/placeholder-data";

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
                            <div id="about-body" className="block">
                                <p>Hello There! My name is Radostin Tasev - a JavaScript Web Developer graduate from Software University.</p>
                                <p>I am currently building personal projects with React and Next.js.</p>
                                <p>I do also focus on improving my problem solving skills through solving Data Structure and
                                Algorithm problems.
                                I am passionate continuous learner, always tackling new challenges to deepen my understadning in software technologies.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, minima. Vel enim magnam omnis quae accusantium amet magni perferendis laudantium aperiam, eius cumque distinctio obcaecati numquam recusandae at, temporibus laborum necessitatibus molestias vero earum. Corrupti totam quis alias, rerum doloribus tempora unde accusantium. Fuga rem repellat vel, at optio nam.</p>
                            </div>
                            <div id="about-values" className="box-border grid gap-[16px] grid-cols-[356.5px]">
                                {/* Value card */}
                                {
                                    valueCards.map((value) => (
                                        <ValueCard key={value.id} heading={value.heading} text={value.text} />
                                    ))
                                }
                               
                            </div>
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
                            <div id="about-photo-wrap" className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                                <Image 
                                    src="/IMG_7282.jpg"
                                    alt="Profile picture"
                                    width={500}
                                    height={500}
                                    className="h-auto w-full object-cover"
                                >

                                </Image>
                            </div>
                            {/* Quick Facts */}
                            <div id="about-quick-facts" className="flex flex-col gap-[8px]">
                                {/* fact1 */}
                                <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-slate-50 hover:bg-slate-200 rounded-2xl px-[16px] py-[9.6px] text-[13.6px] ">
                                    {/* Icon */}
                                    <span className="shrink-0 text-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                        </svg>

                                    </span>
                                    <p>Prof. Qual. Front-End Developer with JavaScript</p>
                                </div>
                                {/* fact2 */}
                                <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-slate-50 hover:bg-slate-200 rounded-2xl px-[16px] py-[9.6px] text-[13.6px]">
                                    {/* Icon */}
                                    <span className="shrink-0 text-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                        </svg>

                                    </span>
                                    <p>Bulgaria, Europe</p>
                                </div>
                                {/* fact3 */}
                                <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-slate-50 hover:bg-slate-200 rounded-2xl px-[16px] py-[9.6px] text-[13.6px]">
                                    {/* Icon */}
                                    <span className="shrink-0 text-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                        </svg>

                                    </span>
                                    <p>Open to Full Time roles and Freelance projects</p>
                                </div>
                                {/* fact 4 */}
                                <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-slate-50 hover:bg-slate-200 rounded-2xl px-[16px] py-[9.6px] text-[13.6px]">
                                    {/* Icon */}
                                    <span className="shrink-0 text-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                                        </svg>

                                    </span>
                                    <p>Passionate continuous learner, seeking for the next challenge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    
    )
}
