import { Statistics } from "@/app/lib/definitions"

export default function StatItem({
    name, stat, index
}: Statistics ){

    return (
        <>
            <div id="stat-item" className={`flex flex-col gap-4 flex-1 items-center ${index > 0 ? "border-l border-gray-400" : "" } `}>
                <strong className="text-3xl/1 font-extrabold bg-clip-text tracking-[0.03em] ">
                    <span className="text-sm text-blue-500 font-medium">{stat}</span>
                </strong>
                <span className="text-sm text-slate-600 font-medium">{name}</span>
            </div>
        </>
    )
}