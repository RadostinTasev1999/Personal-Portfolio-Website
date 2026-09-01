import Link from 'next/link';
import { NavigationLinks } from '@/app/lib/definitions';

export default function NavLinks({
    name,
    link
}: NavigationLinks){

    return (
        <>
        <li>
            <Link href={link} className='text-[14.4px] py-[6px] px-[13.6px] rounded-[8px] hover:bg-gray-100 hover:shadow-md'>{name}</Link>
        </li>
        </>
    )
}