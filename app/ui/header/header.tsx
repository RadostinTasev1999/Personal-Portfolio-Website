// import montserrat from '../fonts'
import {navigationLinks} from '@/app/lib/placeholder-data'
import Link from 'next/link';
import NavLinks from './navLinks';
import * as motion from "motion/react-client";


export default function AppHeader() {

    return (
        <nav id="nav" className='fixed top-0 left-0 right-0 z-100 w-full p-0 border-b border-slate-200 shadow-md bg-white'>
            <div id="nav-inner" className='max-w-[1200px] mx-auto flex justify-between items-center pt-[20px] pb-[32px]'>
                {/* Logo */}
                <span id="nav-logo" className='font-bold tracking-tight'>
                    <Link href="/#hero-section">
                        {`<rt.dev />`}
                    </Link>
                </span>
                {/* Hamburger button */}
                <button id="nav-hamburger">
                    <span id="nav-bar"></span>
                    <span id="nav-bar"></span>
                    <span id="nav-bar"></span>
                </button>
                {/* Navigation links */}
                <ul id="nav-links" className='flex flex-row gap-5'>
                    {
                        navigationLinks.map((el) => (
                            <NavLinks key={el.id} name={el.name} link={el.link} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    )

}