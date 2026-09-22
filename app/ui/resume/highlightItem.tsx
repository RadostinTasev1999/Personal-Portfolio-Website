import {ItemData} from '@/app/lib/definitions';
import Link from 'next/link';


export default function HighlightItem({
    text,
    id,
    url
}:ItemData ) {
    return (
        <li className={`list-item text-sm font-normal leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]`}>
            {text}
            {
                id > 1 && 
                    <Link href={url || ""} className='inline-flex gap-[5px] text-sky-500 pl-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                        </svg>
                    </Link>
            }
        </li>
    );
}
// ${id > 1 ? "after:content-['->Link'] after:text-sky-500 after:pl-[5px]" : ""}