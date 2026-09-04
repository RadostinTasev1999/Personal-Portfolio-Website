import { SkillTypes } from "@/app/lib/definitions";

export default function SkillsCategory({
    skill,
}: SkillTypes) {

// skillTypes = { skill: string[] }

// skill = ['JavaScript','TypeScript','HTML','CSS']
    
    return (
        <>
            <span className='border border-gray-300 rounded-full shadow-sm bg-slate-50 px-3 py-1.5 text-sm text-slate-600 hover:border-indigo-600'>
                {skill}
            </span>
        </>
    );
}

/*
     
*/