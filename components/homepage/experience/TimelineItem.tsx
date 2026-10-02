import { TimelineItems } from "@/lib/definitions";
import TimeLinePoints from "./TimelinePoints";
import TimelineButton from "./TimelineButton";

export default function TimelineItem({
    year,
    position,
    company,
    bullets,
    url,
    btnText
}: TimelineItems) {
    return (
        <>
            <div id="timeline-item" className="group relative pb-14 pl-8 last:pb-0">
                                          
                <div id="timeline-line" className="absolute top-3 bottom-0 left-[4px] w-px bg-blue-200 group-last:hidden" />
                                              
                <div id="timeline-dot" className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full bg-blue-500" />
                                            
                <div id="timeline-period" className="mb-2 font-medium text-sm text-blue-500">
                    {year}
                    {/* Year */}
                </div>
                <div id="timeline-card">

                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {position}
                        {/* Position */}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                        <b>{company}</b>
                        {/* Company */}
                    </p>

                    <ul id="timeline-points" className="mt-4 max-w-2xl space-y-2 text-sm leading-6 text-slate-700">                                                   
                        {
                            bullets.map((bullet) => (
                                
                                <TimeLinePoints key={bullet.id} text={bullet.name}/>
                            ))
                        }

                    </ul>
                    {
                        company === 'Software University' && (
                            <TimelineButton url={url} btnText={btnText}/>
                        )

                    }
                    
                </div>
            </div>       
        </>
    );
}