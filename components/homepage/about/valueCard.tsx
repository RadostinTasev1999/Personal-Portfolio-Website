import {ValueCards} from '@/lib/definitions';

export default function ValueCard({
    heading,
    text
}: ValueCards) {

    return (
        <div id="about-value-card" className="border-b border-slate-200 py-4">                                     
            <h4 className="text-sm font-semibold text-blue-500">{heading}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-600">
                {text}
            </p>
        </div>
    );
}