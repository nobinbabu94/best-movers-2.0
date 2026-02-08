'use client';

import Link from "next/link";
import bgAyur from "@/public/assets/banner.webp";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxImage, setLightboxImage] = useState(null);

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "household", label: "Household Moving" },
        { id: "office", label: "Office Relocation" },
        { id: "vehicle", label: "Vehicle Transport" },
        { id: "packing", label: "Packing Services" },
        { id: "warehouse", label: "Warehousing" },
    ];

    const galleryItems = [
        {
            id: 1,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 2,
             category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 3,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 4,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 5,
           category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 6,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 7,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 8,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 9,
             category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 10,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 11,
            category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
        {
            id: 12,
             category: "household",
            image: "/assets/loading-truck.webp",
            title: "Complete Relocation",
            description: "moving in Kochi"
        },
    ];

    const filteredItems = selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <main className="w-full bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[400px]">
                <Image
                    src={bgAyur}
                    alt="Best Packers and Movers Gallery"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-16">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">Our Gallery</h1>
                    <p className="mt-4 text-white/90 max-w-2xl text-lg">
                        Showcasing our professional moving services across Kerala
                    </p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="inline-block mb-4 rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-700">
                        📸 Our Work in Action
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Real Projects, Real Results
                    </h2>
                    <p className="text-lg text-gray-600">
                        Browse through our successful relocations and see the quality of our work.
                        Every project reflects our commitment to excellence and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* CATEGORY FILTERS */}
            <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                                    selectedCategory === category.id
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
                                onClick={() => setLightboxImage(item.image)}
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {/* ACTUAL IMAGE */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-200">{item.description}</p>

                                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                            View Full Image
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No images found</h3>
                            <p className="text-gray-600">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Projects Completed", icon: "✅" },
                            { number: "10K+", label: "Items Moved Safely", icon: "📦" },
                            { number: "18+", label: "Years Experience", icon: "🏆" },
                            { number: "100%", label: "Customer Satisfaction", icon: "⭐" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center text-white">
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real feedback from satisfied customers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Kumar",
                                location: "Kochi",
                                rating: 5,
                                text: "Excellent service! They handled my entire home shifting with utmost care. Highly recommended!"
                            },
                            {
                                name: "Priya Menon",
                                location: "Trivandrum",
                                rating: 5,
                                text: "Professional team, on-time delivery, and very reasonable pricing. Best packers in Kerala!"
                            },
                            {
                                name: "Arun Sharma",
                                location: "Calicut",
                                rating: 5,
                                text: "Relocated my office without any issues. Their packing quality is outstanding. Thank you!"
                            }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Experience Our Service?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Join thousands of satisfied customers and get a free quote today
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-2xl transition-all hover:scale-105"
                        >
                            Get Free Quote
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-700/50 backdrop-blur border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
                        onClick={() => setLightboxImage(null)}
                        aria-label="Close lightbox"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image container */}
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxImage}
                            alt="Gallery preview"
                            width={1500}
                            height={1000}
                            className="w-full h-auto max-h-[90vh] rounded-xl object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </main>
    );
}