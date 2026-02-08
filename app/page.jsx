import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";
import { services, testimonials } from "./utils/constantFiles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <Hero />

      <section className="relative overflow-hidden bg-white">
        {/* Soft Decorative Blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="relative z-10  px-4 py-20">
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* LEFT – IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />

              <Image
                src={"/assets/moving-best-packers.webp"}
                width={500}
                height={500}
                alt="Best Packers and Movers in Kochi"
                className="relative z-10 h-[320px] w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white/60 md:h-[420px]"
                priority={false}
              />

              {/* Experience Badge */}
              <div className="absolute -top-8 left-1/2 z-20 flex h-36 w-36 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl md:left-8 md:translate-x-0">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold">18</span>
                  <span className="text-xl font-bold text-blue-200">+</span>
                </div>
                <p className="p-2 mt-1 text-center text-[11px] font-semibold uppercase tracking-wide text-blue-100">
                  Years of Excellence
                </p>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 rounded-2xl bg-white px-5 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Verified</p>
                    <p className="text-xs text-gray-600">Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                About Our Company
              </span>

              <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Best Packers and Movers
                <span className="block">
                  in{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Kochi
                  </span>
                </span>
              </h2>

              <p className="border-l-4 border-blue-600 pl-4 text-gray-700 md:text-lg">
                Relocation needs experience, precision, and trust. As a reliable
                <strong className="text-gray-900">
                  {" "}
                  packers and movers company in Kochi
                </strong>
                , we deliver safe, professional, and cost-effective moving
                solutions.
              </p>

              <p className="text-gray-700 md:text-lg">
                Known among the{" "}
                <strong className="text-gray-900">
                  best packers and movers in Kochi
                </strong>
                , we handle local shifting, all-India relocation, and
                international packing services with care.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Safe & Secure", desc: "100% Safety Guaranteed" },
                  { title: "Best Price", desc: "Affordable Rates" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-blue-50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-blue-500/40"
                >
                  Get Free Quote →
                </Link>
                <p className="mt-3 text-xs text-gray-500">
                  ✨ No hidden charges • Quick response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gray-50">
        {/* Decorative shape */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative z-10  px-4 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT – CONTENT */}
            <div className="relative rounded-3xl bg-white p-8 shadow-xl md:p-12">
              <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                Best Packers and Movers in Kochi
              </span>

              <h2 className="font-heading mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Professional Packing & <br />
                Moving Specialists
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-gray-700">
                We are a trusted and experienced packers and movers company in
                Kochi, delivering complete relocation solutions with safety,
                transparency, and care.
              </p>

              {/* FEATURES LIST */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "Home, office, commercial, and industrial relocation services",
                  "High-quality packing materials with expert handling",
                  "Door-to-door delivery with transparent pricing",
                  "Local, all-India, and international moving solutions",
                ].map((text, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-xl font-extrabold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/40"
                >
                  Get Free Quote →
                </Link>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="relative">
              <Image
                src={"/assets/best-packers-service.webp"}
                alt="Professional Packers and Movers in Kochi"
                width={500}
                height={500}
                className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[460px]"
              />

              {/* Accent block */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-3xl bg-blue-200/70" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-24">
        <div className=" px-4">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Our Services
            </span>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Complete Moving Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Professional packing and moving services tailored to your needs in
              Kochi
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="mb-4 w-80 h-60 object-cover"
                />

                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50 py-16">
        <div className="px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a2720] text-white flex items-center justify-center font-semibold">
                    {t.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{t.review}”
                </p>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <span>{t.service}</span>
                  <span>⭐ {t.rating}</span>
                </div>

                <p className="mt-1 text-xs text-gray-400">{t.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
