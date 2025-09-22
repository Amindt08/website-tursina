import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
    return (
        < section id="cta" className="bg-orange-500 py-24 text-center text-white mt-10" >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                Siap Nikmati Kebab Tursina?
            </h2>
            <p className="mb-6 text-lg">
                Pesan sekarang dan rasakan sensasi lezatnya kebab kami yang dibuat dari bahan segar pilihan!
            </p>
            <Link href="/order">
                <button className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-100 transition">
                    Pesan Sekarang
                </button>
            </Link>
        </section >
    )
}

export default CallToAction
