import * as motion from "motion/react-client";
import CtaButtons from "./CtaButtons";
import Badge from "./Badge";
import JobRoles from "./JobRoles";
import HeroStatistics from "./Statistics";
import { HeroData } from "@/lib/definitions";

import Biography from "./Biography";
import VantaBackground from "./VantaBackground";

export default function HeroSection({
  firstName,
  lastName,
  bioText,
  heroBadgeText,
  jobRolesText,
  heroCtaButtons,
  statistics
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
              className="max-w-6xl mx-auto px-6 pt-32 pb-8"
                      
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
             >
              {/* Main hero content */}

              <div id="hero-inner" className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                                          
                {/* Left side */}
                <div id="hero-text" className="flex flex-col gap-4">
                                           

                  {/* Current status badge */}
                  <Badge 
                    heroBadgeText={heroBadgeText}
                    />

                  {/* Main Heading */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-950 leading-[0.95] tracking-tight">
                    {firstName}<br/>
                    {lastName}
                  </h1>

                  {/* Job Role */}
                <JobRoles 
                  jobRolesText={jobRolesText}
                  />

                  {/* Biography */}
                <Biography 
                  text={bioText}
                    />
                  

                  {/* CTA buttons */}
                  <CtaButtons 
                    heroCtaButtons={heroCtaButtons}
                    />
                  

                </div>

                {/* Right side */}
                <div id="hero-image" className="relative mx-auto aspect-square w-full max-w-md">                                 
                
                  <VantaBackground />
                      

                </div>
              </div>

              {/* Statistics */}
                <HeroStatistics 
                    statistics={statistics}
                  />
        
            </motion.section>
    );
}