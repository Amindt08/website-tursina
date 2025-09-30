/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo/page';
import { headerData } from './Navigation/menuData';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeaderLink from './Navigation/MobileHeaderLink';

const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const signInRef = useRef<HTMLDivElement>(null);
    const signUpRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        setSticky(window.scrollY >= 80);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            signInRef.current &&
            !signInRef.current.contains(event.target as Node)
        ) {
            setIsSignInOpen(false);
        }
        if (
            signUpRef.current &&
            !signUpRef.current.contains(event.target as Node)
        ) {
            setIsSignUpOpen(false);
        }
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            navbarOpen
        ) {
            setNavbarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarOpen, isSignInOpen, isSignUpOpen]);

    useEffect(() => {
        if (isSignInOpen || isSignUpOpen || navbarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isSignInOpen, isSignUpOpen, navbarOpen]);

    return (
        <header className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white font-poppins ${sticky ? " shadow-lg py-3" : "shadow-lg py-2"
            }`}
        >
            <div className='lg:py-0 py-2'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-2 md:px-4">
                    <Logo />
                    <nav className="hidden text-black lg:flex flex-grow items-end gap-8 justify-end mr-16">
                        {headerData.map((item, index) => (
                            <HeaderLink key={index} item={item} />
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="block lg:hidden p-2 rounded-lg"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="block w-8 h-1 bg-amber-800"></span>
                            <span className="block w-8 h-1 bg-amber-800 mt-1.5"></span>
                            <span className="block w-8 h-1 bg-amber-800 mt-1.5"></span>
                        </button>
                    </div>
                </div>
                {navbarOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setNavbarOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Mobile Menu */}
                        <div
                            ref={mobileMenuRef}
                            className="lg:hidden fixed top-0 right-0 h-full w-full max-w-xs z-50 shadow-lg transform transition-transform duration-300 translate-x-0 bg-orange-500"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setNavbarOpen(false)}
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition"
                                >
                                    <i className="ri-close-large-line"></i>
                                </button>
                            </div>

                            <nav className="flex flex-col items-start p-4 text-white space-y-3">
                                {headerData.map((item, index) => (
                                    <MobileHeaderLink
                                        key={index}
                                        item={item}
                                        setNavbarOpen={setNavbarOpen} // 👉 kirim props
                                    />
                                ))}
                            </nav>

                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header
