"use client"
import React, { useRef, useState } from 'react'
import Logo from './Logo/page';
import { headerData } from './Navigation/menuData';
import HeaderLink from './Navigation/HeaderLink';
import Link from 'next/link';
import MobileHeaderLink from './Navigation/MobileHeaderLink';

const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);


    return (
        <header className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white font-poppins ${sticky ? " shadow-lg py-3" : "shadow-lg py-2"
            }`}>
            <div className='lg:py-0 py-2'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
                    <Logo />
                    <nav className="hidden text-black lg:flex flex-grow items-end gap-8 justify-end mr-16">
                        {headerData.map((item, index) => (
                            <HeaderLink key={index} item={item} />
                        ))}
                    </nav>
                </div>
                {navbarOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
                )}
                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
                        } z-50`}
                >
                    <div className="flex items-center justify-between p-4">
                        <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
                            <Logo />
                        </h2>

                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
                            aria-label="Close menu Modal"
                        ></button>
                    </div>
                    <nav className="flex flex-col items-start p-4">
                        {headerData.map((item, index) => (
                            <MobileHeaderLink key={index} item={item} />
                        ))}
                    </nav>
                    <div className="mt-4 flex flex-col space-y-4 w-full">
                        <Link
                            href="#"
                            className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                            onClick={() => {
                                setIsSignInOpen(true);
                                setNavbarOpen(false);
                            }}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
