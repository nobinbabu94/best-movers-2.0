import Link from "next/link";

export const metadata = {
  title: "Packers and Movers in Kochi | Best Packers & Movers",
  description:
    "Professional packers and movers in Kochi offering home shifting services, household relocation, and interstate moving from Kerala to anywhere in India.",
  keywords: [
    "packers and movers in kochi",
    "best packers and movers in kochi",
    "home shifting services kochi",
    "household relocation in kochi",
    "interstate packers and movers",
    "relocation services company kochi",
    "reliable moving company near me",
  ],
};

export default function KochiPage() {
  return (
    <main className="w-full bg-white">
      <section className="relative h-[60vh] min-h-[450px] bg-[url('/assets/hero-img-4.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200 mb-4">
            Packers and Movers in Kochi
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Trusted Home Shifting Services in Kochi
          </h1>
          <p className="max-w-3xl text-base md:text-lg text-slate-200 leading-relaxed">
            Best Packers & Movers provides safe and affordable household relocation, packing and moving, and interstate moving services from Kochi to anywhere in India.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-blue-700 transition">
              Get a Free Quote
            </Link>
            <Link href="/services" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white font-semibold hover:bg-white/20 transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Kochi Moving Solutions
            </span>
            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              Best Packers & Movers in Kochi for Every Home Move
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Home shifting, household relocation, and professional packing and moving services for families and businesses in Kochi.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Home Shifting Services",
                desc: "Room-wise packing, secure loading, transport and unpacking for home moves in Kochi.",
              },
              {
                title: "Household Relocation",
                desc: "Reliable household moving services with insurance-backed transit and careful handling.",
              },
              {
                title: "Interstate Moves",
                desc: "Trusted packers and movers from Kerala to anywhere in India with end-to-end support.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-blue-600 py-14 px-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Looking for packers and movers near me?</h3>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              Book Best Packers & Movers in Kochi for reliable home shifting services, household relocation, and affordable moving support.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-blue-700 font-semibold shadow-lg hover:bg-slate-100 transition">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
