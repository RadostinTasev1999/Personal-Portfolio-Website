import { section } from "motion/react-client";
import * as motion from "motion/react-client";
import SectionHeader from "../section-header/sectionHeader";
import {sectionHeadings} from '@/app/lib/placeholder-data' 
import Link from "next/link";

export default function Resume() {

    const {heading, header, text} = sectionHeadings.resume

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
                <div id="resume-card" className="flex gap-[64px] p-[48px] justify-center border-[1px] border-gray-300 rounded-lg bg-gray-100 shadow-lg">

                    {/* Left side of card */}
                    <div id="resume-left" className="flex flex-col gap-[24px] relative z-[1] grow-0">

                        {/* Heading */}
                        <h2 className="font-bold text-[35.2px] font-[800] tracking-[0.64px] m-0">Download My Resume</h2>
                        {/* Description */}
                        <p id="resume-note" className="text-[15.2px] leading-[1.7]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis consequatur voluptates delectus excepturi labore nesciunt alias, facere libero saepe iste inventore molestias perferendis, atque et doloribus voluptate, eveniet debitis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic officia dolore et optio sunt veritatis adipisci porro? Cumque enim quisquam blanditiis velit cum corporis voluptas, itaque et delectus sed.

                        </p>
                        {/* Technology tags */}
                        <div id="resume-tags" className="flex flex-wrap gap-[8px]">
                            <span className="border-[1px] solid text-[12.8px] font-semibold py-[5.6px] px-[13.6px] rounded-[999px] bg-slate-50 border-gray-300 shadow-md hover:border-sky-500">React 19</span>
                            <span className="border-[1px] solid text-[12.8px] font-semibold py-[5.6px] px-[13.6px] rounded-[999px] bg-slate-50 border-gray-300 shadow-md hover:border-sky-500">React 19</span>
                            <span className="border-[1px] solid text-[12.8px] font-semibold py-[5.6px] px-[13.6px] rounded-[999px] bg-slate-50 border-gray-300 shadow-md hover:border-sky-500">React 19</span>
                            
                        </div>
                        {/* Buttons */}
                        <div id="resume-buttons" className="flex flex-nowrap gap-[12px] mt-[8px]">
                            <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1" id="btn-primary" className="inline-flex items-center gap-[8px] py-[13.6px] px-[28px] border-gray-400 bg-sky-400 rounded-[10px] text-[15.2px] text-slate-50 font-[600] shadow-md tracking-[0.16px] hover:bg-sky-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                Download PDF
                            </Link>
                            <Link href="https://linkedin.com/in/radostin-tasev-360a6016b" id="btn-outline" className="inline-flex items-center gap-[8px] py-[13.6px] px-[28px] border border-gray-300 bg-slate-50 rounded-[10px] text-[15.2px] text-sky-500 font-[600] shadow-lg tracking-[0.16px] hover:border-sky-500">LinkedIn Profile</Link>
                        {/* className="shadow-lg text-sky-500 py-[13.6px] px-[28px] text-[15.2px] border border-gray-300 rounded-[10px] font-semibold tracking-[0.16px] hover:border-sky-500" */}
                        </div>
                        {/* Availability note / Status message */}
                        <div className="italic text-gray-500 flex gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                            <p className="font-semibold">I am open to full time roles and freelance projects</p>
                        </div>
                    </div>

                    {/* Right side of card */}
                    <div id="resume-right" className="flex flex-col gap-[20px] relative z-[1] shrink-0">
                        <div id="resume-highlight" className="border-[1px] border-gray-300 bg-slate-200 shadow-md rounded-[12px] py-[20px] px-[24px] hover:border-sky-500">
                            {/* Heading */}
                            <h3 className="font-bold mb-[12px]">What I focus on</h3>
                            {/* list */}
                            <ul className="flex flex-col list-none gap-[6.4px] list-outside">
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                                {/* <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px]">Build responsive UI with TailwindCss and HeadlessUI</li> */}
                                {/* <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px]">Build responsive UI with TailwindCss and HeadlessUI</li> */}
                            </ul>
                        </div>
                        <div id="resume-highlight" className="border-[1px] border-gray-300 bg-slate-200 shadow-md rounded-[12px] py-[20px] px-[24px] hover:border-sky-500">
                            {/* Heading */}
                            <h3 className="font-bold mb-[12px]">Recent achievements</h3>
                            {/* list */}
                            <ul className="flex flex-col list-none gap-[6.4px] list-outside">
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                                <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">Build responsive UI with TailwindCss and HeadlessUI</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </motion.section>
    )
}