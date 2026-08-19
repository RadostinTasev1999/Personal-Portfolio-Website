import {
    FiLinkedin,
    FiGithub 
} from "react-icons/fi"

import FooterCopyright from "./footerCopyright"

export default function AppFooter(){

    const socialLinks = [
        {
             id:1,
             url: 'www.linkedin.com/in/radostin-tasev-360a6016b',
             icon: <FiLinkedin/>
        },
        {
             id:2,
             url: 'https://github.com/RadostinTasev1999',
             icon: <FiGithub/>
        }
       
    ]


    return (
        <div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<FooterCopyright />
			</div>
		</div>
    )
}

/*
    <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>Loosely designed in<!-- --> <a href="https://www.figma.com/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Figma (opens in a new tab)">Figma</a> <!-- -->and coded in<!-- --> <a href="https://code.visualstudio.com/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">Visual Studio Code</a> <!-- -->by yours truly. Built with<!-- --> <a href="https://nextjs.org/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)">Next.js</a> <!-- -->and<!-- --> <a href="https://tailwindcss.com/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a>, deployed with<!-- --> <a href="https://vercel.com/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)">Vercel</a>. All text is set in the<!-- --> <a href="https://rsms.me/inter/" class="font-medium text-slate-400" target="_blank" rel="noreferrer noopener" aria-label="Inter (opens in a new tab)">Inter</a> <!-- -->typeface.</p></footer>
*/