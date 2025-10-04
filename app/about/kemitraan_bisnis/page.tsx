import React from "react";
import Image from "next/image";

const kemitraanBisnisPage = () => {
    const whatsappLink =
        "https://wa.me/6281998410017?text=Halo%20saya%20ingin%20info%20lebih%20lanjut%20tentang%20proposal%20kemitraan";

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 mt-10 pt-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Kemitraan Bisnis
            </h1>
            <p className="text-gray-600 mb-8 text-center">
                Kami membuka peluang kerjasama kemitraan bisnis. 
                Untuk informasi lebih lanjut mengenai proposal kemitraan, 
                silakan hubungi kami melalui WhatsApp.
            </p>

            {/* Foto Outlet */}
            <div className="mb-10">
                <Image
                    src="/images/kemitraan/outlet.jpg"
                    alt="Foto Outlet"
                    width={1200}
                    height={600}
                    className="rounded-xl shadow-md object-cover w-full h-[400px]"
                />
            </div>

            <div className="text-center">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                    <i className="ri-whatsapp-fill text-2xl"></i>
                    Hubungi via WhatsApp
                </a>
            </div>
        </div>
    );
};

export default kemitraanBisnisPage;
