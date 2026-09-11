import { SkillTypes } from "@/app/lib/definitions";
import { Badge } from "@/components/ui/badge";

export default function SkillsCategory({
    skill,
}: SkillTypes) {

// skillTypes = { skill: string[] }

// skill = ['JavaScript','TypeScript','HTML','CSS']
    
    return (
        <>
            <Badge variant="outline" className='border border-gray-300 rounded-full shadow-sm bg-slate-50 px-3 py-1.5 text-sm text-slate-600 hover:border-indigo-600'>
                {skill}
            </Badge>
        </>
    );
}

/*
     
*/