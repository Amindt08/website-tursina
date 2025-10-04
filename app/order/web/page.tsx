"use client";
import Image from "next/image";
import Link from "next/link";

const stepsWebsite = [
    {
        step: 1,
        title: "Buka Website Tursina",
        description:
            "Kunjungi halaman resmi pemesanan Tursina Kebab di browser kamu.",
        image: "/images/tutorial/open-website.png",
    },
    {
        step: 2,
        title: "Pilih Menu Favorit",
        description:
            "Telusuri daftar menu dan pilih kebab yang ingin kamu pesan.",
        image: "/images/tutorial/select-menu.png",
    },
    {
        step: 3,
        title: "Masukkan ke Keranjang",
        description:
            "Klik tombol 'Tambah ke Keranjang' untuk memasukkan produk pilihanmu.",
        image: "/images/tutorial/add-to-cart.png",
    },
    {
        step: 4,
        title: "Isi Data Pemesan",
        description:
            "Masukkan nama lengkap dan nomor HP dan pilih metode pengiriman pada form yang tersedia untuk melanjutkan pesanan.",
        image: "/images/tutorial/fill-data.png",
    },
    {
        step: 5,
        title: "Klik Order",
        description:
            "Setelah data terisi, tekan tombol 'Order' untuk menyelesaikan pemesanan.",
        image: "/images/tutorial/click-order.png",
    },
];


const OrderTutorialPage = () => {
    return (
        <section className="bg-slate-50 min-h-screen">
            <div className="relative w-full h-56 md:h-72">
                <div className="absolute inset-0 bg-orange-500 mt-20 py-20 flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow mx-4">
                        Tutorial Order Tursina Kebab
                    </h1>

                    <Link
                        href="/order"
                        className="text-sm mt-4 px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
                    >
                        ← Kembali ke Halaman Order
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
                <h2 className="font-semibold text-2xl mb-8 text-center text-amber-900">
                    Cara Order via Website Tursina
                </h2>

                <div className="space-y-10">
                    {stepsWebsite.map((step) => (
                        <div
                            key={step.step}
                            className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                        >
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={step.image}
                                    alt={`Step ${step.step}`}
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-sm md:text-xl font-semibold text-orange-700">
                                    Step {step.step}: {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderTutorialPage;
