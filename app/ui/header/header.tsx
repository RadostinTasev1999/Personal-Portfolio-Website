// import montserrat from '../fonts'
import Link from 'next/link';
import * as motion from "motion/react-client";
import Image from 'next/image';

export default function AppHeader() {

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto fixed top-0 left-0 ">
            {/* Header */}
            <div className="z-10 block sm:flex sm:justify-between sm:flex-row w-full h-28">
                <div className="px-4 sm:px-0">
                    <div>
                        <Link href="#home">
                        <Image
                            src="/Tasev.png"
                            width={200}
                            height={200}
                            alt='logo'
                            className='ml-20 w-32 h-32 cursor-pointer'
                        />
                        </Link>
                    </div>
                </div>

                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        <Link href="#about">About Me</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        <Link href="#skills">Skills</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Experience"
                    >
                        <Link href="#timeline-section">Experience</Link>
                    </div>
                    
                </div>
            </div>
            
        </motion.nav>
    )

}