/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { GalleryWithLightboxProps } from "@/app/types";

export default function GalleryWithLightbox({
    images,
}: GalleryWithLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };

    const nextImage = () => {
        if (currentIndex !== null && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentIndex !== null && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
                Galería de Imágenes
            </h2>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={image.src}
                            alt={`Imagen ${index + 1}`}
                        />
                        <p className="text-sm text-gray-400 mt-2 text-center">
                            {image.caption}
                        </p>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {isOpen && currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            className="max-w-[90vw] max-h-[80vh] rounded-lg"
                            src={images[currentIndex].src}
                            alt={`Imagen ${currentIndex + 1}`}
                        />
                        <p className="text-sm text-gray-300 mt-4 text-center">
                            {images[currentIndex].caption}
                        </p>

                        {/* Botón cerrar */}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>

                        {/* Botones de navegación */}
                        <button
                            className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            onClick={prevImage}
                            disabled={currentIndex === 0}
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute   cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            onClick={nextImage}
                            disabled={currentIndex === images.length - 1}
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
