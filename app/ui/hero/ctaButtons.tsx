import Link from "next/link";

export default function CtaButtons(){

    return (
        <div id="hero-cta" className="flex flex-row gap-4 mt-4">
            <Link href="/#project-section" id="btn-primary" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Projects</Link>
            <Link href="/#contact-section" id="btn-outline" className="hover:bg-sky-200 text-black font-bold py-2 px-4 rounded-full border border-blue-500">Get in Touch</Link>
        </div>
    );
}