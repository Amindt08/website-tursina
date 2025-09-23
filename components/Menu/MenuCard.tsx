import Image from "next/image";

type MenuCardProps = {
    title: string;
    price: string;
    image: string;
};

export default function MenuCard({ title, price, image }: MenuCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <Image
                src={image}
                alt={title}
                className="w-full h-24 md:h-64 object-cover"
                width={400}
                height={300}
            />
            <div className="p-4">
                <h2 className="text-sm lg:text-xl font-semibold">{title}</h2>
                <p className="text-orange-500 font-semibold mt-2">{price}</p>
            </div>
        </div>
    );
}
