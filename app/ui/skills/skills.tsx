import * as motion from 'motion/react-client';
import SectionHeader from '../section-header/sectionHeader';
import { sectionHeadings } from '@/app/lib/placeholder-data';
import { SectionHeaders } from '@/app/lib/definitions';
import SkillsCard from './skillsCard';
import { skillTypes } from '@/app/lib/placeholder-data';

export default function Skills(){   

   

    const { heading, header, text }: SectionHeaders = sectionHeadings.skills;

    return (
        <>
        <motion.section
            initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            id="skills"
            className='py-20 px-6' // padding top/bottom
            >
                {/* // horizontally centered  maximum width horizontal padding */}
            <div id='skills-section-inner' className='mx-auto max-w-6xl px-6'> 
                {/* Section Header */}
                <SectionHeader heading={heading} header={header} text={text} />
                {/* Skills layout */}
                <div id="skills-layout" className='grid lg:grid-cols-1'>
                    {
                        skillTypes.map((type) => (
                            <SkillsCard key={type.id} skillType={type.skillType} skills={type.skills} />
                        ))
                    }
                    
                </div>
            </div>

        </motion.section>
        </>
    );
}

/*
      
*/