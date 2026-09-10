import { ResumeHighlightItems } from "@/app/lib/definitions";
import HighlightItem from './highlightItem';

export default function ResumeHighlight({
    heading,
    items,
    id
}: ResumeHighlightItems) {

    return (
        <div id="resume-highlight" className="border-[1px] border-gray-300 bg-slate-100 shadow-md rounded-[12px] py-[20px] px-[24px] hover:border-sky-500">
            {/* Heading */}
            <h3 className="font-bold mb-[12px]">{heading}</h3>
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