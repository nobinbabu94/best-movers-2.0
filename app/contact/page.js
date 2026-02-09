'use client';
import bgAyur from "@/public/assets/Hero-contact.webp";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="w-full bg-white">

      {/* HERO SECTION - Enhanced */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={bgAyur}
          alt="Contact Best Packers and Movers Kochi"
          fill
          priority
          className="object-cover"
        />

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-4 px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white font-semibold text-sm">Available 24/7</span>
          </div>

          <h1 className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-6 max-w-4xl">
            Contact Best Packers & Movers
          </h1>
          
          <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
            Get in touch with trusted packers and movers in Kochi for safe,
            affordable, and stress-free relocation services across Kerala.
          </p>

          {/* Quick contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="tel:+919562763030"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              📞 Call: +91 95627 63030
            </a>
            <a
              href="mailto:bestmoverskochi@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Enhanced */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: CONTACT INFO */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
{`                Let's Plan Your Move Together
`}              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {`Moving doesn't have to be stressful. Whether it's a local move in Kochi
                or a long-distance relocation across India, our expert team is here
                to help.`}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Contact us today for transparent pricing, professional guidance,
                and a personalized moving plan.
              </p>

              {/* CONTACT DETAILS - Enhanced Cards */}
              <div className="space-y-5">

                {/* LOCATION */}
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold text-lg mb-2">Our Office</strong>
                    <p className="text-gray-700 leading-relaxed">
                      PC Cross Rd, Ponnurunny, Chalikkavattom, Vyttila, Kochi, Kerala 682032
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    📞
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold text-lg mb-2">Call Us</strong>
                    <a
                      href="tel:+919562763030"
                      className="block text-gray-700 text-lg hover:text-blue-600 transition-colors font-medium"
                    >
                      +91 95627 63030
                    </a>
                    <a
                      href="tel:+919544080044"
                      className="block text-gray-600 hover:text-blue-600 transition-colors mt-1"
                    >
                      +91 95440 80044
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    ✉️
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold text-lg mb-2">Email Us</strong>
                    <a
                      href="mailto:bestmoverskochi@gmail.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors break-all"
                    >
                      bestmoverskochi@gmail.com
                    </a>
                  </div>
                </div>

                {/* WORKING HOURS */}
                <div className="flex items-start gap-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    ⏰
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold text-lg mb-2">Working Hours</strong>
                    <p className="text-gray-700">Monday - Sunday: 24/7 Available</p>
                    <p className="text-sm text-gray-600 mt-1">{`We're always here when you need us`}</p>
                  </div>
                </div>
              </div>

              {/* MAP - Enhanced */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h3>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3576994385917!2d76.31428457400712!3d9.987282473255483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4e6824eab9%3A0x348efc2a341c9008!2sBest%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1766462680186!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Best Packers and Movers Kochi Location"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: FORM - Enhanced */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -z-10" />
                
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Quick Response
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Send Us a Message
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Have questions or need a moving quote? Fill out the form below and
                    our team will respond within 24 hours.
                  </p>

                  <ContactForm />

                  {/* Trust badges */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">18+</div>
                        <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">10K+</div>
                        <div className="text-xs text-gray-600 mt-1">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">5.0</div>
                        <div className="text-xs text-gray-600 mt-1">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-blue-100 text-lg">
             {` We're committed to making your move smooth and stress-free`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "100% Safe",
                desc: "Damage-free guaranteed relocation"
              },
              {
                icon: "💰",
                title: "Best Prices",
                desc: "Transparent pricing, no hidden costs"
              },
              {
                icon: "⚡",
                title: "Fast Service",
                desc: "Same-day service available"
              },
              {
                icon: "🎯",
                title: "Expert Team",
                desc: "18+ years of experience"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
           {` Ready to Move? Let's Make It Happen!`}
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get your free quote today and experience hassle-free relocation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919562763030"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              📞 Call Now: +91 95627 63030
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}