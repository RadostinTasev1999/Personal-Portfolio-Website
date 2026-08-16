import * as motion from 'motion/react-client'
import SkillsCategory from './skillsCategory'

export default function Skills(){   

    const languages = ['JavaScript','TypeScript','HTML','CSS'];
    const frameworks = ['React', 'Vite','Angular','Next.js'];
    const tools = ['Git','GitHub','GitHub Actions','Jenkins']

    return (
        <>
        <motion.section
            initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            id="skills"
            className='py-20' // padding top/bottom
            >
                {/* // horizontally centered  maximum width horizontal padding */}
            <div id='skills-section-inner' className='mx-auto max-w-6xl px-6'> 
                <div id="section-header" className='mb-12 text-center'>
                    <div className='mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400'>
                        {/* inline-flex items-center gap-2 -> this class places Skills horizontally */}
                        <span className='inline-block h-px w-5 bg-cyan-400'/>
                            <h1 className='text-lg'>Skills</h1>
                        <span className='inline-block h-px w-5 bg-cyan-400'/>
                    </div>
                    <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base'>
                        Tech Stack
                    </p>
                </div>
                <div id="skills-layout" className='grid lg:grid-cols-1'>
                    {/* Languages skills */}
                        <div id="skills-category" className='mb-8 p-4 border-2 border-solid rounded-xl bg-sky-100/50'>
                            <div id="skill-category-header" className='mb-3 flex items-center gap-3'>
                                <span className='h-2 w-2 rounded-full bg-indigo-500' />
                                <span className='font-mono text-sm font-semibold text-indigo-500'>
                                    Languages
                                </span>
                            </div>
                        <SkillsCategory skill={languages}/>
                        </div>
                    {/* Framework skills */}
                    <div id="skills-category" className='mb-8 p-4 border-2 border-solid rounded-xl bg-sky-100/50'>
                            <div id="skill-category-header" className='mb-3 flex items-center gap-3'>
                                <span className='h-2 w-2 rounded-full bg-indigo-500' />
                                <span className='font-mono text-sm font-semibold text-indigo-500'>
                                    Frameworks & Libraries
                                </span>
                            </div>
                            <SkillsCategory skill={frameworks} />
               
                        </div>
                    {/* Tools and Platforms */}
                    <div id="skills-category" className='mb-8 p-4 border-2 border-solid rounded-xl bg-sky-100/50'>
                            <div id="skill-category-header" className='mb-3 flex items-center gap-3 '>
                                <span className='h-2 w-2 rounded-full bg-indigo-500' />
                                <span className='font-mono text-sm font-semibold text-indigo-500'>
                                    Tools & Platforms
                                </span>
                            </div>
                            <SkillsCategory skill={tools} />
                        </div>
                </div>
            </div>

        </motion.section>
        </>
    )
}

/*
      
*/