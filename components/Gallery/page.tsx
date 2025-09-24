"use client"
import Image from 'next/image';
import React from 'react'
import Masonry from 'react-masonry-css';


const galleryImages = [
    {
        src: '/images/gallery/1.jpg',
        name: 'Grilled Kebab',
        price: 12.99,
    },
    {
        src: '/images/gallery/3.jpg',
        name: 'Chicken Shawarma',
        price: 10.99,
    },
    {
        src: '/images/gallery/6.jpg',
        name: 'Falafel Plate',
        price: 8.99,
    },
    {
        src: '/images/gallery/2.jpg',
        name: 'Falafel Plate',
        price: 8.99,
    },


];

const Gallery = () => {
    return (
        <section className='bg-orange-100 py-2 md:py-6'>
            <div className='container  mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center">
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Our Gallery</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black">
                        Gallery of our cooked food.
                    </h2>
                    <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {/* Map through images */}
                        {galleryImages.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-3xl mb-6 relative group">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                                <div className="w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 p-12 flex flex-col items-start gap-8 justify-end">
                                    {/* <p className='text-white text-2xl'>
                                        <span className='font-semibold'>Name:</span> {item.name}
                                    </p> */}
                                    <div className="flex items-center justify-between w-full">
                                        {/* <p className='text-white text-2xl'>
                                            <span className='font-semibold'>Price:</span> ${item.price}
                                        </p> */}
                                        {/* <Link href="#" className='text-white rounded-full bg-primary border border-primary py-2 px-6 hover:bg-primary/40 hover:backdrop-blur-sm'>
                                            Learn More
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </section>
    )
}

export default Gallery
