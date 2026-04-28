'use client';

import { useEffect } from "react";

export default function BlogContent({ posts }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="w-full bg-white">
      <section className="relative h-[55vh] min-h-[420px] bg-[url('/assets/hero-img-4.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200 mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Packer & Mover Advice for Your Kochi Move</h1>
          <p className="max-w-3xl text-base md:text-lg text-slate-200 leading-relaxed">
            Read practical relocation tips, cost guides, and expert advice to make your home shifting services successful.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 rounded-3xl border border-gray-200 bg-blue-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jump to an article</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {posts.map((post) => (
                <button
                  key={post.href}
                  onClick={() => scrollToSection(post.href.replace("#", ""))}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-100"
                >
                  {post.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                id={post.href.replace("#", "")}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{post.summary}</p>
                <button
                  onClick={() => scrollToSection(post.href.replace("#", ""))}
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read More →
                </button>
              </article>
            ))}
          </div>

          <div className="mt-16 space-y-16">
            <section id="choose-reliable-packers">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose Reliable Packers and Movers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Start with verified reviews, ask for itemized quotes, and confirm insurance coverage. A trusted moving company should explain packing materials, transit timelines, and post-move support clearly.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-3">
                <li>Check customer testimonials for home shifting services in Kochi.</li>
                <li>Verify transparent pricing without hidden charges.</li>
                <li>Choose a company that offers protection for furniture and fragile items.</li>
              </ul>
            </section>

            <section id="home-shifting-costs">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost of Home Shifting in Kochi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Home shifting costs depend on packing needs, moving distance, and the volume of goods. Request a customized estimate from packers and movers near you, and compare quotes for the best value.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
