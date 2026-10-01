import SkillsCategory from "./skillsCategory";
import { SkillTypes } from "@/app/lib/definitions";

export default function SkillsCard({
    skillType,
    skills
}: SkillTypes) {


    return (
        <>
            <div id="skills-category">
                <div id="skill-category-header" className='mb-4 flex items-center gap-3 border-b border-slate-200 pb-3'>
                    <span className='h-1.5 w-1.5 rounded-full bg-blue-500' />                              
                    <span className='font-semibold text-xs tracking-[0.16em] text-blue-500 uppercase'>
                        {skillType}
                    </span>
                </div>
                {/* Skill pills */}
                <div id="skill-pils" className='flex flex-col'>
                   {
                        skills && skills.map((skill) => (
                            <SkillsCategory key={skill.id} skill={skill.name} />
                        ))
                   }

                </div>
            </div>
        </>
    );
}