import Link from 'next/link';
import { NavigationLinks } from '@/app/lib/definitions';

export default function NavLinks({
    name,
    link
}: NavigationLinks){

    return (
        <>
        <li>
            <Link href={link}>{name}</Link>
        </li>
        </>
    )
}