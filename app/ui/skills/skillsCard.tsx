import SkillsCategory from "./skillsCategory"
import { skillTypes } from "@/app/lib/definitions"
import { skills } from "@/app/lib/placeholder-data"

export default function SkillsCard({
    skillType
}: skillTypes) {

    
    let skillsArr;

    switch (skillType) {

        case "languages":
            skillsArr = skills.languages; // ['JavaScript','TypeScript','HTML','CSS']
            break;
        case "frameworks":
            skillsArr = skills.frameworks
            break;
        case "tools":
            skillsArr = skills.tools
            break;
    }

    return (
        <>
            <div id="skills-category" className='mb-8 p-4 border-2 border-solid rounded-xl bg-sky-100/50'>
                <div id="skill-category-header" className='mb-3 flex items-center gap-3'>
                    <span className='h-2 w-2 rounded-full bg-indigo-500' />
                    <span className='font-mono text-sm font-semibold text-indigo-500 uppercase'>
                        {skillType}
                    </span>
                </div>
                <SkillsCategory skill={skillsArr} />
            </div>
        </>
    )
}