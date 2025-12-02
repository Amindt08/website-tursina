"use client";
import { api_endpoints } from '@/app/api/api';
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

interface LokasiOutletItem {
    id: number;
    location: string;
    link: string;
}

const LokasiOutletPage = () => {
    const [lokasiOutletItems, setLokasiOutletItems] = useState<LokasiOutletItem[]>([]);

    useEffect(() => {
        axios.get(api_endpoints.GETOUTLET)
            .then(response => {
                setLokasiOutletItems(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching outlet locations:", error);
            })
    })

    return (
        <section className='bg-slate-100 min-h-screen'>
            <div className='bg-orange-500 text-white text-center py-20 pt-32'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Lokasi Outlet Tursina Kebab</h1>
                <p>
                    Temukan outlet Tursina Kebab terdekat dari lokasi Anda dan nikmati kebab hangat kami dengan mudah!
                </p>
            </div>
            <div className="max-w-4xl mx-auto p-6 py-16">
                <div className="relative w-full overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253931.35602327294!2d111.3509617146458!3d-7.6030450074984275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stursina%20kebab%20pandean!5e1!3m2!1sid!2sid!4v1758957227397!5m2!1sid!2sid"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-orange-200 pt-20 pb-10 px-4'>
                {lokasiOutletItems.map((item, index) => (
                    <div key={index} className='bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition'>
                        <h3 className=' text-amber-900 mb-2'>
                            {item.location}
                        </h3>
                        <Link
                            href={item.link}
                            target='_blank'
                            className='mt-2 px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition'
                        >
                            Lihat Lokasi
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LokasiOutletPage