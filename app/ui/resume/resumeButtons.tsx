import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumeButtons() {

    return (
        <div id="resume-buttons" className="mt-2 flex flex-wrap gap-3">
            <Link href="https://www.dropbox.com/scl/fi/z700vjxhg0568977k7mow/Radostin-Tasev-CV-9.20.2026.pdf?rlkey=xid3ivptyqi1zbr96tksh2ynz&st=rd3ah75m&dl=1">
                <Button id="btn-primary" className="inline-flex h-11 items-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white hover:bg-sky-600">                                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download PDF
                </Button>
            </Link>
            <Link href="https://linkedin.com/in/radostin-tasev-360a6016b" >
                <Button id="btn-outline" variant="link" className="h-11 rounded-full border-sky-500 bg-transparent px-6 text-sm font-semibold text-sky-500 hover:bg-sky-50">
                    LinkedIn Profile
                </Button>

            </Link>

        </div>
    );
}