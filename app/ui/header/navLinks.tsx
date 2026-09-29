import Link from 'next/link';
import { NavigationLinks } from '@/app/lib/definitions';

export default function NavLinks({
    name,
    link
}: NavigationLinks){

    return (
        <>
        <li className='text-sm font-medium text-slate-700 py-1.5 px-3 rounded-[8px] hover:text-blue-500'>
            <Link href={link}>{name}</Link>
        </li>
        </>
    );
}