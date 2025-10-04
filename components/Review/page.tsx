"use client";
import React, { useEffect } from "react";

const reviewVideos = [
    {
        src: "https://www.instagram.com/reel/DNadMy7TaBT/",
        title: "Customer Review 1",
        description: "Great food and excellent service!",
    },
    {
        src: "https://www.instagram.com/reel/DNxxJShQj6T/",
        title: "Customer Review 2",
        description: "The best kebab in town!",
    },
    {
        src: "https://www.instagram.com/reel/DO7rVa8k0JD/",
        title: "Customer Review 3",
        description: "Delicious and affordable!",
    },
    {
        src: "https://www.instagram.com/reel/DPBbrKoAVgS/",
        title: "Customer Review 4",
        description: "Will definitely come back for more!",
    },
    {
        src: "https://www.instagram.com/reel/DPOAmjnD_X-/",
        title: "Customer Review 5",
        description: "Highly recommend to everyone!",
    },
    {
        src: "https://www.instagram.com/reel/DO0O7LMD_at/",
        title: "Customer Review 6",
        description: "A must-try for kebab lovers!",
    },
];

const Review = () => {
    // Jalankan Instagram embed script setelah render
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="bg-slate-100 py-6 md:py-10">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                {/* Header */}
                <div className="text-center">
                    <p className="text-black text-lg font-normal mb-3 tracking-widest uppercase">
                        Our Video
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black">
                        Review from our customers.
                    </h2>
                    <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid Video */}
                <div className="px-2 md:px-6 lg:px-12">
                    <div className="my-6 mx-0 md:mx-0 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {reviewVideos.map((video, index) => (
                            <blockquote
                                key={index}
                                className="instagram-media rounded-3xl overflow-hidden"
                                data-instgrm-permalink={video.src}
                            >
                                <p>{video.description}</p>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Review;
