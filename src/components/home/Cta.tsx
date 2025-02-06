
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Inspirations = () => {
    const images = [
        { src: "/images/cat1.png", title: "Inner Peace", category: "Bed Room" },
        { src: "/images/cat2.png", title: "Minimalist Vibes", category: "Dining Room" },
        { src: "/images/cat3.png", title: "Cozy Atmosphere", category: "Living Room" },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#FCF8F3] p-10 mt-16">
            {/* Left Section */}
            <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-bold text-[#3A3A3A] leading-tight">
                    50+ Beautiful rooms inspiration
                </h2>
                <p className="text-[#616161] mt-4 text-lg">
                    Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                </p>
                <Button className="mt-6 bg-[#B58E4D] text-white hover:bg-[#9c773d]">Explore More</Button>
            </div>

            {/* Right Section - Carousel */}
            <div className="w-full md:w-2/3 relative">
                <Carousel className="w-full">
                    <CarouselContent>
                        {images.map((item, index) => (
                            <CarouselItem key={index} className="relative flex justify-center">
                                <div className="relative w-full h-[450px] overflow-hidden rounded-lg">
                                    <Image src={item.src} fill alt={item.title} className="object-cover rounded-lg" />
                                    <div className="absolute bottom-4 left-4 flex items-center bg-white p-4 rounded-lg shadow-md">
                                        <div>
                                            <span className="text-sm text-gray-500">01 - {item.category}</span>
                                            <p className="text-lg font-bold text-gray-800">{item.title}</p>
                                        </div>
                                        <ChevronRight className="text-[#B58E4D] ml-4" size={24} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md" />
                </Carousel>
            </div>
        </div>
    );
};

export default Inspirations;