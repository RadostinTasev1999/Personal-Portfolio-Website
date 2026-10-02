import ValueCard from "./ValueCard";
import { AboutValuesData } from "@/lib/definitions";


export default function AboutValues ({
    valueCards
}: AboutValuesData) {

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