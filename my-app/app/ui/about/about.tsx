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
        <div id="about" className="relative bg-white overflow-hidden mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                    </svg>

                    <div className="pt-1"></div>

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
                                Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                velit. Mauris in maximus eros.
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
                <Image className="object-contain" fill src="/IMG_7282.jpg" alt="About me" />
            </motion.div>
        </div>
    </motion.section>
    )
}