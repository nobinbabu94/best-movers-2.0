'use client';
import bgAyur from "@/public/assets/Hero-contact.webp";

import ContactForm from "@/components/ContactForm";
// import QuoteForm from "@/react/QuoteForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={bgAyur}
          alt="Contact Best Packers and Movers Kochi"
          fill
          priority
          className="object-cover md:object-top object-top-left"
        />

        {/* <div className="absolute inset-0 bg-black/55" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />


        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-6 text-center">
         <h1 className="text-white text-4xl md:text-4xl font-bold">
            Contact Best Packers & Movers
          </h1>
           <p className="mt-4 text-white/90 max-w-2xl text-lg">
            Get in touch with trusted packers and movers in Kochi for safe,
            affordable, and stress-free relocation services across Kerala.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Let’s Plan Your Move Together
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl">
            Moving doesn’t have to be stressful. Whether it’s a local move in Kochi
            or a long-distance relocation across India, our expert team is here
            to help.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl">
            Contact us today for transparent pricing, professional guidance,
            and a personalized moving plan.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-12 space-y-6">

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong className="block text-slate-900">Our Office</strong>
                PC Cross Rd, Ponnurunny, Chalikkavattom, Vyttila, Kochi, Kerala 682032
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div className="text-lg text-slate-700">
                <strong className="block text-slate-900">Call Us</strong>
                <a
                  href="tel:+919562763030"
                  className="block hover:text-emerald-600 transition"
                >
                  +91 95627 63030
                </a>
                <a
                  href="tel:+919544080044"
                  className="block text-gray-500 hover:text-emerald-600 transition"
                >
                  +91 95440 80044
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <p className="text-lg text-slate-700">
                <strong className="text-slate-900">Email:</strong>
                <a
                  href="mailto:bestmoverskochi@gmail.com"
                  className="ml-2 hover:text-emerald-600 transition"
                >
                  bestmoverskochi@gmail.com
                </a>
              </p>
            </div>

            {/* MAP */}
            <div className="mt-8 rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3576994385917!2d76.31428457400712!3d9.987282473255483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4e6824eab9%3A0x348efc2a341c9008!2sBest%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1766462680186!5m2!1sen!2sin"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Best Packers and Movers Kochi Location"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="space-y-10">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 md:p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Send Us a Message
            </h3>

            <p className="text-lg text-slate-600 mb-8">
              Have questions or need a moving quote? Fill out the form below and
              our team will respond within 24 hours.
            </p>

            <ContactForm />
          </div>
        </div>

      </section>
    </main>
  );
}
