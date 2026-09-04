import Link from "next/link";
import {
    FiLinkedin,
    FiGithub  
} from "react-icons/fi";

import { BiLogoGmail } from "react-icons/bi";

export default function AppFooter(){

    const socialLinks = [
        {
             id:1,
             url: 'https://linkedin.com/in/radostin-tasev-360a6016b',
             icon: <FiLinkedin/>
        },
        {
             id:2,
             url: 'https://github.com/RadostinTasev1999',
             icon: <FiGithub/>
        },
		{
             id:3,
             url: 'mailto:radostin.tasev22@gmail.com',
             icon: <BiLogoGmail/>
        }
       
    ];


    return (
        <footer id="footer" className="block border-t-[1px] border-gray-300 inset-shadow-sm bg-slate-200 px-[32px] py-[40px] mt-auto relative overflow-hidden">
			<div id="footer-bottom" className="flex flex-wrap justify-around items-center gap-[16px] border-t-[1px] border-gray-300 pt-[24px] text-[15px]">
				<span>
					<p>&copy; {new Date().getFullYear()} Developed by Radostin Tasev</p>
				</span>

				<div id="social-links" className="flex gap-[10px]">
				{
					socialLinks.map((link) => (
						<Link key={link.id} href={link.url} >
							{link.icon}
						</Link>
					))
				}
				</div>
			</div>
		</footer>
    );
}

