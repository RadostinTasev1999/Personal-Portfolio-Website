import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ResumeButtons() {

    return (
        <div id="resume-buttons" className="flex flex-nowrap gap-[12px] mt-[8px]">
            <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1">
                <Button id="btn-primary" className="inline-flex items-center gap-[8px] py-[13.6px] px-[28px] border-gray-400 bg-sky-400 rounded-[10px] text-[15.2px] text-slate-50 font-[600] shadow-md tracking-[0.16px] hover:bg-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download PDF
                </Button>
            </Link>
            <Link href="https://linkedin.com/in/radostin-tasev-360a6016b" >
                <Button id="btn-outline" variant="link" className="inline-flex items-center py-[13.6px] px-[28px] border border-gray-300 bg-slate-50 rounded-[10px] text-[15.2px] text-sky-500 font-[600] shadow-lg tracking-[0.16px] hover:border-sky-500">
                    LinkedIn Profile
                </Button>

            </Link>

        </div>
    );
}