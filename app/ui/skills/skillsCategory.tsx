import { skillTypes } from "@/app/lib/definitions"

export default function SkillsCategory({
    skill,
}: skillTypes) {

// { skillType: ['JavaScript','TypeScript','HTML','CSS'] }
    
    return (
        <>  
            <div id="skill-pils" className='flex flex-wrap gap-2'>
                {
                   skill && skill.map((el,i) => (
                        <>
                            <span key={i + 1} className='rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300'>
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