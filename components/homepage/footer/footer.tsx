import Link from "next/link";
import { AppFooterData } from "@/lib/definitions";



export default function AppFooter({
    socialLinks
}: AppFooterData){

    
    return (
        <footer id="footer" className="border-t border-slate-200 px-6 py-8 mt-auto relative">
			<div id="footer-bottom" className="flex flex-wrap justify-between items-center gap-4 text-sm mx-auto max-w-6xl text-slate-600">
				<span>
					<p>&copy; {new Date().getFullYear()} Developed by Radostin Tasev</p>
				</span>

				<div id="social-links" className="flex items-center gap-4 text-lg">
                                              {/* flex items-center gap-4 text-lg */}
				{
					socialLinks.map((link) => (
						<Link key={link.id} href={link.url} className="text-slate-600 transition-colors hover:text-blue-500">
							<link.icon />
						</Link>
					))
				}
				</div>
			</div>
		</footer>
    );
}

