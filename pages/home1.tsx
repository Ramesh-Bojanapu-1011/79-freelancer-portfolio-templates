import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { Briefcase, Check, Star, User } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home1() {
  return (
    <>
      <Head>
        <title>Freelancer / Portfolio Templates</title>
        <meta
          name="description"
          content="Beautiful freelancer portfolio templates"
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100  caret-transparent">
        <SiteHeadder />

        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                  <Briefcase className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                  <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                    Freelancer-focused
                  </span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
                  Beautiful portfolio templates that win clients
                </h1>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  Modern, responsive templates crafted for freelancers and
                  creatives. Ship a professional portfolio fast and start
                  getting inquiries.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/auth"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border bg-white dark:bg-slate-800"
                  >
                    Contact Sales
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Star className="h-4 w-4 text-amber-500" /> Trusted by
                    freelancers
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-emerald-500" /> Fast to
                    customize
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <User className="h-4 w-4 text-indigo-500" /> SEO-friendly
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                  <Image
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="template preview"
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Features (two-column hero-style block) */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                <Image
                  src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                  alt="Showcase"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                  GET TO KNOW ABOUT US
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Dive into our services and ignite your freelancing
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Collaboratively reinvent user-friendly interfaces and provide
                content while enabling efficient methods of empowerment —
                tailor-made solutions that produce measurable results.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      Dramatically re-imagine value-added systems
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      that empower your freelance offerings and position you for
                      growth.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      Access more than 100+ online templates
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Choose layouts built for portfolios, case studies and
                      service pages.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      Learn the high-impact skills that clients want
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Templates optimized to convert visitors into leads.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  About more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us (replaces portfolio showcase) */}
        <section className="bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: text + bullets */}
              <div>
                <h3 className="text-sm font-medium text-indigo-600">
                  WHY CHOOSE US
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                  We build beautiful, high-converting portfolio templates
                  tailored for freelancers — fast to customize and simple to
                  maintain. Focus on your work while we make you look great.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Business Growth</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Templates designed to convert visitors into clients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Perfect for Freelancers</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Lightweight, focused portfolios that highlight your
                        work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Trusted Designs</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Used by freelancers and agencies to win more clients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">SEO Friendly</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Clean markup and performance-minded templates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://i.postimg.cc/5ym0KZ1Y/avatar.jpg"
                      alt="Author"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sarah Brooks</p>
                      <p className="text-sm text-slate-500">CEO, Stakly</p>
                    </div>
                  </div>

                  <div className="ml-auto text-sm text-slate-500">
                    Call us{" "}
                    <span className="text-indigo-600 font-medium">
                      +1 234-456-7890
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: image with decorative gradient */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 transform rotate-2 rounded-3xl bg-linear-to-tr from-indigo-400 to-pink-400 opacity-30 blur-lg"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                    <Image
                      src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                      alt="Why choose us"
                      width={900}
                      height={900}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach / Four features section (new) */}
        <section className="mx-auto  px-6 lg:px-8 py-20 bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800">
          <div className="text-center">
            <p className="text-sm font-medium text-indigo-600">APPROACH</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
              Unleashing the Potential of Digital Marketing
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A structured process that moves ideas from discovery to strategy,
              implementation and optimization — built to deliver measurable
              growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Discovery",
                desc: "Understand goals and audience to craft the right strategy.",
                icon: Check,
              },
              {
                title: "Strategize",
                desc: "Create a clear plan focused on conversion and growth.",
                icon: Briefcase,
              },
              {
                title: "Implementation",
                desc: "Ship polished templates, pages and assets quickly.",
                icon: Star,
              },
              {
                title: "Analysis & Optimization",
                desc: "Measure results and iterate to continuously improve.",
                icon: User,
              },
            ].map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                >
                  <div className="flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-center">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 text-center">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Template types / Related to theme (new) */}
        <section className="mx-auto bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800   px-6 lg:px-8 py-20">
          <div className="text-center">
            <h3 className="text-sm font-medium text-indigo-600">TEMPLATES</h3>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
              Template types for every freelancer
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose a starting point that fits your work — portfolio, case
              study, agency or landing pages. Each template is optimized for
              clarity and conversion.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Portfolio",
                desc: "Show your best projects with elegant case layouts.",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                title: "Agency",
                desc: "Team pages, services and case studies for agencies.",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                title: "Case Study",
                desc: "Deep-dive project pages that highlight results.",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                title: "Landing",
                desc: "High-converting landing pages for offers and services.",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
            ].map((t, i) => (
              <article
                key={i}
                className="bg-white dark:bg-slate-800 rounded-lg shadow p-4"
              >
                <div className="rounded-md overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    width={600}
                    height={400}
                    className="w-full h-36 object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold">{t.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t.desc}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Preview →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials / Reviews */}
        <section className="mx-auto w-screen    bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800 px-6 lg:px-8 py-16">
          <div className="    ">
            <div className="flex-col flex  justify-center items-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Read reviews,
                <span className="text-indigo-600">ride with confidence.</span>
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-lg font-medium">4.2/5</span>
                  <Star className="h-4 w-4 text-emerald-500" />
                  <span className="ml-1">Trustpilot</span>
                </div>
                <div className="text-sm text-slate-400">
                  Based on 5210 reviews
                </div>
              </div>
            </div>

            {/* Right: horizontal list of cards */}
            <div className="lg:col-span-8">
              <div className="mt-4 -ml-6 lg:ml-0">
                <div className="relative">
                  <div className=" ">
                    <div className="flex gap-6 flex-wrap justify-center px-6 lg:px-0 snap-x   ">
                      {[
                        {
                          name: "Karan",
                          text: "My buying experience is so nice, and received me very politely. Riding experience is also very good.",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          time: "1 week ago",
                        },
                        {
                          name: "Catherine",
                          text: "I love my e-bike and the customer service is excellent. They respond quickly and help with accessories.",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          time: "10 days ago",
                        },
                        {
                          name: "Peter",
                          text: "Visited the store — product selection was great and the team helped with customization.",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          time: "2 weeks ago",
                        },
                      ].map((r, i) => (
                        <div
                          key={i}
                          className="snap-start max-w-sm"
                          style={{ minWidth: 300 }}
                        >
                          <article className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg w-full">
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                              {r.text}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Image
                                  src={r.avatar}
                                  alt={r.name}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <div>
                                  <div className="font-medium">{r.name}</div>
                                  <div className="text-xs text-slate-500">
                                    {r.time}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1 text-emerald-500">
                                {Array.from({ length: 5 }).map((_, s) => (
                                  <Star key={s} className="h-4 w-4" />
                                ))}
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
