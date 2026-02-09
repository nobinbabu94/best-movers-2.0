import Image from "next/image";
import Link from "next/link";
import bgAyur from "@/public/assets/aboutus-page-hero.webp";
import aboutImg from "@/public/assets/about-bestpackersmovers.webp";

export const metadata = {
  title: "About Us - Best Packers and Movers | 18+ Years of Trusted Service in Kochi",
  description:
    "Learn about Best Packers and Movers – Kerala's trusted relocation company since 1996. 18+ years experience, 10,000+ happy customers.",
};

const stats = [
  { number: "18+", label: "Years Experience" },
  { number: "10K+", label: "Happy Customers" },
  { number: "100%", label: "Safe Delivery" },
  { number: "24/7", label: "Support Available" },
];

const timeline = [
  { year: "1996", title: "Company Founded", desc: "Started as a small local moving service in Kochi" },
  { year: "2005", title: "Pan-Kerala Coverage", desc: "Expanded operations across Kerala" },
  { year: "2012", title: "All-India Network", desc: "Nationwide relocation services launched" },
  { year: "2020", title: "Modern Fleet", desc: "GPS-enabled vehicles & tracking" },
  { year: "2024", title: "Industry Leader", desc: "Recognized as Kerala’s trusted movers" },
];

const values = [
  { icon: "🎯", title: "Customer First", desc: "Every decision prioritizes customer satisfaction" },
  { icon: "🤝", title: "Integrity", desc: "Transparent pricing with no hidden charges" },
  { icon: "⚡", title: "Excellence", desc: "Continuous training and quality checks" },
  { icon: "💪", title: "Reliability", desc: "On-time pickup and delivery" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={bgAyur}
          alt="About Best Packers and Movers"
          fill
          priority
          className="object-cover object-top"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-6">
        <h1 className="text-white text-4xl md:text-4xl font-bold">About Us</h1>
               <p className="mt-4 text-white/90 max-w-2xl text-lg">
            Kerala’s trusted packers & movers since 1996
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-extrabold text-white">{s.number}</div>
              <p className="text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className=" bg-white mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Image
            src={aboutImg}
            alt="Best Packers and Movers Team"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl">
            <div className="text-4xl font-bold">18+</div>
            <p className="text-sm">Years Trusted</p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            WHO WE ARE
          </span>
          <h2 className="text-4xl font-bold text-gray-500">
            Kerala’s Most Trusted <span className="text-blue-600">Packers & Movers</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Best Packers and Movers has been delivering safe and professional relocation
            services across Kerala and India since 1996.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
        OUR JOURNEY
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        18+ Years of Excellence
      </h2>
      <p className="text-gray-600 mt-2">
        From a local moving service to Kerala’s most trusted relocation company
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-blue-200 -translate-x-1/2" />

      <div className="space-y-16">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`relative flex ${
              index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
            }`}
          >
            {/* Dot */}
            <span className="absolute left-1/2 top-6 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2" />

            {/* Card */}
            <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6">
              <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
        OUR VALUES
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        What Drives Us Forward
      </h2>
      <p className="text-gray-600 mt-2">
        The principles that guide every relocation we handle
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="text-4xl mb-4">{value.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {value.title}
          </h3>
          <p className="text-sm text-gray-600">
            {value.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-zinc-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Why Best Packers and Movers is Kerala’s #1 Choice
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        When searching for reliable packers and movers in Kerala or anywhere in India,
        Best Packers and Movers stands out as the trusted leader in the relocation industry.
        Since our establishment in <strong className="text-gray-800">2006</strong>, we have been
        delivering safe, efficient, and professional moving services across Kerala.
      </p>

      <p className="text-gray-600 mb-10 leading-relaxed">
        Our comprehensive range of services includes household shifting, office relocation,
        vehicle transportation, warehousing solutions, and international moving services.
        Whether you are planning a local move within Kerala or relocating across India,
        our expert team ensures a smooth and stress-free experience.
      </p>

      {/* Sub-sections */}
      <div className="space-y-8">

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Our Service Coverage
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We operate across all major cities in Kerala, as well as provide
            nationwide and international relocation services. Our wide service
            network ensures timely, secure, and efficient moving solutions
            wherever you go.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We use premium packing materials, trained professionals, and
            GPS-enabled vehicles to ensure your belongings are handled with
            the utmost care. Customer satisfaction and safety remain our
            highest priorities.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <p className="text-gray-700 font-medium">
          Looking for professional packers and movers in Kerala?
        </p>
        <p className="text-gray-600 mt-1">
          Contact Best Packers and Movers today for a free quote and experience
          stress-free relocation with Kerala’s most trusted moving company.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center">
        <h2 className="text-white text-4xl font-bold mb-6">
          Ready to Move with Kerala’s Best?
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+919562763030"
            className="bg-blue-800 text-white px-8 py-4 rounded-full"
          >
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
