"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const normalizePath = (url: string) => url.replace(/\/$/, "");

  useEffect(() => {
    const currentPath = normalizePath(path);
    const itemPath = normalizePath(item.href);

    const isLinkActive =
      currentPath === itemPath ||
      (item.submenu?.some(
        (subItem) => normalizePath(subItem.href) === currentPath
      ) ?? false) ||
      currentPath.startsWith(itemPath + "/");

    setIsActive(isLinkActive);
  }, [path, item.href, item.submenu]);

  useEffect(() => {
    const normalizePath = (url: string) => {
      if (!url) return "/";
      return url === "/" ? "/" : url.replace(/\/$/, "");
    };

    const currentPath = normalizePath(path);
    const itemPath = normalizePath(item.href);

    let isLinkActive = false;

    if (itemPath === "/") {
      isLinkActive = currentPath === "/";
    } else {
      isLinkActive =
        currentPath === itemPath ||
        currentPath.startsWith(itemPath + "/") ||
        (item.submenu?.some(
          (sub) => normalizePath(sub.href) === currentPath
        ) ?? false);
    }

    setIsActive(isLinkActive);
  }, [path, item.href, item.submenu]);



  const toggleSubmenu = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <Link
        href={item.href}
        onClick={toggleSubmenu}
        className={`text-lg flex items-center capitalize relative transition-colors duration-200
          ${isActive
            ? "text-orange-600 font-semibold after:absolute after:w-8 after:h-1 after:bg-primary after:rounded-full after:-bottom-1"
            : "text-gray-900 hover:text-orange-600"
          }`}
      >
        {item.label}

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`ml-1 transition-transform ${submenuOpen ? "rotate-180" : ""
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
            const isSubItemActive = normalizePath(path) === normalizePath(subItem.href);

            return (
              <Link
                key={index}
                href={subItem.href}
                onClick={() => setSubmenuOpen(false)}
                className={`block px-4 py-2 rounded-md transition-colors duration-150
                  ${isSubItemActive
                    ? "bg-primary text-gray-900 font-medium"
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
