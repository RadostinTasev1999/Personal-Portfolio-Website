import { logo } from "@/app/lib/placeholder-data";
import Link from "next/link";

export default function Logo(){

    return (
        <span id="nav-logo" className='font-bold tracking-tight'>
            <Link href="/#main-container">
                {logo}
            </Link>
        </span>
    );
}