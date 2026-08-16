import * as motion from 'motion/react-client'

export default function Experience() {

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
                    <div id="timeline-item" className="relative pb-12 pl-10">
                        <div id="timeline-line" className="absolute left-[5px] top-3 h-full w-px bg-slate-700" />
                        <div id="timeline-dot" className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                        <div id="timeline-period" className="mb-3 font-mono text-sm font-medium text-cyan-400">
                            2023 - 2026
                        </div>
                        <div id="timeline-card" className="rounded-xl border border-slate-700 bg-sky-100/50 p-6 shadow-sm">

                            <h3 className="text-xl font-semibold text-black">
                                JavaScript Web Developer
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-400">
                                Software University
                            </p>

                            <ul id="timeline-points" className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Timeline item */}
                    <div id="timeline-item" className="relative pb-12 pl-10">
                        <div id="timeline-line" className="absolute left-[5px] top-3 h-full w-px bg-slate-700" />
                        <div id="timeline-dot" className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                        <div id="timeline-period" className="mb-3 font-mono text-sm font-medium text-cyan-400">
                            2023 - 2026
                        </div>
                        <div id="timeline-card" className="rounded-xl border border-slate-700 bg-sky-100/50 p-6 shadow-sm">

                            <h3 className="text-xl font-semibold text-black">
                                JavaScript Web Developer
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-400">
                                Software University
                            </p>

                            <ul id="timeline-points" className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Timeline item */}
                   <div id="timeline-item" className="relative pb-12 pl-10">
                        <div id="timeline-line" className="absolute left-[5px] top-3 h-full w-px bg-slate-700" />
                        <div id="timeline-dot" className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                        <div id="timeline-period" className="mb-3 font-mono text-sm font-medium text-cyan-400">
                            2023 - 2026
                        </div>
                        <div id="timeline-card" className="rounded-xl border border-slate-700 bg-sky-100/50 p-6 shadow-sm">

                            <h3 className="text-xl font-semibold text-black">
                                JavaScript Web Developer
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-400">
                                Software University
                            </p>

                            <ul id="timeline-points" className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                                <li className="relative pl-5">
                                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    Data Structures & Algorithms
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}