import SkillsCategory from "./skillsCategory";
import { SkillTypes } from "@/app/lib/definitions";

export default function SkillsCard({
    skillType,
    skills
}: SkillTypes) {


    return (
        <>
            <div id="skills-category" className='mb-8 p-4 border border-gray-300 rounded-xl bg-[#f5f8ff] shadow-md'>
                <div id="skill-category-header" className='mb-3 flex items-center gap-3'>
                    <span className='h-2 w-2 rounded-full bg-indigo-500' />
                    <span className='font-mono text-sm font-semibold text-indigo-500 uppercase'>
                        {skillType}
                    </span>
                </div>
                {/* Skill pills */}
                <div id="skill-pils" className='flex flex-wrap gap-2'>

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