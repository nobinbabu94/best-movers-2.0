import Link from "next/link";

const currentYear = new Date().getFullYear();

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const serviceAreas = [
    "Kochi",
    "Kottayam",
    "Malappuram",
    "Trivandrum",
    "Calicut",
    "Thrissur",
    "Kannur",
    "Kollam",
    "Palakkad",
    "Ernakulam",
];

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Main Footer */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4">
                            Best Packers & Movers
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {`Kerala's most trusted packers and movers since 1996. Professional
              relocation services with 18+ years of experience.`}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/bestpackersandmovers/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-blue-400 transition flex items-center gap-2"
                                    >
                                        <svg
                                            className="w-4 h-4 text-blue-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">

                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">📍</span>
                                <p className="text-gray-400">
                                    PC Cross Rd, Ponnurunny, Chalikkavattom, Vyttila,
                                    Kochi, Kerala 682032
                                </p>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📞</span>
                                <a
                                    href="tel:+919562763030"
                                    className="hover:text-blue-400 transition"
                                >
                                    +91 95627 63030
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">✉️</span>
                                <a
                                    href="mailto:bestmoverskochi@gmail.com"
                                    className="hover:text-blue-400 transition"
                                >
                                    bestmoverskochi@gmail.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">⏰</span>
                                <p className="text-gray-400">24/7 Available</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <h4 className="text-white text-lg font-bold mb-4">
                        We Serve Across Kerala
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {serviceAreas.map((area) => (
                            <span
                                key={area}
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-gray-400">
                        © {currentYear}{" "}
                        <span className="text-white font-semibold">
                            Best Packers & Movers
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-blue-400">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-blue-400">
                            Terms & Conditions
                        </Link>
                        <Link href="/sitemap" className="hover:text-blue-400">
                            Sitemap
                        </Link>
                    </div>

                    <p className="text-gray-400">
                        Website by{" "}
                        <span className="text-blue-400 font-semibold">Nobin</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
