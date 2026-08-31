import { ValueCards } from "@/app/lib/definitions"

export default function ValueCard({
    heading,
    text
}: ValueCards) {

    return (
        <div id="about-value-card" className="box-border block py-[20px] px-[20px] border border-gray-300 rounded-lg bg-slate-50 hover:bg-slate-200">
            <h4 className="text-[14.08px] font-[700] tracking-[0.1408px]">{heading}</h4>
            <p className="text-[13.12px] leading-[20.932px]">
                {text}
            </p>
        </div>
    )
}