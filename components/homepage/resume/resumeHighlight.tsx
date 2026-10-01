import { ResumeHighlightItems } from "@/lib/definitions";
import HighlightItem from "./HighlightItem";

export default function ResumeHighlight({
    heading,
    items,
    id
}: ResumeHighlightItems) {

    return (
        <div id="resume-highlight" className="border-b border-slate-200 py-6 last:border-b-0">
            {/* Heading */}
            <h3 className="mb-3 text-base font-semibold text-slate-950">{heading}</h3>
            {/* list */}
            <ul className="flex flex-col list-none gap-[6.4px] list-outside">
                {
                    items.map((el) => (
                        <HighlightItem key={el.id} text={el.text} id={id} url={el.url}/>
                    ))
                }
                
                
            </ul>
        </div>
    );
}