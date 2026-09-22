import { Statistics } from "@/app/lib/definitions";

export default function StatItem({
    name, stat
}: Statistics ){

    return (
        <>
            <div id="stat-item" className="flex flex-col flex-1 gap-[5px] items-center border rounded-3xl border-sky-500 shadow-md bg p-[10px] bg-[#f5f8ff]">
                <strong className="text-3xl/1 font-extrabold bg-clip-text tracking-[0.03em] basis-full">
                    <span className="text-sm text-blue-500 font-bold">{stat}</span>
                </strong>
                <span className="text-xs text-slate-600 font-bold basis-full">{name}</span>
            </div>
        </>
    );
}
// ${index > 0 ? "md:border-l border-gray-400 pl-[15px]" : "" } 