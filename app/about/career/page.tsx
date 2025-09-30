"use client";
import React from "react";
import Image from "next/image";
import { Briefcase } from "react-feather";

const CareerPage = () => {
    const images = [
        "/images/career/1.jpg",
        "/images/career/2.jpg",
        "/images/career/3.jpg",
        "/images/career/4.jpg",
        "/images/career/5.jpg"
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

            {/* Pamflet Lowongan (Grid) */}
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

            {/* Ajakan Melamar */}
            <div className="text-center mt-8">
                <p className="text-gray-700">
                    Tertarik melamar? Kirimkan CV dan lamaranmu ke{" "}
                    <span className="font-semibold text-amber-700">
                        tursinakebab@gmail.com
                    </span>{" "}
                    atau langsung datang ke outlet kami.
                </p>
            </div>
        </div>
    );
};

export default CareerPage;
