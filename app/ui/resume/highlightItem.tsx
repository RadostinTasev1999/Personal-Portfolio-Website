import {ItemText} from '@/app/lib/definitions';

export default function HighlightItem({
    text
}:ItemText ) {
    return (
        <li className="list-item text-[14.4px] leading-[22.5px] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-blue-500 before:text-[25px]">
            {text}
        </li>
    );
}