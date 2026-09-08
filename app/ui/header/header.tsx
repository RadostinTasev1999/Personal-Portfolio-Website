// import montserrat from '../fonts'
import {navigationLinks} from '@/app/lib/placeholder-data';
import Link from 'next/link';
import NavLinks from './navLinks';
import {logo} from '@/app/lib/placeholder-data';



export default function AppHeader() {

    return (
        <nav id="nav" className='fixed top-0 left-0 right-0 z-100 w-full p-0 border-b border-slate-200 shadow-md bg-slate-50'>
            <div id="nav-inner" className='max-w-[1200px] mx-auto flex justify-between items-center pt-[20px] pb-[20px]'>
                {/* Logo */}
                <span id="nav-logo" className='font-bold tracking-tight'>
                    <Link href="/#main-container">
                        {logo}
                    </Link>
                </span>
                {/* Hamburger button */}
                <button id="nav-hamburger">
                    <span id="nav-bar"></span>
                    <span id="nav-bar"></span>
                    <span id="nav-bar"></span>
                </button>
                {/* Navigation links */}
                <ul id="nav-links" className='flex flex-row gap-[0.25rem]'>
                    {
                        navigationLinks.map((el) => (
                            <NavLinks key={el.id} name={el.name} link={el.link} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    );

}