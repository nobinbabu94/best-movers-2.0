'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Images (Astro-safe)
// import bgAyur from "/assets/banner.webp";

/* -------------------- Icons -------------------- */
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 5l7 7-7 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

/* -------------------- Floating Container -------------------- */
const FloatingContainer = () => (
  <motion.div
    className="absolute top-1/3 right-24 z-10 hidden md:block pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      y: [0, -20, 0],
      x: [0, -30, 0],
    }}
    transition={{
      opacity: { duration: 1 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      className="opacity-60 blur-[0.4px]"
    >
      <rect x="20" y="30" width="100" height="80" rx="12"
        stroke="white" strokeWidth="2"
        fill="rgba(255,255,255,0.06)" />
      <line x1="20" y1="55" x2="120" y2="55" stroke="white" strokeWidth="1" />
      <line x1="50" y1="30" x2="50" y2="110" stroke="white" strokeWidth="1" />
      <line x1="90" y1="30" x2="90" y2="110" stroke="white" strokeWidth="1" />
    </svg>
  </motion.div>
);

/* -------------------- Hero -------------------- */
export default function Hero() {
  const slides = [
    { image: '/assets/banner.webp', title: "Professional Moving Services", subtitle: "Seamless relocations" },
    { image: '/assets/banner.webp', title: "Safe & Secure Packing", subtitle: "Handled with care" },
    { image: '/assets/banner.webp', title: "24/7 Available", subtitle: "Moving made easy" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Floating animation */}
      {/* {currentSlide === 0 && <FloatingContainer />} */}

      {/* Desktop arrows */}
      <button onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-3 rounded-full text-white">
        <ChevronLeftIcon />
      </button>

      <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-3 rounded-full text-white">
        <ChevronRightIcon />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto md:px-8 px-4 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-white mb-3">
              {slides[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-8">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-sm text-white px-4 py-3  rounded-lg font-bold flex items-center gap-2">
                Get Free Quote <ArrowRightIcon />
              </button>

              <a href="tel:+919562763030"
                className="bg-white text-sm text-gray-900 px-4 py-3 rounded-lg font-bold flex items-center gap-2">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"} rounded-full`} />
        ))}
      </div>

      {/* Rating */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        <span className="text-white font-semibold">5.0</span>
      </div>
    </div>
  );
}
