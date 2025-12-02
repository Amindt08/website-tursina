"use client";
import Image from "next/image";
import Link from "next/link";

const platforms = [
    {
        name: "Website Tursina",
        description: "Pesan langsung melalui website resmi Tursina Kebab.",
        image: "/images/logo.png",
        link: "/order/web",
    },
    {
        name: "GoFood",
        description: "Nikmati Tursina Kebab lewat aplikasi GoFood.",
        image: "/images/platform/logo-gofood-baru.png",
        link: "/order/gofood", 
    },
    {
        name: "ShopeeFood",
        description: "Pesan dengan mudah lewat ShopeeFood.",
        image: "/images/platform/logo-shopeefood.png",
        link: "/order/shopeefood",
    },
    {
        name: "GrabFood",
        description: "Order cepat via GrabFood.",
        image: "/images/platform/logo-grabfood.jpg",
        link: "/order/grabfood", 
    },
];

const OrderPage = () => {
    return (
        <section className="bg-slate-100 min-h-screen">
            <div className="relative w-full h-56 md:h-72">
                <Image
                    src="/images/promo/banner1.jpg"
                    alt="Banner Order"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow pt-20 md:pt-8">
                        Order Tursina Kebab
                    </h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6">
                <h2 className="font-semibold text-2xl mb-6 text-center text-amber-900">
                    Pilih platform favoritmu untuk pesan
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition"
                        >
                            <Image
                                src={platform.image}
                                alt={platform.name}
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h3 className="text-lg font-semibold text-amber-900">
                                {platform.name}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">{platform.description}</p>
                            <Link
                                href={platform.link}
                                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
                            >
                                Order Sekarang
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
