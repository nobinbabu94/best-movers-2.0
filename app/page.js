import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";
import { services, testimonials } from "./utils/constantFiles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />

      {/* About Section - Enhanced Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
            
            {/* LEFT – IMAGE */}
            <div className="relative order-2 lg:order-1">
              {/* Background decorative shape */}
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={"/assets/moving-best-packers.webp"}
                  width={600}
                  height={500}
                  alt="Best Packers and Movers in Kochi"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  priority={false}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold">18</span>
                  <span className="text-2xl font-bold text-blue-200">+</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                  Years Experience
                </p>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Verified Partner</p>
                    <p className="text-xs text-gray-600">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  About Our Company
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Best Packers and Movers in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Kochi
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-5">
                Relocation needs experience, precision, and trust. As a reliable
                <strong className="text-gray-900"> packers and movers company in Kochi</strong>, 
                we deliver safe, professional, and cost-effective moving solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Known among the{" "}
                <strong className="text-gray-900">best packers and movers in Kochi</strong>, 
                we handle local shifting, all-India relocation, and international packing 
                services with care.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { 
                    icon: "🛡️",
                    title: "Safe & Secure", 
                    desc: "100% Safety Guaranteed" 
                  },
                  { 
                    icon: "💰",
                    title: "Best Price", 
                    desc: "Affordable Rates" 
                  },
                  { 
                    icon: "⚡",
                    title: "Fast Service", 
                    desc: "Quick Delivery" 
                  },
                  { 
                    icon: "🎯",
                    title: "Professional Team", 
                    desc: "Expert Handling" 
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white border border-gray-100 p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Free Quote →
                </Link>
                <p className="mt-4 text-sm text-gray-600">
                  ✨ No hidden charges • Quick response within 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
            
            {/* LEFT – CONTENT */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                Professional Packing & Moving Specialists
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-10">
                We are a trusted and experienced packers and movers company in Kochi, 
                delivering complete relocation solutions with safety, transparency, and care.
              </p>

              {/* Features List */}
              <div className="space-y-5">
                {[
                  "Home, office, commercial, and industrial relocation services",
                  "High-quality packing materials with expert handling",
                  "Door-to-door delivery with transparent pricing",
                  "Local, all-India, and international moving solutions",
                ].map((text, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1.5 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Free Quote →
                </Link>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={"/assets/best-packers-service.webp"}
                  alt="Professional Packers and Movers in Kochi"
                  width={600}
                  height={500}
                  className="w-full h-[400px] md:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-400/20" />
              <div className="absolute -top-8 -right-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Our Services
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Complete Moving Solutions
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
              Professional packing and moving services tailored to your needs in Kochi
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Testimonials
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            
            <p className="text-lg text-gray-600">
              Trusted by thousands of happy customers across Kochi
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">{t.rating}</span>
                </div>

                {/* Review */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-blue-600">{t.service}</p>
                  <p className="text-xs text-gray-400 mt-1">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Move? Get Your Free Quote Today!
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Professional moving services at affordable prices. No hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Quote →
            </Link>
            <a
              href="tel:+919562763030"
              className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-blue-900 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
            >
              📞 Call: +91 95627 63030
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}