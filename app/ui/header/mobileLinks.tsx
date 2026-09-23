import { NavLinks } from "@/app/lib/definitions";
import Link from "next/link";

export default function MobileLinks({
    navLinks
}: NavLinks){

    return (
        <ul id="mobile-links" className="flex flex-col absolute top-full right-0 px-6 py-2 left-0 z-10 border-b border-slate-200 bg-white shadow-sm md:hidden">
                                     
            {
                navLinks.map((el) => (
                    <li key={el.id} className="font-medium text-slate-800 py-3 border-b border-slate-100 text-base last:border-b-0">                                      
                        <Link href={el.link}>{el.name}</Link>
                    </li>
                ))
            }
            
            
        </ul>
    );
}