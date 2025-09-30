"use client"
import Image from "next/image";
import React, { useState } from "react";


const ProfilUsahaPage = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const images = [
        { src: "image1.jpg", title: "Tim Building - 14 Agustus 2025" },
        { src: "image2.jpg", title: "Initerview" },
        { src: "image3.jpg", title: "Tim Building - 14 Agustus 2025" },
        { src: "image4.jpg", title: "Outlet" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 ">
            {/* Header */}
            <header className="bg-orange-500 text-white py-20 pt-32">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold">Profil Usaha - Tursina Kebab</h1>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 space-y-16 text-justify">
                {/* Tentang */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-amber-800">Tentang Kami</h2>
                    <p className="leading-relaxed">
                        <strong>Tursina Kebab</strong> adalah sebuah usaha kuliner yang telah menjadi Pionerr kebab enak di Kota Madiun sejak tahun 2019. Terkenal sebagai spesial kebab daging sapi yang praktis dan halal, tursina kebab sangat memperhatikan kebutuhan pelanggan. Hal tersebut terus diupayakan dari proses pemilihan bahan baku berkualitas seperti menggunakan daging kebab sapi asli berkualitas premium, selada berjenis lettuce segar dari petani sayur, dan kualitas bahan pelengkap lainnya hingga standarisasi proses operasional.
                        Outlet tursina kebab telah tersebar di Kota Madiun, Kabupaten Madiun, Ponorogo, Magetan, dan akan terus berekspansi lebih luas di Jawa Timur hingga menjadi kebab terFavorit di tahun 2028.
                    </p>
                </section>

                {/* Visi Misi */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-amber-800">Visi & Misi</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Visi</h3>
                            <p>
                                Menjadi outlet kebab yang terfavorit se-Karesidenan Madiun di Tahun 2028
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Misi</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li> <strong>Human Resource:</strong> Membangun tim yang solid, inovatif, dan cekatan.</li>
                                <li> <strong>Operational:</strong> Membangun sistem operasional yang efisien, praktis dan tersentralisasi.</li>
                                <li> <strong>Marketing:</strong> Memberikan pelayanan yang terbaik untuk konsumen, karyawan & lingkungan.</li>
                                <li> <strong>Finance:</strong> Menjaga nilai - nilai yang selalu bertumbuh untuk tercapainya tujuan bersama</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Culture */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-amber-800">Culture</h2>

                    {/* Innovative */}
                    <div className="flex items-start gap-4">
                        <i className="ri-lightbulb-flash-line text-gray-400 text-3xl"></i>
                        <p className="leading-relaxed">
                            <strong>Innovative</strong> <br />
                            Tursina Kebab berkomitmen menjadi pemimpin dalam industri kuliner dengan menumbuhkan budaya
                            inovasi yang kuat. Kami mendorong semua tim berpikir kreatif untuk menghasilkan produk, layanan,
                            serta proses yang baru dan lebih baik. Semangat inovatif ini mendorong kami untuk selalu mengembangkan
                            produk yang praktis dan lezat, menciptakan pengalaman pelanggan yang tak terlupakan, dan mengoptimalkan
                            operasional kami untuk mencapai efisiensi maksimal.
                        </p>
                    </div>

                    {/* Adaptive */}
                    <div className="flex items-start gap-4 pt-6">
                        <i className="ri-refresh-line text-gray-400 text-3xl"></i>
                        <p className="leading-relaxed">
                            <strong>Adaptive</strong> <br />
                            Merespon perubahan dan tantangan di industri kuliner dengan cepat dan tepat. Fleksibilitas ini tercermin
                            dalam bagaimana kami menyesuaikan menu dengan tren terkini, menanggapi masukan pelanggan dengan sigap,
                            dan mengembangkan strategi bisnis yang inovatif untuk menghadapi persaingan.
                        </p>
                    </div>

                    {/* Sustainable */}
                    <div className="flex items-start gap-4 pt-6">
                        <i className="ri-leaf-line text-gray-400 text-3xl"></i>
                        <p className="leading-relaxed">
                            <strong>Sustainable</strong> <br />
                            Kesuksesan jangka panjang dicapai dengan memperhatikan keseimbangan antara profit, planet, dan manusia.
                            Oleh karena itu, kami menerapkan praktik-praktik ramah lingkungan di seluruh operasional, seperti mengurangi
                            limbah, menggunakan bahan-bahan berkelanjutan, dan mendukung komunitas lokal. Kami yakin bahwa dengan cara ini,
                            Tursina Kebab tidak hanya menyajikan makanan lezat, tetapi juga berkontribusi pada masa depan yang lebih baik.
                        </p>
                    </div>
                </section>

                {/* Galeri */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-amber-800">Galeri</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Setiap momen bersama <strong>Tursina Kebab</strong> adalah cerita. Yuk, intip galeri kami
                        yang penuh kehangatan, mulai dari dapur hingga senyum pelanggan yang menikmati kebab favoritnya.
                    </p>

                    {/* Grid gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setSelectedImg(`/images/documentation/${img.src}`);
                                    setSelectedTitle(img.title);
                                }}
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src={`/images/documentation/${img.src}`}
                                        alt={img.title}
                                        className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                                        width={800}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal */}
                    {selectedImg && (
                        <div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                            onClick={() => {
                                setSelectedImg(null);
                                setSelectedTitle(null);
                            }}
                        >
                            <div className="relative max-w-3xl w-full text-center">
                                <Image
                                    src={selectedImg}
                                    alt={selectedTitle || "Detail Gambar"}
                                    width={1200}
                                    height={1600}
                                    className="rounded-lg shadow-lg mx-auto"
                                />
                                {selectedTitle && (
                                    <p className="mt-4 text-lg text-white font-semibold">{selectedTitle}</p>
                                )}
                                {/* Tombol close */}
                                <button
                                    className="absolute top-2 right-2 bg-white/80 rounded-full p-2 hover:bg-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImg(null);
                                        setSelectedTitle(null);
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default ProfilUsahaPage;
