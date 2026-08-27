import { skillTypes } from "@/app/lib/definitions"

export default function SkillsCategory({
    skill,
}: skillTypes) {

// skillTypes = { skill: string[] }

// skill = ['JavaScript','TypeScript','HTML','CSS']
    
    return (
        <>  
            <div id="skill-pils" className='flex flex-wrap gap-2'>
                {
                   skill && skill.map((el,i) => (
                        <>
                            <span key={i + 1} className='border border-gray-300 rounded-full shadow-sm bg-slate-50 px-3 py-1.5 text-sm text-slate-600 hover:border-indigo-600'>
                                {el}
                            </span>
                        </>
                        
                    ))
                }
                </div>
        </>
    )
}

/*
     
*/