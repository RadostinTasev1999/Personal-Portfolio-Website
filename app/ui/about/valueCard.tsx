import { ValueCards } from "@/app/lib/definitions";

export default function ValueCard({
    heading,
    text
}: ValueCards) {

    return (
        <div id="about-value-card" className="box-border block py-[10px] px-[10px] border border-gray-300 rounded-xl bg-[#edf2ff] shadow-md hover:border-sky-500">
            <h4 className="text-[14.08px] font-semibold tracking-[0.1408px]">{heading}</h4>
            <p className="text-[13.12px] leading-[20.932px] font-normal">
                {text}
            </p>
        </div>
    );
}