import { SiteLogo } from "@/lib/definitions";
import Link from "next/link";

export default function Logo({
    logo
}:SiteLogo){

    return (
        <span id="nav-logo" className='text-sm font-semibold tracking-tight text-slate-950'>
            <Link href="/#main-container">
                {logo}
            </Link>
        </span>
    );
}