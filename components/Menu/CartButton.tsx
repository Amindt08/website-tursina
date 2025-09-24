"use client";
import React from "react";

type CartButtonProps = {
    itemCount: number;
    onClick: () => void;
};

export default function CartButton({ itemCount, onClick }: CartButtonProps) {
    if (itemCount === 0) return null;

    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition flex items-center gap-2 z-50 animate-bounce"
        >
            <span className="flex items-center gap-2 font-bold">
                Keranjang <i className="ri-shopping-cart-2-line"></i>
                <span className="bg-white text-orange-600 font-bold px-2 py-0.5 rounded-full text-sm shadow">
                    {itemCount}
                </span>
            </span>
        </button>
    );
}
