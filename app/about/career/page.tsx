"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase, Camera } from "react-feather";
import { api_endpoints, image_url } from "@/app/api/api";
import axios from "axios";

interface GaleriItem {
    id: number;
    category: string;
    image: string;
    description: string;
}

interface CareerItem {
    id: number;
    image: string;
    description: string;
}

const CareerPage = () => {
    const [galeriItems, setGaleriItems] = useState<GaleriItem[]>([]);
    const [careerItems, setCareerItems] = useState<CareerItem[]>([]);

    useEffect(() => {
        axios.get(api_endpoints.GETGALERI)
            .then(response => {
                const filtered = response.data.data.filter((item: GaleriItem) =>
                    item.category?.toLowerCase() === "galeri tim"
                );
                setGaleriItems(filtered);
            })
            .catch(error => {
                console.error("Error fetching gallery items:", error);
            });
    }, []);

    useEffect(() => {
        axios.get(api_endpoints.GETKARIR)
            .then(response => {
                setCareerItems(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching career items:", error);
            })
    });

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
                {careerItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        <Image
                            src={`${image_url}/karir/${item.image}`}
                            alt={item.description}
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
                    {galeriItems.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            <Image
                                src={`${image_url}/gallery/${item.image}`}
                                alt={item.description}
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
