import { valueCards } from "@/app/lib/placeholder-data";
import ValueCard from "./ValueCard";


export default function AboutValues () {

    return (
        <div id="about-values" className="flex max-w-xl flex-col border-t border-slate-200">                                      
            {/* Value card */}
            {
                valueCards.map((value) => (
                    <ValueCard key={value.id} heading={value.heading} text={value.text} />
                ))
            }

        </div>
    );
}