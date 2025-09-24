import Image from "next/image";

type MenuCardProps = {
    title: string;
    price: number;
    image: string;
    onAdd?: () => void;
    showButton?: boolean;
    detailLink?: string;
};

export default function MenuCard({
    title,
    price,
    image,
    onAdd,
    showButton = true,
    detailLink,
}: MenuCardProps) {
    const handleDetail = () => {
        if (detailLink) {
            window.location.href = detailLink;
        } else {
            console.warn("Detail link tidak tersedia");
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col">
            <Image
                src={image}
                alt={title}
                className="w-full h-24 md:h-64 object-cover"
                width={400}
                height={300}
            />
            <div className="p-4 flex flex-col flex-1">
                <h2 className="text-amber-900 text-sm lg:text-xl font-semibold">{title}</h2>
                <p className="text-orange-500 font-semibold mt-2">
                    Rp{price.toLocaleString("id-ID")}
                </p>

                <div className="mt-4 flex flex-col md:flex-row gap-2">
                    {showButton && onAdd && (
                        <button
                            onClick={onAdd}
                            className="flex-1 py-2 border-2 border-orange-600 text-orange-600 rounded-full font-medium hover:bg-orange-600 hover:text-white transition flex items-center justify-center gap-1"
                        >
                            <i className="ri-shopping-cart-2-line"></i> Tambah
                        </button>
                    )}
                    <button
                        onClick={handleDetail}
                        className="flex-1 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-white hover:border-2 border-orange-600 hover:text-orange-600 transition flex items-center justify-center gap-1"
                    >
                        <i className="ri-eye-fill"></i> Detail
                    </button>
                </div>
            </div>
        </div>
    );
}
