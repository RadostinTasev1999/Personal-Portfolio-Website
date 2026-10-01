import { SkillTypes } from "@/lib/definitions";

export default function SkillsCategory({
    skill,
}: SkillTypes) {
    
    return (
        <>
            <span className='border-b border-slate-100 py-2.5 text-lg text-slate-800'>
                {skill}
            </span>
        </>
    );
}

/*
     
*/