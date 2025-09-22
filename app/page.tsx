"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Kebab Original Big",
    price: "Rp17.000",
    image: "/images/menu/menu1.jpg",
  },
  {
    name: "Cheese Kebab",
    price: "Rp27.000",
    image: "/images/menu/menu2.jpg",
  },
  {
    name: "Black Beef Kebab",
    price: "Rp30.000",
    image: "/images/menu/menu3.jpg",
  },
  {
    name: "Spicy Kebab",
    price: "Rp35.000",
    image: "/images/menu/menu4.jpg",
  },
];

const galleryItems = [
  { id: 1, src: "/images/galeri/gallery1.jpg", alt: "Gallery 1" },
  { id: 2, src: "/images/galeri/gallery2.jpg", alt: "Gallery 2" },
  { id: 3, src: "/images/galeri/gallery1.jpg", alt: "Gallery 5" },
];

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <section id="home-section" className="flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[700px] pt-10 mt-16 rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <Image
              src="/images/banner1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg"
              width={800}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/banner1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg"
              width={800}
              height={400}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="menu-fav" className="py-10">
        <h1 className="text-4xl font-bold text-center">Menu Unggulan Tursina</h1>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Nikmati hidangan terbaik kami yang dibuat dengan cinta dan bahan segar.
        </p>

        {/* Grid Card */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 ">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 pt-4 px-3"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-orange-600 font-semibold mt-2 text-end"><i className="ri-price-tag-3-line"></i> {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/menu">
            <button className="bg-orange-500 text-white font-semibold py-4 px-6 rounded-full shadow-md hover:bg-transparent hover:border border-orange-600 hover:text-orange-600 transition">
              Lihat Semua Menu
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-6 py-10 bg-orange-100">
        <h1 className="text-4xl font-bold text-center text-orange-600">Galeri Tursina</h1>
        <div className="mx-auto px-4 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 pt-10">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
