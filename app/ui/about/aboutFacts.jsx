import { aboutFacts } from "@/app/lib/placeholder-data";
import FactCard from "./FactCard";

export default function AboutFacts() {
    return (
        <div id="about-quick-facts" className="flex flex-col gap-[8px]">
            {/* fact1 */}
            {
                aboutFacts.map((fact) => (
                    <FactCard key={fact.id} icon={fact.icon} text={fact.text} />
                ))
            }
            
        </div>
    );
}