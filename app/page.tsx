"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery/page";
import CallToAction from "@/components/CallToAction/page";
import MenuCard from "@/components/Menu/MenuCard";
import Review from "@/components/Review/page";
import { useEffect, useState } from "react";
import { api_endpoints, image_url } from "./api/api";
import axios from "axios";

interface MenuItem {
  id: number;
  menu_name: string;
  image: string;
  details: string;
  price: number;
  category: string;
  status: string;
}

interface PromoItem {
  id: number;
  promo_name: string;
  image: string;
  status: string;
}

export default function Home() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [promoItems, setPromoItems] = useState<PromoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(api_endpoints.GETPROMO)
      .then(response => {
        const filtered = response.data.data.filter((item: PromoItem) =>
          item.status?.toLowerCase() === 'active')
        setPromoItems(filtered);
      })
      .catch(error => {
        console.error("Error fetching promo items:", error);
      });
  })

  useEffect(() => {
    axios.get(api_endpoints.GETMENU)
      .then(response => {
        const filtered = response.data.data.filter((item: MenuItem) =>
          item.category?.toLowerCase() === "unggulan" &&
          item.status?.toLowerCase() === 'active'
        );
        setMenuItems(filtered);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <section id="home-section" className="flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] pt-10 mt-20"
        >
          {promoItems.length > 0 ? (
            promoItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${image_url}/promo/${item.image}`}   // tanpa slash ganda
                  alt={item.promo_name}
                  className="w-full h-full object-cover"
                  width={600}
                  height={200}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Tidak ada promo tersedia</span>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </section>
      <section id="menu-fav" className="py-10">
        <h2 className="text-3xl lg:text-5xl font-semibold  text-black text-center">Menu Unggulan Tursina</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-center text-black md:text-lg font-normal mt-2 md:mt-4 mb-6 md:mb-10">
          Nikmati hidangan terbaik kami yang dibuat dengan cinta dan bahan segar.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.menu_name}
              price={item.price}
              image={`${image_url}/menu/${item.image}`}
              showButton={false}
              description={item.details}
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
      <Review />
    </div>
  );
}
