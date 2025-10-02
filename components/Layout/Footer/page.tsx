import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-orange-500 text-white font-poppins">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Logo & Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Tursina Kebab"
                        width={80}
                        height={80}
                        className="w-20 h-auto mb-3"
                        priority
                    />
                    <h1 className="text-xl md:text-3xl font-bold">Tursina Kebab</h1>
                    <p className="text-sm md:text-md mt-1">Kebab Keluarga Modern</p>
                </div>

                {/* Alamat */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Alamat</h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 justify-start">
                            <i className="ri-map-pin-2-fill text-xl"></i>
                            <p className="text-left">
                                Jl. Mayjend Sungkono No 23, Nambangan Lor, Kec. Manguharjo,
                                Kota Madiun, Jawa Timur 63129
                            </p>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <i className="ri-whatsapp-fill text-xl"></i>
                            <p>(62) 823-3799-5558</p>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <i className="ri-mail-fill text-xl"></i>
                            <p>marketingtursinakebab@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Sosial Media */}
                <div className="md:ml-10">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Ikuti Kami</h2>
                    <div className="flex gap-4 justify-center md:justify-start">
                        {[
                            { icon: "ri-instagram-fill", link: "#" },
                            { icon: "ri-facebook-fill", link: "#" },
                            { icon: "ri-tiktok-fill", link: "#" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#EC8439] transition duration-300"
                            >
                                <i className={`${item.icon} text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-amber-800 py-4 mt-6">
                <p className="text-center text-sm opacity-90">
                    © 2025 Tursina Kebab | Powered by IT Tursina Kebab
                </p>
            </div>
        </footer>
    );
};

export default Footer;
