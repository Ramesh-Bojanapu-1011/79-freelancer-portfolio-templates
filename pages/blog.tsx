import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { FileText } from "lucide-react";

const posts = [
  {
    id: "1",
    slug: "design-systems-that-scale",
    title: "Design systems that scale",
    excerpt: "How to build a maintainable design system for fast-moving teams.",
    date: "2025-09-10",
    tags: ["Design", "UI"],
    author: "Alex Morales",
    category: "Design",
    rating: 4.8,
    level: "Beginner",
    image: "/images/course-illustration-1.jpg",
  },
  {
    id: "2",
    slug: "launching-with-confidence",
    title: "Launching with confidence",
    excerpt:
      "A checklist for launching sites: performance, accessibility and analytics.",
    date: "2025-08-21",
    tags: ["Launch", "Performance"],
    author: "Samira Khan",
    category: "Launch",
    rating: 4.0,
    level: "Intermediate",
    image: "/images/course-illustration-2.jpg",
  },
  {
    id: "3",
    slug: "from-figma-to-production",
    title: "From Figma to Production",
    excerpt:
      "Practical steps to convert designs into reusable components and pages.",
    date: "2025-07-15",
    tags: ["Figma", "Development"],
    author: "Jordan Lee",
    category: "Development",
    rating: 4.6,
    level: "Advanced",
    image: "/images/course-illustration-3.jpg",
  },
];

const clients = [
  {
    name: "Mulan Park",
    role: "Manager",
    image: "/images/client-mulan.jpg",
    alt: "Mulan Park",
  },
  {
    name: "Ecom Co",
    role: "Product",
    image: "/images/client-2.jpg",
    alt: "Ecom Co",
  },
  {
    name: "Studio X",
    role: "Design",
    image: "/images/client-3.jpg",
    alt: "Studio X",
  },
  {
    name: "FinTech Ltd",
    role: "Engineering",
    image: "/images/client-4.jpg",
    alt: "FinTech Ltd",
  },
  {
    name: "Startup Y",
    role: "Founder",
    image: "/images/client-5.jpg",
    alt: "Startup Y",
  },
  {
    name: "Agency Z",
    role: "Studio",
    image: "/images/client-6.jpg",
    alt: "Agency Z",
  },
];

const features = [
  {
    id: 1,
    title: "Perfect UI Design",
    desc: "Design systems and components that look great and scale across projects.",
    accent: "from-pink-300 to-indigo-400",
  },
  {
    id: 2,
    title: "Great CSS Animation",
    desc: "Subtle, performant animations that bring polish without hurting performance.",
    accent: "from-emerald-300 to-sky-400",
  },
  {
    id: 3,
    title: "Fully Secured",
    desc: "Best-practice security defaults and deployment checks so you ship safely.",
    accent: "from-amber-300 to-rose-400",
  },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog — Freelancer Portfolio Templates</title>
        <meta
          name="description"
          content="Articles, guides and case studies about design, development and launching beautiful portfolios."
        />
      </Head>
      <SiteHeadder />

      <main className="max-w-screen min-h-screen mx-auto  bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent  ">
        {/* Section 1: Hero */}
        <section className="text-center min-h-screen flex flex-col justify-center  bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800   ">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Insights, tips and case studies
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Practical articles about design systems, performance, templates and
            launching better portfolios.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
            >
              Work with us
            </Link>
            <a
              href="#latest"
              className="inline-block rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Browse latest
            </a>
          </div>
        </section>

        {/* Section 4: Trending Now (horizontal scroll) */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center flex-col  ">
              <h2 className="text-2xl font-semibold">Trending Now</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Popular reads chosen by our community — quick, practical and
                highly shared.
              </p>
            </div>

            <div className="mt-6 -mx-4 overflow-x-auto py-4">
              <div className="flex gap-4 px-4">
                {posts.map((p) => (
                  <div
                    key={p.id}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <div className="h-48 bg-linear-to-r from-pink-300 to-indigo-400 flex items-center justify-center text-white">
                      <span className="sr-only">{p.title} image</span>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 -mt-8 rounded-xl shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200">
                          {p.category}
                        </span>
                        <span className="text-xs text-slate-500">{p.date}</span>
                      </div>

                      <h3 className="mt-3 font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {p.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={`/${p.slug}`}
                          className="text-sky-600 font-medium"
                        >
                          Read article →
                        </Link>
                        <div className="text-xs text-slate-500">{p.author}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Advantages (image + bullets) */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: text + bullets */}
              <div>
                <h2 className="text-3xl font-semibold">
                  The Advantages of the Upskill Program
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                  Focused mentoring, real-world projects and hiring connections
                  — built to help you learn practical skills that get results.
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      ✓
                    </span>
                    <div>
                      <div className="font-medium">Relevant skill set</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Practical, role-specific skills you can apply
                        immediately.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      ✓
                    </span>
                    <div>
                      <div className="font-medium">Growth mindset</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Continuous feedback and iterative learning to level up
                        faster.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      ✓
                    </span>
                    <div>
                      <div className="font-medium">1-on-1 Mentoring</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Personal guidance from industry practitioners and
                        reviewers.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      ✓
                    </span>
                    <div>
                      <div className="font-medium">Hiring partners</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Connections to hiring teams and opportunities after
                        completion.
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white"
                  >
                    Get started
                  </Link>
                </div>
              </div>

              {/* Right: image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/upsell-illustration.jpg"
                    alt="Upskill program"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Section: Our Features (image-style) */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Our Features</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Core features we put into every template and project — built for
            speed, polish and reliability.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {features.map((f) => (
              <div
                key={f.id}
                className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-left bg-white dark:bg-slate-900 shadow-sm"
              >
                <div className="h-28 w-full rounded-lg flex items-center justify-center mb-4">
                  <div
                    className={`h-24 w-24 rounded-lg bg-linear-to-r ${f.accent} flex items-center justify-center text-white text-2xl`}
                  >
                    {" "}
                  </div>
                </div>

                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center font-semibold text-sky-600">
                    {f.id}
                  </div>
                  <div className="text-xs text-slate-500">Feature {f.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Meet our clients */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Meet our clients</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trusted by startups and established teams — we help clients ship
            beautiful, high-performing portfolios and sites.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {clients.map((c) => (
              <div key={c.name} className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 text-sm font-medium">{c.name}</div>
                <div className="text-xs text-slate-500">{c.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center py-24 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="relative w-full max-w-5xl px-6">
          <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/5 p-12 lg:p-16 text-center">
            <FileText className="h-10 w-10 text-indigo-600 dark:text-teal-400 mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Ready to Ship Faster?
            </h2>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Stop wasting time on styling and start delivering value. Let's
              build your unified UI system.
            </p>

            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-2xl shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.05]"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
};

export default BlogPage;
