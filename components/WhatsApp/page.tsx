"use client"
import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = "6282337995558"; 

    const waLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-3 right-5 text-green-500 bg-white rounded-full transition-all duration-300"
        >
            <i className="ri-whatsapp-fill text-6xl md:text-6xl lg:text-7xl"></i>
        </a>
    );
};

export default WhatsAppButton;
