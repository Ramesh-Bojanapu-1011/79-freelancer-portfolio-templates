import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const servicesData = [
  {
    slug: "design",
    title: "Design Systems & UI",
    desc: "Pixel-perfect visual systems and UI components for portfolios.",
  },
  {
    slug: "development",
    title: "Frontend Development",
    desc: "Accessible, performant frontends built with modern tooling.",
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance",
    desc: "Optimization, semantic markup and best-practices for speed.",
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    desc: "Logo systems, type, and cohesive brand guidelines.",
  },
  {
    slug: "templates",
    title: "Portfolio Templates",
    desc: "Ready-made templates you can customize and launch quickly.",
  },
  {
    slug: "support",
    title: "Setup & Support",
    desc: "Pro onboarding and prioritized support for busy freelancers.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services — Freelancer / Portfolio Templates</title>
        <meta
          name="description"
          content="Services we offer — design, development, templates and support for freelancers."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent">
        {/* Hero */}
        <section className="bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm text-indigo-600 font-medium">
                  SERVICES
                </div>
                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
                  Services for freelancers who want to ship faster
                </h1>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  From design systems to SEO and deployment support — we provide
                  focused services that let you show your work and win clients.
                </p>

                <div className="mt-8 flex   items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    Work with us
                  </Link>
                  <Link
                    href="#services"
                    className="text-indigo-600 hover:underline"
                  >
                    Explore services
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                  <img
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="portfolio sample"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">What we do</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose a focused service or book a combined package — each service
              has its own detail page with scope and pricing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => (
              <div
                key={s.slug}
                className="group relative block overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-lg transition-shadow"
                aria-label={`Learn more about ${s.title}`}
              >
                <div className="p-6      items-center">
                  <div className=" flex flex-col ">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 rounded-lg w-12 h-12 flex items-center justify-center bg-linear-to-br from-indigo-500 to-indigo-700 text-white shadow-sm">
                        <span className="font-semibold">
                          {s.title.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {s.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {s.desc}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                        Popular
                      </span>
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600">
                        Custom
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/services/${s.slug}`}
                  className="absolute bottom-4 right-4 text-indigo-600   text-sm"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Four extra sections related to the theme: Process, Templates showcase, Pricing, FAQ/CTA */}
        {/* NEW: Theme & customization */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Theme & customization
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl">
                Ship a polished, on-brand portfolio quickly — we provide theme
                customizations, component theming and a style system so your
                site matches your voice.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Color systems</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Custom palettes, accessible contrasts and easy theme
                      swaps.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Typography</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Type scale, pairing and fine-tuned spacing for readable
                      case studies.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 6h18M3 12h18M3 18h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      Responsive layouts
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Grid and card rules that keep your work looking great on
                      all screens.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 3v18M3 12h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Dark mode</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Well-tested color tokens and prefers-reduced-motion
                      friendly transitions.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5 bg-white dark:bg-slate-800">
                <img
                  src="https://picsum.photos/seed/theme-preview/1200/800"
                  alt="theme preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Theme preview
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Preview a theme with your colors and brand — then we’ll
                    apply it across components and pages.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Customize a theme
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1) Process - refreshed timeline look */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Our process</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A short, repeatable process to get you from brief to a live
              portfolio.
            </p>
          </div>

          <div className="mt-10 relative">
            {/* connector line for large screens */}
            <div className="hidden lg:block absolute left-12 right-12 top-12 h-0.5 bg-slate-100 dark:bg-slate-700" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Kickoff",
                  desc: "Discovery, goals and content planning.",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  num: "02",
                  title: "Design",
                  desc: "Components, layouts and visual polish.",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2l4 8h6l-5 4 2 8L12 17l-7 5 2-8-5-4h6l4-8z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  num: "03",
                  title: "Launch",
                  desc: "Deploy, optimize and hand off with docs.",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12l4 8 16-16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="relative lg:flex lg:items-start lg:gap-6"
                >
                  <div className="flex items-center lg:flex-col lg:items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-slate-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="text-sm font-mono text-indigo-600">
                          {step.num}
                        </div>
                        <div className="mt-1 text-slate-400">{step.icon}</div>
                      </div>
                    </div>
                    <div className="lg:hidden">
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {step.desc}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {step.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {step.desc}
                    </div>
                  </div>

                  {/* connector dot on mobile */}
                  {idx < 2 && (
                    <div className="lg:hidden mt-6 flex items-center justify-center">
                      <div className="h-0.5 w-24 bg-slate-100 dark:bg-slate-700" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: 3) Integrations & tools */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Integrations & tools
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Deploy, analytics and design tools we use to deliver fast,
              maintainable portfolios.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {[
              {
                name: "Vercel",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={132.42}
                      height={30}
                      viewBox="0 0 512 116"
                    >
                      <path d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338c-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.409-32.58m-17.13 26.26c2.263-7.226 8.457-11.772 17.113-11.772c8.675 0 14.869 4.546 17.114 11.772zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338c-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.408-32.58m-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772c8.674 0 14.868 4.546 17.113 11.772zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11c7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375c-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91c-10.992 0-18.11 7.243-18.11 18.11M512 9.055V92.36h-16.299V9.055zM66.916 0l66.915 115.903H0zm167.298 9.055l-50.182 86.927l-50.183-86.927h18.817l31.366 54.33l31.366-54.33zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887c-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66"></path>
                    </svg>
                  </>
                ),
              },
              {
                name: "Netlify",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#014847"
                        d="M29.39 13.98L18.02 2.61l-.42-.42l-.47-.19h-2.26l-.47.2l-.42.41L2.61 13.98l-.42.42l-.19.47v2.26l.2.47l.41.42l11.37 11.37l.42.42l.47.19h2.26l.47-.2l.42-.41l11.37-11.37l.42-.42l.19-.47v-2.26l-.2-.47z"
                      ></path>
                      <path
                        fill="#32e6e2"
                        d="M14.99 27.38v-5.46l.14-.15h1.74l.14.15v5.46l-.14.14h-1.74zm0-17.3V4.62l.14-.14h1.74l.14.14v5.46l-.14.15h-1.74zM10.4 23.33h-.24l-1.2-1.2v-.23l1.6-1.6h1.26l.17.18v1.26l-1.6 1.6ZM8.96 10.16v-.24l1.2-1.2h.24l1.59 1.6v1.26l-.17.17h-1.26zm-4.8 4.82h6.14l.14.15v1.74l-.14.14H4.16L4 16.87v-1.74l.15-.15Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M19.26 19.62h-1.74l-.15-.15v-4.06c0-.73-.28-1.29-1.15-1.3c-.45-.02-.97 0-1.51.02l-.09.08v5.26l-.14.15h-1.74l-.14-.15v-6.94l.14-.15h3.9a2.75 2.75 0 0 1 2.76 2.75v4.34l-.15.15Z"
                      ></path>
                      <path
                        fill="#32e6e2"
                        d="M27.84 17.02H21.7l-.14-.15v-1.74l.14-.14h6.14l.15.14v1.74z"
                      ></path>
                    </svg>
                  </>
                ),
              },
              {
                name: "Figma",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#242938"
                          rx={60}
                        ></rect>
                        <g clipPath="url(#SVG9U8Xmbth)">
                          <path
                            fill="#0acf83"
                            d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
                          ></path>
                          <path
                            fill="#a259ff"
                            d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
                          ></path>
                          <path
                            fill="#f24e1e"
                            d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
                          ></path>
                          <path
                            fill="#ff7262"
                            d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
                          ></path>
                          <path
                            fill="#1abcfe"
                            d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="SVG9U8Xmbth">
                            <path fill="#fff" d="M61 28h133.36v200H61z"></path>
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </>
                ),
              },
              {
                name: "Stripe",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={71.78}
                      height={30}
                      viewBox="0 0 512 214"
                    >
                      <path
                        fill="#635bff"
                        d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"
                      ></path>
                    </svg>
                  </>
                ),
              },
              {
                name: "Contentful",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26.58}
                      height={30}
                      viewBox="0 0 256 289"
                    >
                      <path
                        fill="#fae501"
                        d="M87.333 200.777c-15.306-14.406-24.309-34.213-24.309-56.722s9.003-42.316 23.409-56.722c12.605-12.604 12.605-32.412 0-45.017s-32.412-12.605-45.017 0C16.206 68.426 0 104.44 0 144.055s16.206 75.629 42.316 101.739c12.605 12.605 32.413 12.605 45.017 0c11.705-12.605 11.705-32.413 0-45.017"
                      ></path>
                      <path
                        fill="#4fb5e1"
                        d="M87.333 87.333c14.406-15.306 34.213-24.309 56.722-24.309s42.316 9.003 56.722 23.409c12.604 12.605 32.412 12.605 45.017 0s12.605-32.412 0-45.017C219.684 16.206 183.67 0 144.055 0S68.426 16.206 42.316 42.316c-12.605 12.605-12.605 32.413 0 45.017c12.605 11.705 32.413 11.705 45.017 0"
                      ></path>
                      <path
                        fill="#f05751"
                        d="M200.777 200.777c-14.406 15.305-34.213 24.309-56.722 24.309s-42.316-9.004-56.722-23.41c-12.604-12.604-32.412-12.604-45.017 0c-12.605 12.606-12.605 32.413 0 45.018c26.11 25.21 62.124 41.416 101.739 41.416s75.629-16.206 101.739-42.316c12.605-12.605 12.605-32.413 0-45.017c-12.605-11.705-32.413-11.705-45.017 0"
                      ></path>
                      <circle
                        cx={64.825}
                        cy={64.825}
                        r={31.512}
                        fill="#0681b6"
                      ></circle>
                      <circle
                        cx={64.825}
                        cy={223.285}
                        r={31.512}
                        fill="#cd4739"
                      ></circle>
                    </svg>
                  </>
                ),
              },
              {
                name: "Google Analytics",
                icon: (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={27.05}
                      height={30}
                      viewBox="0 0 256 284"
                    >
                      <path
                        fill="#f9ab00"
                        d="M256.003 247.933a35.224 35.224 0 0 1-39.376 35.161c-18.044-2.67-31.266-18.371-30.826-36.606V36.845C185.365 18.591 198.62 2.881 216.687.24a35.22 35.22 0 0 1 39.316 35.16z"
                      ></path>
                      <path
                        fill="#e37400"
                        d="M35.101 213.193c19.386 0 35.101 15.716 35.101 35.101c0 19.386-15.715 35.101-35.101 35.101S0 267.68 0 248.295s15.715-35.102 35.101-35.102m92.358-106.387c-19.477 1.068-34.59 17.406-34.137 36.908v94.285c0 25.588 11.259 41.122 27.755 44.433a35.16 35.16 0 0 0 42.146-34.56V142.089a35.22 35.22 0 0 0-35.764-35.282"
                      ></path>
                    </svg>
                  </>
                ),
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900 rounded-md text-indigo-600 font-semibold">
                  {tool.icon}
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2) Templates showcase (refreshed card layout) */}
        <section className="mx-auto flex justify-center   items-center  w-screen px-6 lg:px-8 py-12 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Templates showcase
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Hand-picked starter templates — quick to launch and easy to
                customize for freelancers.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Clean Portfolio",
                  tag: "Minimal",
                  img: "https://picsum.photos/seed/tpl-1/1200/800",
                  desc: "A stripped-back portfolio focused on work and case studies.",
                },
                {
                  id: 2,
                  title: "Creative Showcase",
                  tag: "Bold",
                  img: "https://picsum.photos/seed/tpl-2/1200/800",
                  desc: "A colorful layout for visual artists and illustrators.",
                },
                {
                  id: 3,
                  title: "Agency-lite",
                  tag: "Professional",
                  img: "https://picsum.photos/seed/tpl-3/1200/800",
                  desc: "A polished template for freelancers offering services.",
                },
              ].map((t) => (
                <article
                  key={t.id}
                  className="group rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-slate-800   ring-1 ring-black/5 dark:ring-white/5 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-44 sm:h-48">
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/90 dark:bg-black/60 text-sm px-3 py-1 rounded-full font-medium">
                      {t.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      {t.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {t.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default ServicesPage;
