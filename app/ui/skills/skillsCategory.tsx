import { SkillTypes } from "@/app/lib/definitions";

export default function SkillsCategory({
    skill,
}: SkillTypes) {

// skillTypes = { skill: string[] }

// skill = ['JavaScript','TypeScript','HTML','CSS']
    
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