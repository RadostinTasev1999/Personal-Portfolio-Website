import { BiographyText } from "@/app/lib/definitions";

export default function Biography({
    text
}: BiographyText) {

    return(
        <p id="hero-bio" className="mt-3 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            {text}
        </p>
    );
}