'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-14 md:bottom-16 lg:bottom-24 right-5 md:right-6 lg:right-8 z-[999]">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    aria-label="scroll to top"
                    className="back-to-top flex h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 cursor-pointer items-center justify-center rounded-full bg-amber-800 text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
                >
                    <i className="ri-arrow-up-s-line text-xl md:text-2xl lg:text-3xl"></i>
                </div>
            )}
        </div>
    );
}
