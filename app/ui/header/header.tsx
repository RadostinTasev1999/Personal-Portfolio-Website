"use client";

// import montserrat from '../fonts'

import { useState } from 'react';
import {navigationLinks} from '@/app/lib/placeholder-data';
import Link from 'next/link';
import NavLinks from './navLinks';
import {logo} from '@/app/lib/placeholder-data';
import HamburgerButton from './hamburgerButton';
import MobileLinks from './mobileLinks';


export default function AppHeader() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {

        
         setMenuOpen(state => !state);
    };

    return (
        <nav id="nav" className='fixed top-0 left-0 right-0 z-100 w-full p-0 border-b border-slate-200 shadow-md bg-slate-100'>
            <div id="nav-inner" className='max-w-[1200px] mx-auto flex justify-between items-center pt-[20px] pb-[20px]'>
                {/* Logo */}
                <span id="nav-logo" className='font-bold tracking-tight'>
                    <Link href="/#main-container">
                        {logo}
                    </Link>
                </span>
                {/* Hamburger button */}
                <HamburgerButton toggleMenu={toggleMenu} />
                {/* Mobile Links */}
                {
                    menuOpen && <MobileLinks navLinks={navigationLinks}/>
                }
                {/* Navigation links */}
                <ul id="nav-links" className='hidden md:flex flex-row gap-[0.25rem]'>
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