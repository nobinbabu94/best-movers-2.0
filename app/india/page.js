import Link from "next/link";

export const metadata = {
  title: "All-India Moving Services | Best Packers & Movers",
  description:
    "Best Packers and Movers offers home shifting services, household relocation, and interstate moving from Kochi to anywhere in India.",
  keywords: [
    "all-india moving services",
    "interstate packers and movers",
    "home shifting services india",
    "household relocation across india",
    "relocation services company",
    "interstate moving from kochi",
    "reliable moving services",
  ],
};

export default function IndiaPage() {
  return (
    <main className="w-full bg-white">
      <section className="relative h-[60vh] min-h-[450px] bg-[url('/assets/Hero-img-3.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end text-center px-6 pb-2">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200 mb-4">
            Packers and Movers from Kerala to Anywhere in India
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            All-India Moving Services
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-blue-700 transition">
              Request a Quote
            </Link>
            <Link href="/services" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white font-semibold hover:bg-white/20 transition">
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Kerala to Anywhere in India
            </span>
            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              Packers and Movers from Kerala to All India Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Professional packing and moving services for home and household relocation anywhere in India. Best Packers & Movers specializes in safe home shifting, household relocation, and long-distance moving from Kochi to anywhere in India.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Kerala to India Shifting",
                desc: "Full-service packing, transit, and delivery for safe home relocation to any city in India.",
              },
              {
                title: "Household Moving Services",
                desc: "Careful handling of furniture, appliances, and valuables for delivery anywhere in India.",
              },
              {
                title: "Affordable Moving Company",
                desc: "Transparent pricing and reliable moving services with no hidden charges.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-blue-600 py-14 px-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Need reliable movers for your interstate move?</h3>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed">
              Get the best packers and movers from Kerala to anywhere in India with expert home shifting services and smooth household relocation support.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-blue-700 font-semibold shadow-lg hover:bg-slate-100 transition">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
