import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CtaButtons(){

    return (
        <div id="hero-cta" className="flex flex-row gap-4 mt-4">
            <Link href="/#project-section">
                <Button variant="link" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Projects
                </Button>
            </Link>
            <Link href="/#contact-section">
                <Button variant="link" className="hover:bg-sky-200 text-black font-bold py-2 px-4 rounded-full border border-blue-500">
                    Get in Touch
                </Button>
            </Link>
        </div>
    );
}