'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  <svg className="w-3 h-3 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

/* -------------------- Hero -------------------- */
export default function Hero() {
  const slides = [
    { 
      image: '/assets/hero-img-4.webp', 
      title: "Professional Moving Services", 
      subtitle: "Seamless relocations across the city"
    },
    { 
      image: '/assets/Hero-img-2.webp', 
      title: "Safe & Secure Packing", 
      subtitle: "Your belongings handled with care"
    },
    { 
      image: '/assets/Hero-img-3.webp', 
      title: "24/7 Available", 
      subtitle: "Moving made easy, anytime"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden bg-black h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">

      {/* Background slider with improved animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            className="w-full h-full object-cover object-center"
            alt={slides[currentSlide].title}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - improved styling */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white transition-all duration-200 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white transition-all duration-200 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>

      {/* Content - improved positioning and animations */}
      <div className="relative z-10 h-full flex items-end pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl">
                  Get Free Quote <ArrowRightIcon />
                </button>

                <a
                  href="tel:+919562763030"
                  className="bg-white hover:bg-gray-100 text-sm sm:text-base text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon /> Call Now
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots indicator - improved positioning */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Rating badge - improved responsive display */}
      <div className="absolute bottom-4 right-4 sm:top-6 sm:right-6 md:bottom-8 md:top-auto flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg">
        <div className="flex">
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <span className="text-white font-semibold text-sm sm:text-base">5.0</span>
      </div>
    </div>
  );
}