import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  setNavbarOpen: (open: boolean) => void; // ✅ tambahan props
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, setNavbarOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // ⛔ supaya parent link tidak langsung redirect
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={
          item.submenu
            ? handleToggle // ✅ parent dengan submenu → toggle dropdown
            : () => setNavbarOpen(false) // ✅ parent tanpa submenu → tutup menu
        }
        className="flex items-center justify-between w-full px-2 py-2 text-muted focus:outline-none hover:text-amber-800 hover:bg-gray-100"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
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

      {submenuOpen && item.submenu && (
        <div className="p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={() => setNavbarOpen(false)} // ✅ submenu diklik → auto close menu
              className="block py-2 px-4 text-white hover:text-amber-800 hover:bg-gray-100"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
