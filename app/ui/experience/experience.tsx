import * as motion from 'motion/react-client';
import TimelineItem from './timelineItem';
import {timelineItems} from '@/app/lib/placeholder-data';
import { sectionHeadings } from '@/app/lib/placeholder-data';
import { SectionHeaders } from '../../lib/definitions';
import SectionHeader from '../section-header/sectionHeader';

export default function Experience() {


    const { heading,header,text }: SectionHeaders = sectionHeadings.experience;

    return (
        <motion.section 
             initial={{ opacity: 0 }}
			 animate={{ opacity: 1 }}
			 transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
             id="timeline-section"
             className=" py-20 px-6">
            <div id="timeline-section-inner" className="mx-auto max-w-6xl px-6">
                {/*  -> This is our layout wrapper -> controls max width / horizontal margins / padding / positioning*/}
                <SectionHeader heading={heading} header={header} text={text} />
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