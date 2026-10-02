import { Facts } from "@/lib/definitions";

export default function FactCard({
    text,
    children
}: Facts) {

    
    return (
        <div id="about-fact" className="flex items-start gap-3 border-b border-slate-200 py-3.5">
            {/* Icon */}
            <span className="mt-0.5 text-blue-500">
                {children}
            </span>            
            <p className="text-sm leading-6 text-slate-700">{text}</p>
        </div>
    );
}