import { SectionHeaders } from "@/app/lib/definitions"

export default function SectionHeader({
    heading, header, text
}: SectionHeaders) {

    
    return (
        <>
            <div id="section-header" className='mb-12 text-center'>
                <div className='mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-blue-500'>
                    {/* inline-flex items-center gap-2 -> this class places Skills horizontally */}
                    <span className='inline-block h-px w-5 bg-blue-500' />
                    <h1 className="text-lg">
                      {heading}
                    </h1>
                    <span className='inline-block h-px w-5 bg-blue-500' />
                </div>
                <h2 className="section-heading font-bold text-2xl">
                    {header}
                </h2>
                <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base'>
                    {text}
                </p>
            </div>
        </>
    )
}