import * as motion from 'motion/react-client';
import SectionHeader from '../section-header/SectionHeader';
import SkillsCard from './SkillsCard';
import { SkillData } from '@/app/lib/definitions';

export default function Skills({
    heading,
    header,
    text,
    skillTypes
}: SkillData){   

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
                <div id="skills-layout" className='grid gap-12 md:grid-cols-3'>
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