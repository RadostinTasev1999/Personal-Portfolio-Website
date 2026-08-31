import { TimeLineItems } from "@/app/lib/definitions"
import TimeLinePoints from "./timelinePoints"

export default function TimelineItem({
    id,
    year,
    position,
    company,
    bullets,
    url
}: TimeLineItems) {
    return (
        <>
            <div id="timeline-item" className="relative pb-12 pl-10">
                <div id="timeline-line" className="absolute left-[5px] top-3 h-full w-px bg-slate-700" />
                <div id="timeline-dot" className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-slate-950" />
                <div id="timeline-period" className="mb-3 font-mono text-sm font-medium text-blue-500">
                    {year}
                    {/* Year */}
                </div>
                <div id="timeline-card" className="rounded-xl border border-gray-300 bg-slate-200 p-6 shadow-md">

                    <h3 className="text-xl font-semibold text-slate-950">
                        {position}
                        {/* Position */}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                        <b>{company}</b>
                        {/* Company */}
                    </p>

                    <ul id="timeline-points" className="mt-4 space-y-2 text-sm leading-6 text-slate-800">
                        {
                            bullets.map((bullet) => (
                                
                                <TimeLinePoints key={bullet.id} text={bullet.name}/>
                            ))
                        }

                    </ul>
                </div>
            </div>       
        </>
    )
}