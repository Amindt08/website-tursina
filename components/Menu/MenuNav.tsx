type MenuNavProps = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

const MenuNav = ({ activeCategory, setActiveCategory }: MenuNavProps) => {
    const categories = ["Semua", "Paket Bundling", "Unggulan", "Kebab", "Burger", "Maryam", "Minuman", "Topping"];

    return (
        <div className="flex justify-center bg-white shadow-md rounded-lg mx-4 mt-6">
            <nav className="flex space-x-4 p-4 overflow-x-auto">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${activeCategory === cat
                                ? "bg-orange-500 text-white"
                                : "bg-slate-200 text-gray-700 hover:bg-orange-500 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default MenuNav;
