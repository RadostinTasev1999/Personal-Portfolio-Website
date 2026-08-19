import { TimelineItems } from "@/app/lib/definitions"

export default function TimelineItem({
    timelineItems
}: {
    TimelineItems
    }) {
    return (
        <>
        
            {
                timelineItems.map((item) => (
                     <>
                        <div id="timeline-item" className="relative pb-12 pl-10">
                        <div id="timeline-line" className="absolute left-[5px] top-3 h-full w-px bg-slate-700" />
                        <div id="timeline-dot" className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                        <div id="timeline-period" className="mb-3 font-mono text-sm font-medium text-cyan-400">
                            {item.year}
                            {/* Year */}
                        </div>
                        <div id="timeline-card" className="rounded-xl border border-slate-700 bg-sky-100/50 p-6 shadow-sm">

                            <h3 className="text-xl font-semibold text-black">
                                {item.position}
                                {/* Position */}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-400">
                               {item.company}
                                {/* Company */}
                            </p>

                            <ul id="timeline-points" className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                                {
                                    item.bullets.map((bullet) => (
                                        <>
                                            <li className="relative pl-5">
                                                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                                    {bullet}
                                                {/* Position Bullet */}
                                            </li>
                                        </>
                                        
                                    ))
                                }
                                
                            </ul>
                        </div>
                    </div>
                     </>
                ))
            }
           
        </>
    )
}