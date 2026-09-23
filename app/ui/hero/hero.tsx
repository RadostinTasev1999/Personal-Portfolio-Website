import * as motion from "motion/react-client";
import CtaButtons from "./CtaButtons";
import Badge from "./Badge";
import JobRoles from "./JobRoles";
import HeroStatistics from "./Statistics";
import { HeroData } from "@/app/lib/definitions";

import Biography from "./Biography";
import VantaBackground from "./VantaBackground";

export default function HeroSection({
  firstName,
  lastName,
  bioText
}: HeroData) {

  /*
    -> The hero section has three main layers:
        1. Background effects
        2. Main content (left side - text, right side - animation)
        3. Statistics
  */

    return (
            <motion.section
              id="hero-section" 
              className="max-w-7xl mx-auto px-6 py-4 bg-[#f5f8ff] shadow-md border-gray-300 rounded-xl mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
             >
              {/* Main hero content */}

              <div id="hero-inner" className="relative z-[1] w-full max-w-[1200px] grid grid-cols-2 gap-16 items-center">
                {/* Left side */}
                <div id="hero-text" className="flex flex-col gap-[16px]">

                  {/* Current status badge */}
                  <Badge />

                  {/* Main Heading */}
                  <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-3">
                    {firstName}<br/>
                    {lastName}
                  </h1>

                  {/* Job Role */}
                <JobRoles />

                  {/* Biography */}
                <Biography text={bioText}/>
                  

                  {/* CTA buttons */}
                  <CtaButtons />
                  

                </div>

                {/* Right side */}
                <div id="hero-image" className="flex justify-center lg:justify-end">
                
                  <VantaBackground />
                      

                </div>
              </div>

              {/* Statistics */}
                <HeroStatistics />
        
            </motion.section>
    );
}