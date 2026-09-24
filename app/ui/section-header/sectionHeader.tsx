import { SectionHeaders } from "@/app/lib/definitions";

export default function SectionHeader({
    heading, header, text
}: SectionHeaders) {

    
    return (
        <>
            <div id="section-header" className='mb-12 max-w-2xl'>
                                            
                <div className='mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-500'>
                    {/* inline-flex items-center gap-2 -> this class places Skills horizontally */}
                    <span className='inline-block h-px w-8 bg-blue-500' />
                                 
                    <h1 className="text-lg">
                      {heading}
                    </h1>
                    
                </div>
                {
                    header ? (
                        <h2 className="font-semibold text-3xl tracking-tight text-slate-950 sm:text-4xl">
                            {header}
                        </h2>
                    )   :   null
                }
                {
                    text ? (
                        <p className='mt-3 max-w-2xl text-base leading-7 text-slate-500'>
                            {text}
                        </p>
                    )   :   null
                }
                
            </div>
        </>
    );
}