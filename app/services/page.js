'use client';

import Link from "next/link";
import bgAyur from "@/public/assets/banner.webp";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="w-full bg-white">
            {/* HERO SECTION - UNCHANGED */}
            <section className="relative h-[60vh] min-h-[400px]">
                <Image
                    src={bgAyur}
                    alt="About Best Packers and Movers"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-16">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">Our Services</h1>
                    <p className="mt-4 text-white/90 max-w-2xl text-lg">
                        Comprehensive moving solutions for homes, offices & businesses
                    </p>
                </div>
            </section>

            {/* INTRO SECTION - REDESIGNED */}
            <section className="relative py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-blue-50 px-6 py-2.5 text-sm font-semibold text-blue-700 border border-blue-100">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            Trusted by 10,000+ Happy Customers
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Complete Packers & Movers <span className="text-blue-600">Services in Kerala</span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Best Packers & Movers provide reliable household shifting, office relocation,
                            vehicle transportation, and interstate moving services across Kerala and India.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="font-medium text-green-700">Safe & Secure</span>
                            </div>
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="font-medium text-green-700">On-Time Delivery</span>
                            </div>
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="font-medium text-green-700">Affordable Pricing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES - REDESIGNED WITH CARDS */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block mb-4 text-sm font-bold text-blue-600 tracking-wide uppercase">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Professional Moving Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Comprehensive relocation services tailored to your specific needs
                        </p>
                    </header>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: "🏠",
                                title: "Household Shifting Services",
                                desc: "Complete home relocation including packing, loading, transport, unpacking, and setup.",
                                points: ["Furniture dismantling", "Appliance protection", "Room-wise packing"],
                                color: "blue"
                            },
                            {
                                icon: "🏢",
                                title: "Office Relocation Services",
                                desc: "Efficient office moving with minimal downtime and systematic workspace reinstallation.",
                                points: ["IT equipment handling", "Document safety", "Cubicle reassembly"],
                                color: "purple"
                            },
                            {
                                icon: "🚗",
                                title: "Vehicle Transportation",
                                desc: "Secure car and bike transport using enclosed carriers with insurance coverage.",
                                points: ["GPS tracking", "Damage-free delivery", "Door-to-door service"],
                                color: "green"
                            },
                            {
                                icon: "🏭",
                                title: "Commercial & Industrial Moving",
                                desc: "Heavy machinery, warehouse, and factory relocation with strict safety protocols.",
                                points: ["Machinery handling", "Warehouse shifting", "Plant relocation"],
                                color: "orange"
                            },
                            {
                                icon: "📦",
                                title: "Storage & Warehousing",
                                desc: "Short-term and long-term storage solutions in secure, monitored facilities.",
                                points: ["Climate control", "24/7 CCTV", "Flexible plans"],
                                color: "indigo"
                            },
                            {
                                icon: "🌏",
                                title: "Interstate & All-India Moving",
                                desc: "Reliable long-distance relocation services anywhere in India.",
                                points: ["Pan-India network", "Transit insurance", "Live tracking"],
                                color: "red"
                            },
                        ].map((service, idx) => (
                            <article
                                key={idx}
                                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>

                                <div className="relative">
                                    <div className="text-5xl mb-5">{service.icon}</div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.desc}
                                    </p>

                                    <ul className="space-y-3">
                                        {service.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE - REDESIGNED WITH STATS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose <span className="text-blue-600">Best Packers & Movers?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {`                            Kerala's most trusted name in relocation services with proven excellence
`}                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: "28+", label: "Years Experience", icon: "🏆" },
                            { number: "10K+", label: "Happy Customers", icon: "😊" },
                            { number: "100%", label: "Safe Delivery", icon: "✅" },
                            { number: "24/7", label: "Support", icon: "📞" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🛡️", title: "Transit Insurance", desc: "Complete protection for your belongings" },
                            { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges or surprises" },
                            { icon: "👨‍💼", title: "Trained Professionals", desc: "Skilled and courteous team members" },
                            { icon: "📍", title: "GPS Tracking", desc: "Real-time location updates" },
                            { icon: "🎯", title: "On-Time Delivery", desc: "Punctual and reliable service" },
                            { icon: "🌟", title: "Quality Packing", desc: "Premium materials for safety" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                                <div className="text-3xl">{feature.icon}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS - REDESIGNED WITH TIMELINE */}
            <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <header className="text-center mb-20">
                        <span className="inline-block mb-4 text-sm font-bold text-blue-200 tracking-wide uppercase">
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Simple Moving Process</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            A seamless relocation experience in six easy steps
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                icon: "🔍",
                                title: "Free Survey",
                                desc: "Detailed assessment & accurate quotation with no obligations"
                            },
                            {
                                step: "02",
                                icon: "📋",
                                title: "Planning",
                                desc: "Customized relocation strategy tailored to your needs"
                            },
                            {
                                step: "03",
                                icon: "📦",
                                title: "Expert Packing",
                                desc: "Premium materials & professional handling techniques"
                            },
                            {
                                step: "04",
                                icon: "🚛",
                                title: "Safe Loading",
                                desc: "Careful loading by trained professionals"
                            },
                            {
                                step: "05",
                                icon: "🛣️",
                                title: "Secure Transit",
                                desc: "GPS-enabled transportation with real-time tracking"
                            },
                            {
                                step: "06",
                                icon: "✅",
                                title: "Delivery & Setup",
                                desc: "Unpacking & arrangement at your new location"
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all group"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {item.step}
                                </div>

                                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - REDESIGNED */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 text-sm font-bold text-blue-600 tracking-wide uppercase">
                            Have Questions?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to know about our moving services
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How much do packers and movers cost in Kochi?",
                                a: "Cost depends on factors like distance, volume of goods, packing requirements, and additional services. Contact us for a free personalized quote based on your specific needs."
                            },
                            {
                                q: "Do you provide insurance for goods during transit?",
                                a: "Yes, we offer comprehensive transit insurance coverage to protect your belongings. Insurance details and terms are explained during the booking process."
                            },
                            {
                                q: "How far in advance should I book your services?",
                                a: "We recommend booking at least 3-5 days in advance for local moves and 7-10 days for interstate relocations. However, we also accommodate urgent same-day requests based on availability."
                            },
                            {
                                q: "Can you move delicate items like pianos and antiques?",
                                a: "Absolutely. We have specialized packing materials and trained staff experienced in handling fragile, valuable, and oversized items like pianos, antiques, and artwork."
                            },
                            {
                                q: "What areas do you cover in Kerala?",
                                a: "We provide services across all major cities and districts in Kerala including Kochi, Trivandrum, Calicut, Malappuram, Kottayam, Thrissur, Kannur, Kollam, Palakkad, and more."
                            },
                            {
                                q: "Do you dismantle and reassemble furniture?",
                                a: "Yes, furniture dismantling and reassembly services are included. Our team handles beds, wardrobes, tables, and all modular furniture with care."
                            },
                            {
                                q: "Do you offer storage facilities?",
                                a: "Yes, we have secure warehousing facilities with 24/7 CCTV surveillance for both short-term and long-term storage requirements."
                            },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="group rounded-xl border-2 border-gray-200 bg-white p-6 hover:border-blue-300 transition-colors"
                            >
                                <summary className="cursor-pointer font-bold text-gray-900 flex items-center justify-between text-lg">
                                    <span className="pr-8">{faq.q}</span>
                                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed pl-1">{faq.a}</p>
                            </details>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
                        <p className="text-gray-700 mb-4">Still have questions?</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                        >
                            Contact our support team
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA - REDESIGNED */}
            <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready for a Stress-Free Move?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        {`                        Get a free, no-obligation quote today and experience Kerala's most trusted moving service
`}                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
                        >
                            Get Free Quote
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-3 rounded-full bg-blue-700/50 backdrop-blur border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Now
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-blue-200">
                        ⚡ Quick response • 💯 100% satisfaction guaranteed • 🔒 Secure & insured
                    </p>
                </div>
            </section>
        </main>
    );
}