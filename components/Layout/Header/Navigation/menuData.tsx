import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Order", href: "/order" },
    { label: "Membership", href: "/membership" },
    {
        label: "About Tursina",
        href: "/#",
        submenu: [
            { label: "Profil Usaha", href: "/about/profil_usaha" },
            { label: "Lokasi Outlet", href: "/about/lokasi_outlet" },
            { label: "Career", href: "/about/career" },
            { label: "Kemitraan Bisnis", href: "/about/kemitraan_bisnis" },
        ],
    },
];
