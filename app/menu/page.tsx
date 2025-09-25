"use client";
import MenuCard from "@/components/Menu/MenuCard";
import MenuNav from "@/components/Menu/MenuNav";
import React, { useState } from "react";
import { menuItems } from "@/data/menuItems";
import CartButton from "@/components/Menu/CartButton";
import CartModal from "@/components/Menu/CartModal";

type CartItem = {
    title: string;
    price: number;
    image: string;
    qty: number;
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const filteredMenu =
        activeCategory === "Semua"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    const addToCart = (item: { title: string; price: number; image: string }) => {
        setCart((prev) => {
            const exist = prev.find((i) => i.title === item.title);
            if (exist) {
                return prev.map((i) =>
                    i.title === item.title ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
    };

    return (
        <section className="bg-slate-100 min-h-screen">
            {/* Header */}
            <div className="bg-orange-500 text-white text-center py-20 pt-32">
                <h1 className="text-3xl lg:text-5xl font-semibold">Menu Tursina</h1>
                <p className="mt-4 text-lg lg:text-xl">
                    Nikmati hidangan lezat kami yang dibuat dengan bahan segar.
                </p>
            </div>

            {/* Filter Navigasi */}
            <MenuNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* List Menu */}
            <div className="p-6">
                {filteredMenu.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredMenu.map((item, index) => (
                            <MenuCard
                                key={index}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                onAdd={() =>
                                    addToCart({
                                        title: item.title,
                                        price: item.price,
                                        image: item.image,
                                    })
                                }
                                description={item.description}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
                        <p className="text-lg font-normal">
                            Menu belum tersedia di kategori ini
                        </p>
                    </div>
                )}
            </div>

            <CartButton
                itemCount={cart.reduce((acc, i) => acc + i.qty, 0)}
                onClick={() => setIsCartOpen(true)}
            />

            {isCartOpen && (
                <CartModal
                    cart={cart}
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                />
            )}
        </section>
    );
};

export default Menu;
