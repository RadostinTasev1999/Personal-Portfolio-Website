import { Facts } from "@/app/lib/definitions"

export default function FactCard({
    icon,
    text
}: Facts) {

    const Icon = icon
    return (
        <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-slate-50 hover:bg-slate-200 rounded-2xl px-[16px] py-[9.6px] text-[13.6px] ">
            {/* Icon */}
            <Icon />
            <p>{text}</p>
        </div>
    )
}