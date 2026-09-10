import {ItemData} from '@/app/lib/definitions';
import Link from 'next/link';

export default function HighlightItem({
    text,
    id,
    url
}:ItemData ) {
    return (
        <li className={`list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]`}>
            {text}
            {
                id > 1 && 
                    <Link href={url} className='text-sky-500 pl-[5px]'>{`-> Link`}</Link>
            }
        </li>
    );
}
// ${id > 1 ? "after:content-['->Link'] after:text-sky-500 after:pl-[5px]" : ""}