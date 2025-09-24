"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery/page";
import CallToAction from "@/components/CallToAction/page";
import MenuCard from "@/components/Menu/MenuCard";

const menuItems = [
  {
    title: "Kebab Original Big",
    price: 17000,
    image: "/images/menu/1.jpg",
  },
  {
    title: "Cheese Kebab",
    price: 27000,
    image: "/images/menu/2.jpg",
  },
  {
    title: "Black Beef Kebab",
    price: 30000,
    image: "/images/menu/3.jpg",
  },
  {
    title: "Spicy Kebab",
    price: 35000,
    image: "/images/menu/4.jpg",
  },
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
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] pt-10 mt-20"
        >
          <SwiperSlide>
            <Image
              src="/images/promo/banner1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
              width={800}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/promo/banner2.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
              width={800}
              height={400}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="menu-fav" className="py-10">
        <h2 className="text-3xl lg:text-5xl font-semibold  text-black text-center">Menu Unggulan Tursina</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-center text-black md:text-lg font-normal mt-2 md:mt-4 mb-6 md:mb-10">
          Nikmati hidangan terbaik kami yang dibuat dengan cinta dan bahan segar.
        </p>

        {/* Grid Card */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              showButton={false}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/menu">
            <button className="bg-orange-500 text-white font-semibold py-4 px-6 rounded-full shadow-md hover:bg-transparent hover:border border-orange-600 hover:text-orange-600 transition">
              Telusuri Semua Menu <i className="ri-arrow-right-s-line"></i>
            </button>
          </Link>
        </div>
      </section>
      <CallToAction />
      <Gallery />
    </div>
  );
}
