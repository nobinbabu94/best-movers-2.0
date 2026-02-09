"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      
      {/* soft background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.05),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-600">
            About Our Company
          </span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-14 items-start">

          {/* LEFT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
              Best Packers & Movers <br />
              <span className="text-blue-600">in Kochi</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Relocation needs experience, precision, and trust. As a reliable{" "}
              <strong>packers and movers company in Kochi</strong>, we deliver
              professional, safe, and cost-effective moving solutions for homes
              and businesses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Trusted among the{" "}
              <strong>best packers and movers in Kochi</strong>, we manage local
              shifting, all-India relocation, and international packing with
              expert handling and timely delivery.
            </p>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
              >
                Get Free Quote →
              </Link>
              <span className="text-sm text-gray-600">
                No hidden charges • Fast response
              </span>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE + STATS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/assets/moving-best-packers.webp"
                alt="Best Packers and Movers in Kochi"
                width={600}
                height={500}
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* STATS STRIP */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 py-6">
                <p className="text-3xl font-extrabold text-gray-900">18+</p>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 py-6">
                <p className="text-3xl font-extrabold text-gray-900">10k+</p>
                <p className="text-sm text-gray-600 mt-1">Moves Completed</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 py-6">
                <p className="text-3xl font-extrabold text-gray-900">5★</p>
                <p className="text-sm text-gray-600 mt-1">Customer Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
