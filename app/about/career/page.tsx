"use client";
import React from "react";
import Image from "next/image";
import { Briefcase, Camera } from "react-feather";

const CareerPage = () => {
    const images = [
        "/images/career/1.jpg",
        "/images/career/2.jpg",
        "/images/career/3.jpg",
        "/images/career/4.jpg",
        "/images/career/5.jpg"
    ];

    const teamDocs = [
        "/images/documentation/image1.jpg",
        "/images/documentation/image2.JPG",
        "/images/documentation/image3.jpg",
        "/images/documentation/image4.JPG",
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 mt-10 pt-20">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="flex justify-center mb-4">
                    <Briefcase className="w-12 h-12 text-amber-700" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-amber-800">
                    Karir di Tursina Kebab
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Bergabunglah bersama <strong>Tursina Kebab</strong> dan jadilah bagian
                    dari tim kami yang penuh semangat, kreatif, dan berkomitmen untuk
                    memberikan pelayanan terbaik kepada pelanggan.
                </p>
            </div>

            {/* Pamflet Lowongan */}
            <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        <Image
                            src={src}
                            alt={`Pamflet Lowongan ${i + 1}`}
                            width={1000}
                            height={1400}
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Dokumentasi Kegiatan Tim */}
            <div className="mt-16">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-3">
                        <Camera className="w-10 h-10 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
                        Galeri Tim
                    </h2>
                    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                        Bukan sekedar tim kami keluarga kebab.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {teamDocs.map((src, i) => (
                        <div
                            key={i}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            <Image
                                src={src}
                                alt={`Dokumentasi Tim ${i + 1}`}
                                width={800}
                                height={600}
                                className="w-full h-60 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Ajakan Melamar */}
            <div className="text-center mt-12">
                <p className="text-gray-700">
                    Tertarik melamar? Kirimkan CV dan lamaranmu ke{" "}
                    <span className="font-semibold text-amber-700">
                        tursinakebab@gmail.com
                    </span>{" "}
                    atau langsung datang ke Head Office kami.
                </p>
            </div>
        </div>
    );
};

export default CareerPage;
