import { Statistics } from "@/app/lib/definitions";

export default function StatItem({
    name, stat
}: Statistics ){

    return (
        <>
            <div id="stat-item" className="flex flex-col gap-2">
                                        {/* flex flex-col gap-1 */}
                <strong className="text-3xl/1 font-extrabold bg-clip-text tracking-[0.03em] basis-full">
                    <span className="text-4xl font-semibold text-blue-500 tracking-tight">{stat}</span>                                
                </strong>
                <span className="text-sm text-slate-600 basis-full max-w-[12rem] leading-5">{name}</span>
            </div>
        </>
    );
}
// ${index > 0 ? "md:border-l border-gray-400 pl-[15px]" : "" } 