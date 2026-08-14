import Image from 'next/image'
import Link from 'next/link';
import * as motion from "motion/react-client";

export default function AppHeader() {

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto">
            {/* Header */}
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div className="flex justify-between items-center px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {/* <Image
                                src={}
                                width={500}
                                height={500}
                                alt='Picture of author'
                            >

                            </Image> */}
                        </Link>
                    </div>
                </div>

                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        <Link href="/about">About Me</Link>
                    </div>

                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    )

}