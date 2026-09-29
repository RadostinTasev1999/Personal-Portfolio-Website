import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaButtons(){

    return (
        <div id="hero-cta" className="flex flex-row flex-wrap gap-3 mt-4">
            <Link href="/#project-section">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 h-11 rounded-full">
                    View Projects
                </Button>
            </Link>
            <Link href="/#contact-section">
                <Button className="text-slate-950 font-semibold text-sm px-6 h-11 rounded-full border border-blue-500 bg-transparent hover:bg-blue-50">
                    Get in Touch
                </Button>
            </Link>
        </div>
    );
}