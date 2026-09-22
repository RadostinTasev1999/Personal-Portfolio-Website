import { valueCards } from "@/app/lib/placeholder-data";
import ValueCard from "./ValueCard";


export default function AboutValues () {

    return (
        <div id="about-values" className="box-border grid gap-[16px] grid-cols-[356.5px]">
            {/* Value card */}
            {
                valueCards.map((value) => (
                    <ValueCard key={value.id} heading={value.heading} text={value.text} />
                ))
            }

        </div>
    );
}