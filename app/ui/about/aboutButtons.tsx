import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutButtons() {

    return (
        <div id="buttons" className="flex flex-wrap gap-3 items-center">
            {/* Download Resume */}

            <Link href="https://www.dropbox.com/scl/fi/3zn2tpnmoj8azbhvcrcvo/Radostin-Tasev-CV.pdf?rlkey=9dedt9e44bt7jo7idmocgbyk8&st=dwj1r8gu&e=1&dl=1">
                <Button className="h-11 gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white hover:bg-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download my resume
                </Button>
            </Link>

            {/* Contact Form */}
            <Link href="/#contact-section">
                <Button variant="outline" className="h-11 rounded-full border-sky-500 bg-transparent px-6 text-sm font-semibold text-sky-500 hover:bg-sky-50">
                    Contact me
                </Button>
            </Link>
        </div>
    );
}