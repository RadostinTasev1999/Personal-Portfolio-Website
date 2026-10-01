import {AboutFactsProp} from '@/lib/definitions';
import FactCard from "./FactCard";

export default function AboutFacts({
    aboutFacts
}: AboutFactsProp) {
    return (
        <div id="about-quick-facts" className="flex flex-col border-t border-slate-200">
                                           
            {/* fact1 */}
            {
                aboutFacts.map((fact) => (
                    <FactCard key={fact.id} text={fact.text}>
                        {fact.icon}
                        {/* <Icon... /> */}
                    </FactCard>
                ))
            }
            
        </div>
    );
}