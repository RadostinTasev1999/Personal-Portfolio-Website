import Image from "next/image"
import * as motion from 'motion/react-client'
export default function About() {

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                    </svg>

                    <div className="pt-1"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0 }}
					            animate={{ opacity: 1 }}
					            transition={{
						            ease: 'easeInOut',
						            duration: 0.9,
						            delay: 0.1,
					            }}
                                className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                About me
                            </motion.h2>

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
                <Image className="object-contain" fill src="/IMG_7282.jpg" alt="About me"/>
            </motion.div>
        </>
    )
}