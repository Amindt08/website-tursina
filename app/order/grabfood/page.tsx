"use client";
import Link from "next/link";
import Image from "next/image";

const grabFoodLocations = [
    {
        city: "Pandean, Kota Madiun",
        link: "https://r.grab.com/g/6-20250905_103755_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-CZNXTBBUAP23DA",
    },
    {
        city: "Jl. Mastrip, Kota Madiun",
        link: "https://r.grab.com/g/6-20250905_104030_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-C2BTAAXAERA1N2",
    },
    {
        city: "Alfamidi Caruban, Madiun",
        link: "https://r.grab.com/g/6-20250905_104431_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-C4JKAZEXEX2USE",
    },
    {
        city: "Bragak, Jiwan",
        link: "https://r.grab.com/g/6-20250905_104006_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-CYNWMB2VGREGLT"
    },
    {
        city: "Pangangongan Mangunharjo, Kota Madiun",
        link: "https://r.grab.com/g/6-20250905_104134_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-C4JJWBNHNZLKGA"
    },
    {
        city: "Suromenggolo, Ponorogo",
        link: "https://r.grab.com/g/6-20250905_104348_8bd25b59d6054a62a3011857b5c9f29d_MEXMPS-6-C3ECKEXUCRDAVA",
    }
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
                        src="/images/platform/logo-grabfood.jpg"
                        alt="GoFood"
                        width={160}
                        height={160}
                        className="rounded-xl"
                    />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Order Tursina Kebab via GrabFood
                </h1>
                <p className="text-gray-700 mb-8 text-center">
                    Pilih lokasi terdekat untuk memesan Tursina Kebab melalui GrabFood:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {grabFoodLocations.map((loc, index) => (
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
                                Order Via GrabFood
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
