import {ResumeNoteData} from '@/lib/definitions';

export default function ResumeNote({
    resumeNote
}: ResumeNoteData) {

    return (
        <div className="flex items-center gap-2 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

            <p className="font-semibold">
                {resumeNote}
            </p>
        </div>
    );
}