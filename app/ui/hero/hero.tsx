import * as motion from "motion/react-client";
import Image from 'next/image'
import Link from "next/link";
import StatItem from "./stat-item";
import Badge from "./badge";
import JobRoles from './jobRoles'
import HeroStatistics from "./statistics";

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
                  <Badge />

                  {/* Main Heading */}
                  <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-3">
                    Radostin<br/>
                    Tasev
                  </h1>

                  {/* Job Role */}
                <JobRoles />

                  {/* Biography */}

                  <p id="hero-bio" className="mt-3 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                      I build responsive user interfaces and interactive user experience with React, TypeScript and Next.js.
                  </p>

                  {/* CTA buttons */}

                  <div id="hero-cta" className="flex flex-row gap-4 mt-4">
                    <button id="btn-primary" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Projects</button>
                    <Link href="/#contact-section" id="btn-outline" className="hover:bg-sky-200 text-black font-bold py-2 px-4 rounded-full border border-blue-500">Get in Touch</Link>
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
                <HeroStatistics />
        
            </motion.section>
    )
}