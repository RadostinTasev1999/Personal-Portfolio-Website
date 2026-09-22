import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutButtons() {

    return (
        <div id="buttons" className="flex flex-wrap gap-[16px] items-center">
            {/* Download Resume */}

            <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1">
                <Button className="shadow-lg flex gap-[10px] text-[15.2px] border border-gray-300 text-slate-50 bg-sky-500 font-[600px] tracking-[0.152px] py-[13px] px-[28px] border rounded-[10px] hover:bg-sky-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download my resume
                </Button>
            </Link>

            {/* Contact Form */}
            <Link href="/#contact-section">
                <Button className="shadow-lg text-sky-500 py-[13.6px] px-[28px] bg-[#edf2ff] text-[15.2px] border border-gray-300 rounded-[10px] font-semibold tracking-[0.16px] hover:border-sky-500">
                    Contact me
                </Button>
            </Link>
        </div>
    );
}