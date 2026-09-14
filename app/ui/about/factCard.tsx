import { Facts } from "@/app/lib/definitions";

export default function FactCard({
    icon,
    text
}: Facts) {

    const Icon = icon;
    return (
        <div id="about-fact" className="flex items-center gap-[10.4px] border border-gray-300 bg-[#edf2ff] rounded-2xl px-[10px] py-[6px] text-[13.6px] hover:border-sky-500">
            {/* Icon */}
            <Icon />
            <p className="font-semibold text-xs">{text}</p>
        </div>
    );
}