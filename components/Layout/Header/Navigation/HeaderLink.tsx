"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // ref untuk deteksi klik luar

  useEffect(() => {
    const isLinkActive =
      path === item.href ||
      (item.submenu?.some((subItem) => path === subItem.href) ?? false);
    setIsActive(isLinkActive);
  }, [path, item.href, item.submenu]);

  // Detect klik di luar submenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };

    if (submenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuOpen]);

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault(); // supaya tidak langsung redirect
      setSubmenuOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <Link
        href={item.href}
        onClick={toggleSubmenu}
        className={`text-lg flex items-center hover:text-orange-600 capitalize relative ${
          isActive
            ? "text-orange-600 after:absolute after:w-8 after:h-1 after:bg-primary after:rounded-full after:-bottom-1 font-semibold"
            : "text-gray-900"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`ml-1 transition-transform ${
              submenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && (
        <div
          className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded-lg py-2 z-50"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => {
            const isSubItemActive = path === subItem.href;
            return (
              <Link
                key={index}
                href={subItem.href}
                onClick={() => setSubmenuOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isSubItemActive
                    ? "bg-primary text-gray-900"
                    : "text-gray-900 hover:bg-primary hover:text-orange-600"
                }`}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
