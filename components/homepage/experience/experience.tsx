import * as motion from 'motion/react-client';
import TimelineItem from './timelineItem';
import SectionHeader from '../section-header/sectionHeader';
import { ExperienceData } from '@/app/lib/definitions';

export default function Experience({
    experienceHeading,
    experienceHeader,
    experienceText,
    timelineItems

}: ExperienceData) {

    return (
        <motion.section 
             initial={{ opacity: 0 }}
			 animate={{ opacity: 1 }}
			 transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
             id="timeline-section"
             className="mx-auto max-w-6xl border-t border-slate-200 px-6 py-24">
                    
            <div id="timeline-section-inner">
                {/*  -> This is our layout wrapper -> controls max width / horizontal margins / padding / positioning*/}
                <SectionHeader heading={experienceHeading} header={experienceHeader} text={experienceText} />
                <div id="timeline" className="relative">
                    {/* Timeline item */}
                    {
                        timelineItems.map((item) => (
                            <TimelineItem 
                                key={item.id} 
                                year={item.year}
                                position={item.position}
                                company={item.company}
                                bullets={item.bullets}
                                url={item.url}
                                />
                        ))
                    }
                    
                </div>

            </div>
        </motion.section>
    );
}