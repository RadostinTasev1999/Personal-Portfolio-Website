import { NavLinks } from "@/app/lib/definitions";
import Link from "next/link";

export default function MobileLinks({
    navLinks
}: NavLinks){

    return (
        <ul id="mobile-links" className="flex flex-col align-start gap-[0.25rem] absolute top-[100%] right-0 pt-[1rem] pb-[1.5rem] md:hidden">
            {
                navLinks.map((el) => (
                    <li key={el.id} className="font-semibold text-[16px] text-slate-800 px-[10px] py-[2px] border border-slate-400 rounded-xl shadow-md bg-[#f5f8ff] hover:border-sky-500">
                        <Link href={el.link}>{el.name}</Link>
                    </li>
                ))
            }
            
            
        </ul>
    );
}