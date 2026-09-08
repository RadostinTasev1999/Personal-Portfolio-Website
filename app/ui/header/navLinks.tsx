import Link from 'next/link';
import { NavigationLinks } from '@/app/lib/definitions';

export default function NavLinks({
    name,
    link
}: NavigationLinks){

    return (
        <>
        <li className='text-[13.4px] font-semibold text-slate-700 py-[6px] px-[13.6px] rounded-[8px] hover:text-blue-500'>
            <Link href={link}>{name}</Link>
        </li>
        </>
    );
}