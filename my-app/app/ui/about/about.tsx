import * as motion from "motion/react-client";
import Image from 'next/image'


export default function About() {
    return (
    <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    
                id="about"
                className='py-20' // padding top/bottom
                >
        <div id="section-header" className='mb-12 text-center'>
                    <div className='mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400'>
                        {/* inline-flex items-center gap-2 -> this class places Skills horizontally */}
                        <span className='inline-block h-px w-5 bg-cyan-400'/>
                            <h1 className="text-lg">
                                About me
                            </h1>
                        <span className='inline-block h-px w-5 bg-cyan-400'/>
                    </div>
                    <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base'>
                        JavaScript Web Developer / 3 + years in Software Development
                    </p>
                </div>
        <div id="about" className="relative bg-white overflow-hidden mt-16 ">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.9,
                                    delay: 0.2,
                                }}
                            >
                                Hello There! My name is Radostin Tasev - a JavaScript Web Developer graduate from Software University.
                                I am currently building personal projects with React and Next.js.
                                I do also focus on improving my problem solving skills through solving Data Structure and
                                Algorithm problems.
                                I am passionate continuous learner, always tackling new challenges to deepen my understadning in software technologies.
                            </motion.p>
                        </div>
                    </main>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
            >
                <Image className="object-scale-down" fill src="/IMG_7282.jpg" alt="About me" />
            </motion.div>
        </div>
    </motion.section>
    )
}