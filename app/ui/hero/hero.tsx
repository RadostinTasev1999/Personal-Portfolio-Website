import * as motion from "motion/react-client";
import Image from 'next/image'
import { statistics } from "@/app/lib/placeholder-data";
import StatItem from "./stat-item";

export default function HeroSection() {

  /*
    -> The hero section has three main layers:
        1. Background effects
        2. Main content (left side - text, right side - animation)
        3. Statistics
  */

    return (
            <motion.section
              id="hero-section" 
              className="max-w-7xl mx-auto px-6 py-10 bg-slate-50 shadow-md border-gray-300 rounded-md mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
             >
              {/* Background */}
              <div className="hero-bg"></div>
              <div className="hero-orb hero-orb-1"></div>
              <div className="hero-orb hero-orb-2"></div>

              {/* Main hero content */}

              <div id="hero-inner" className="relative z-[1] w-full max-w-[1200px] grid grid-cols-2 gap-16 items-center">
                {/* Left side */}
                <div id="hero-text" className="flex flex-col gap-2">

                  {/* Current status badge */}
                  <div className="opacity-100 transform-none mb-4">
                    <div id="available-badge" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm text-emerald-400">
                      <span id="status-dot" className="h-2 w-2 rounded-full bg-green-400"></span>
                      Available for opportunities
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-3">
                    Radostin<br/>
                    Tasev
                  </h1>

                  {/* Job Role */}
                  <motion.div
                     id="hero-role"
                     className="text-xl
                                font-medium
                                flex
                                flex-row
                                "
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                     >
                  <div id="hero-stack">
                    <span id="role-text" className="text-blue-500">{`JavaScript Developer / React Engineer / Problem Solver ...`}</span>
                  </div>
                    <motion.span
                      id="cursor"
                      className="ml-1 text-blue-500"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                    |
                    </motion.span>
                  </motion.div>

                  {/* Biography */}

                  <p id="hero-bio" className="mt-3 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                      I build responsive user interfaces and interactive user experience with React, TypeScript and Next.js.
                  </p>

                  {/* CTA buttons */}

                  <div id="hero-cta" className="flex flex-row gap-4 mt-4">
                    <button id="btn-primary" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Projects</button>
                    <button id="btn-outline" className="hover:bg-sky-200 text-black font-bold py-2 px-4 rounded-full border border-blue-500">Get in Touch</button>
                  </div>

                </div>

                {/* Right side */}
                <div id="hero-image" className="flex justify-center lg:justify-end">
                {/* <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                      <img
                        src="/Tasev.png"
                        alt="Radostin Tasev" 
                        className="h-full w-full object-cover"
                        />
                </div> */}
                      

                </div>
              </div>

              {/* Statistics */}

              <div id="hero-stats" className="transform-none flex flex-row flex-nowrap mt-6 border border-gray-300 rounded-xl p-6 gap-3 bg-slate-200">
                {/* stat-item1 */}
                {
                  statistics.map((el,i) => (
                    <StatItem key={i} name={el.name} stat={el.stat} index={i} />
                  ))
                }
                    
                
              </div>
            </motion.section>
    )
}

/*
  <motion.section
              initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
                    className="flex flex-col sm:justify-between p-5 rounded-xl items-center gap-10 sm:flex-row mt-5 md:mt-2 mx-20 bg-sky-100/50"
              id="home"
            >
              <div className="w-full md:w-1/3 text-left">
                <motion.h1
                  initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.9,
                                delay: 0.1,
                            }}
                            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
                >
                  Radostin Tasev
                </motion.h1>
                <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.9,
                                delay: 0.2,
                            }}
                            className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                  Front-End Developer
                </motion.p>
              </div>
              <motion.div
                        initial={{ opacity: 0, y: -180 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
              >
                <Image 
                  width={500}
                  height={500}
                  src="/developer.svg" 
                  alt="Developer" />
              </motion.div>
        
            </motion.section>
*/