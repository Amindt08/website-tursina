"use client"
import MenuCard from '@/components/Menu/MenuCard'
import MenuNav from '@/components/Menu/MenuNav'
import React, { useState } from 'react'
import { menuItems } from "@/data/menuItems";
import Image from 'next/image';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredMenu =
        activeCategory === "Semua"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section className='bg-slate-100 min-h-screen'>
            <div className='bg-orange-500 text-white text-center py-20 pt-32'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>Menu Tursina</h1>
                <p className='mt-4 text-lg lg:text-xl'>
                    Nikmati hidangan lezat kami yang dibuat dengan bahan segar dan berkualitas tinggi.
                </p>
            </div>

            <MenuNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <div className='p-6'>
                {filteredMenu.length > 0 ? (
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {filteredMenu.map((item, index) => (
                            <MenuCard
                                key={index}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
                        <p className="text-lg font-normal">Menu belum tersedia di kategori ini</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Menu
