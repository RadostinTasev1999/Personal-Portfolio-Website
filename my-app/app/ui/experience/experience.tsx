import * as motion from 'motion/react-client'
import TimelineItem from './timelineItem'
import {TimelineItems} from '../../lib/definitions'

export default function Experience() {

    const timelineItems : TimelineItems[] = [
        {
            year: '2023 - 2026',
            position: 'Front-End Developer with JavaScript',
            company: 'Software University',
            bullets: [
                'Computer Networking Fundamentals',
                'Programming Basics',
                'Programming Fundamentals',
                'JS Advanced',
                'HTML & CSS',
                'JS Applications',
                'JS Back-End',
                'ReactJS',
                'Angular',
                'Software Engineering and DevOps'
            ],
            url: 'https://softuni.bg/certificates/details/259367/6159310e'
        },
        {
            year: '2024 - 2026',
            position: 'Computer analyst software support - Microsoft Office 365',
            company: 'Concentrix',
            bullets: [
                'Delivered L1 Technical Support for Microsoft Teams incidents',
                'Collaborated with engineering teams to report software bugs and advocate for product enhancements.',
                'Utilized debugging tools (e.g., Fiddler, WireShark, Devtools) to perform root cause analysis and identify technical solutions.',
                'Authored technical documentation to standardize troubleshooting procedures and assist in knowledge sharing across teams'
            ],
            url: ''
        }
    ]

    return (
        <motion.section 
             initial={{ opacity: 0 }}
			 animate={{ opacity: 1 }}
			 transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
             id="timeline-section"
             className=" py-20">
            <div id="timeline-section-inner" className="mx-auto max-w-6xl px-6">
                {/*  -> This is our layout wrapper -> controls max width / horizontal margins / padding / positioning*/}
                <div id="section-header " className="mb-16 text-center">

                    <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
                        <span className='inline-block h-px w-5 bg-cyan-400' />
                        <h1 className='text-lg'>Education & Experience</h1>
                        <span className='inline-block h-px w-5 bg-cyan-400' />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Experience & Education
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
                        Highlights from freelance work, research, and the coursework
                        that shaped my engineering mindset.
                    </p>
                </div>
                <div id="timeline" className="relative">
                    {/* Timeline item */}
                    <TimelineItem timelineItems={timelineItems}/>
                    
                </div>

            </div>
        </motion.section>
    )
}