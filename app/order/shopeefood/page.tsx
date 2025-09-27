"use client";
import Link from "next/link";
import Image from "next/image";

const shopeeFoodLocations = [
    {
        city: "Jl. Trunojoyo, Kota Madiun",
        link: "https://spf.shopee.co.id/9UrpnY5Sxr",
    },
    {
        city: "Jl. Mastrip, Kota Madiun",
        link: "https://spf.shopee.co.id/6fXeQOFJcv",
    },
    {
        city: "Alfamidi Caruban, Madiun",
        link: "https://spf.shopee.co.id/9Urpnclqbr",
    },
    {
        city: "Suromenggolo, Ponorogo",
        link: "https://spf.shopee.co.id/5L2Gq1mLRT",
    },
    {
        city: "Alfamidi, Trunojoyo Ngawi",
        link: "https://spf.shopee.co.id/80320uCbx2",
    },
];

const ShopeeFoodPage = () => {
    return (
        <section className="bg-slate-100 min-h-screen py-10 mt-16">
            <div className="container mx-auto px-4">
                {/* <nav className="text-sm text-gray-600 mb-6">
                    <ol className="list-reset flex">
                        <li>
                            <Link href="/order" className="text-orange-600 hover:underline">
                                Order
                            </Link>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="text-gray-500">GoFood</li>
                    </ol>
                </nav> */}

                <div className="flex justify-center mb-6">
                    <Image
                        src="/images/platform/logo-shopeefood.png"
                        alt="GoFood"
                        width={160}
                        height={160}
                        className="rounded-xl"
                    />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Order Tursina Kebab via ShopeeFood
                </h1>
                <p className="text-gray-700 mb-8 text-center">
                    Pilih lokasi terdekat untuk memesan Tursina Kebab melalui ShopeeFood:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {shopeeFoodLocations.map((loc, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition"
                        >
                            <h3 className="text-lg font-semibold text-amber-900 mb-2">
                                {loc.city}
                            </h3>
                            <Link
                                href={loc.link}
                                target="_blank"
                                className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
                            >
                                Order Via ShopeeFood
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Back Button */}
                <div className="mt-10 text-center">
                    <Link
                        href="/order"
                        className="inline-block bg-gray-300 text-gray-500 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                    >
                        ← Kembali ke Halaman Order
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShopeeFoodPage;
