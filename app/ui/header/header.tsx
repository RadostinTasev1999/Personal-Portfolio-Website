"use client";

// import montserrat from '../fonts'

import { useState, useCallback } from 'react';
import {navigationLinks} from '@/app/lib/placeholder-data';
import NavLinks from './NavLinks';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';
import MobileLinks from './MobileLinks';


export default function AppHeader() {

    const [menuOpen, setMenuOpen] = useState(false);
    // -> we prevent unnecessary creation of the function on re-renders
    // -> memoized function is created only once and remains the same throughout the component's lifecycle.
    const toggleMenu = useCallback(() => {

        setMenuOpen(state => !state);

    },[]);

    return (        
        <nav id="nav" className='fixed top-0 left-0 right-0 z-100 w-full p-0 border-b border-slate-200/80 bg-white/80 backdrop-blur-md'>
                             {/* fixed top-0 right-0 left-0 z-100 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md */}
            <div id="nav-inner" className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
                                       {/* mx-auto flex max-w-6xl items-center justify-between px-6 py-4 */}
                {/* Nav Logo */}
                <Logo />
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