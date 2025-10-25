import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import {
  Check,
  Code,
  Figma,
  FileText,
  Layout,
  Server,
  Zap,
} from "lucide-react";

const PortfolioTemplatesPage: React.FC = () => {
  const pricingPlans = [
    {
      id: "starter",
      title: "Starter Templates",
      price: "$9",
      period: "/ month",
      blurb: "For solo freelancers needing foundational structure.",
      features: [
        { icon: "Check", text: "1 Core Portfolio Template", available: true },
        { icon: "Check", text: "Basic Email Support", available: true },
        { icon: "Check", text: "Regular System Updates", available: true },
        {
          icon: "Code",
          text: "Component Library Access (Lite)",
          available: false,
        },
        { icon: "Server", text: "Handoff Consultation (No)", available: false },
      ],
      highlighted: false,
      cta: { href: "/contact-us", text: "Choose Starter", primary: true },
    },
    {
      id: "pro",
      title: "System Pro Build",
      price: "$2,900",
      period: "/ one-time",
      blurb: "The full, custom design system build for professionals.",
      features: [
        { icon: "Check", text: "Custom Templates & Pages", available: true },
        { icon: "Check", text: "Priority Support & Handoff", available: true },
        { icon: "Check", text: "Full Commercial License", available: true },
        {
          icon: "Code",
          text: "Full Component Library Access",
          available: true,
        },
        {
          icon: "Server",
          text: "Dedicated Handoff Consultation",
          available: true,
        },
      ],
      highlighted: true,
      cta: { href: "/contact-us", text: "Start Pro System", primary: true },
    },
    {
      id: "agency",
      title: "Agency License",
      price: "$79",
      period: "/ month",
      blurb: "For studios managing systems for multiple clients.",
      features: [
        { icon: "Check", text: "Unlimited Template Access", available: true },
        { icon: "Check", text: "Multi-Seat Team Access", available: true },
        { icon: "Check", text: "Dedicated Account Manager", available: true },
        {
          icon: "Code",
          text: "Full Component Library Access",
          available: true,
        },
        {
          icon: "Server",
          text: "Full Handoff Consultation Access",
          available: true,
        },
      ],
      highlighted: false,
      cta: { href: "/contact-us", text: "Contact Sales", primary: false },
    },
  ];
  return (
    <>
      <Head>
        <title>Portfolio Templates — Services</title>
        <meta
          name="description"
          content="Ready-made portfolio templates and component kits for freelancers and creatives — responsive pages, prebuilt sections, and fast launch guides."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent">
        {/* ======================================================= */}
        {/* 1. HERO: Bolder, Split Layout with Premium CTA */}
        {/* ======================================================= */}
        <section className="bg-linear-to-b min-h-[90vh] from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-10 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Text and CTA (Main Content) */}
              <div>
                <nav
                  className="text-sm text-slate-500 dark:text-slate-400"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/services" className="hover:underline">
                        Services
                      </Link>
                    </li>
                    <li className="text-slate-300 dark:text-slate-700">/</li>
                    <li className="text-indigo-600 dark:text-cyan-400 font-semibold">
                      Portfolio Templates
                    </li>
                  </ol>
                </nav>

                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  Beautiful portfolio templates, ready to ship.
                </h1>

                <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-xl">
                  Launch a polished portfolio in minutes. Professionally-crafted
                  templates with prebuilt pages, components, and easy
                  customization for freelancers and creatives.
                </p>

                {/* --- CTAs (Redesigned for premium look) --- */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Explore Templates
                  </Link>
                </div>

                {/* --- Value/Feature List (Improved visual style) --- */}
                <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                  {/* Template-focused */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        Template Themes
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Curated themes for minimal, creative, and photo-forward
                        portfolios ready to swap and launch.
                      </div>
                    </div>
                  </li>

                  {/* Reusable components */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600">
                      <Layout className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        Prebuilt Sections
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Landing, about, projects and contact sections that
                        combine into full portfolio pages.
                      </div>
                    </div>
                  </li>

                  {/* Design tokens */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/40 text-red-600">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        Composable Components
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Buttons, cards, galleries and layout pieces designed to
                        be reused and themed.
                      </div>
                    </div>
                  </li>

                  {/* Accessible by default */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/40 text-green-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        Easy Handoff
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Documentation, tokens, and a short handoff guide so you
                        can customize or hand the site to a developer.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Side: Visual Asset (Abstract Code Preview) */}
              <div className="hidden lg:flex items-center justify-center relative">
                {/* Abstract graphic replacing the stock image */}
                <div className="w-full   bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 shadow-2xl dark:shadow-purple-900/40 border border-slate-200 dark:border-slate-700 relative  ">
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5 bg-white dark:bg-slate-800">
                      <img
                        src="https://picsum.photos/seed/design-system/1200/800"
                        alt="Design system preview"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-5">
                        <div className=" text-slate-500 dark:text-slate-400">
                          Template preview
                        </div>
                        <div className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                          Portfolio template preview
                        </div>
                        <p className="mt-2  text-slate-600 dark:text-slate-300">
                          A quick look at a template homepage, gallery and
                          project layout to show structure and visual rhythm.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* 2. SCOPE & DELIVERABLES: Card-Grid Polish */}
        {/* ======================================================= */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 bg-white dark:bg-slate-900">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Template Deliverables
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ready-to-use portfolio templates and component kits designed for
              quick launches and easy updates.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deliverables */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-shadow duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                <Figma className="h-6 w-6" /> Template Kit & Deliverables
              </div>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  • Full, responsive portfolio pages (home, about, projects,
                  contact)
                </li>
                <li className="flex items-start gap-2">
                  • Prebuilt components and sections (galleries, case studies,
                  hero)
                </li>
                <li className="flex items-start gap-2">
                  • Accessible markup and responsive images
                </li>
                <li className="flex items-start gap-2">
                  • CMS-ready templates and SEO-friendly structure
                </li>
                <li className="flex items-start gap-2">
                  • Design tokens and a short customization guide
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-shadow duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                <Zap className="h-6 w-6" /> Timeline & Velocity
              </div>
              <div className="mt-6 text-slate-700 dark:text-slate-300">
                Typical engagement: **1–7 days** to pick and customize a
                template, faster for small tweaks. We break work into Pick,
                Customize, Deploy phases.
              </div>
              <div className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-t pt-4 border-slate-200 dark:border-slate-700">
                Includes theme variables, quick-start instructions, and optional
                setup help.
              </div>
            </div>

            {/* How we work */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl">
              <div>
                <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                  <Code className="h-6 w-6" /> Workflow
                </div>
                <ol className="mt-6 text-slate-700 dark:text-slate-300 space-y-3 list-decimal pl-5">
                  <li>Choose a template and theme</li>
                  <li>Swap content, images and project entries</li>
                  <li>Customize tokens (colors/typography)</li>
                  <li>Deploy and go live</li>
                </ol>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Get a Scoped Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Template Showcase
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A few portfolio templates and style directions you can start from.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {[
              {
                id: "tpl-1",
                title: "Minimalist — Nova",
                img: "https://picsum.photos/seed/tpl-1/900/600",
                desc: "A clean, minimal portfolio with emphasis on whitespace and typography.",
              },
              {
                id: "tpl-2",
                title: "Photographer — Clara",
                img: "https://picsum.photos/seed/tpl-2/900/600",
                desc: "Full-bleed galleries and optimized lightbox for image-forward portfolios.",
              },
              {
                id: "tpl-3",
                title: "Designer — Mateo",
                img: "https://picsum.photos/seed/tpl-3/900/600",
                desc: "Project case studies, process pages, and a modular project grid for case-focused portfolios.",
              },
            ].map((p, idx) => (
              <article
                key={p.id}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-6 p-4 ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative w-full lg:w-1/2 h-56 sm:h-64 lg:h-56 overflow-hidden rounded-xl">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/90 dark:bg-black/60 text-sm px-3 py-1 rounded-full font-medium text-slate-800 dark:text-slate-100">
                      {p.title.split("—")[0].trim()}
                    </span>
                  </div>

                  <div className="w-full lg:w-1/2 p-2 lg:p-6">
                    <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Design & implementation
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Client Success Stories
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real results from freelancers who used our systems to ship faster
              and look more polished.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "t1",
                name: "Alex Morgan",
                role: "Product Designer",
                quote:
                  "The design system cut our launch time in half—components are predictable and documentation made handoffs painless. Worth every penny.",
                avatar: "https://i.pravatar.cc/80?img=12",
              },
              {
                id: "t2",
                name: "Lina Rodriguez",
                role: "Illustrator",
                quote:
                  "I loved how the tokens made color changes trivial—one update and my whole site matched the new brand. My site feels professional now.",
                avatar: "https://i.pravatar.cc/80?img=47",
              },
              {
                id: "t3",
                name: "Ember Co",
                role: "Founder",
                quote:
                  "Consistent components and templates made it easy to produce landing pages for new services—our lead conversion improved instantly.",
                avatar: "https://i.pravatar.cc/80?img=32",
              },
            ].map((t) => (
              <blockquote
                key={t.id}
                className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-8 shadow-md ring-1 ring-black/5 dark:ring-white/5 border-t-4 border-indigo-600 dark:border-cyan-400"
              >
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full ring-2 ring-indigo-600 dark:ring-cyan-400"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ======================================================= */}
        {/* 4. PRICING & PLANS: Clean, Separated, and Emphasized */}
        {/* ======================================================= */}
        <section
          id="pricing"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-teal-500 uppercase">
              PRICING
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Transparent, Value-Driven Packages
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the level of support and system depth that best fits your
              freelance practice or small team.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const baseCard = plan.highlighted
                ? "relative rounded-3xl border-4 border-indigo-600 dark:border-teal-400 bg-white dark:bg-slate-950 p-8 shadow-2xl ring-4 ring-indigo-200 dark:ring-teal-900"
                : "relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-lg";

              return (
                <div key={plan.id} className={baseCard}>
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 dark:bg-teal-500 text-white dark:text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      MOST POPULAR
                    </span>
                  )}

                  <div
                    className={`${
                      plan.highlighted
                        ? "text-xl font-bold text-indigo-700 dark:text-teal-400"
                        : "text-xl font-bold text-slate-900 dark:text-white"
                    }`}
                  >
                    {plan.title}
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={`${
                        plan.highlighted
                          ? "text-5xl font-extrabold text-slate-900 dark:text-white"
                          : "text-5xl font-extrabold"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-lg text-slate-500">
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-3 ${
                      plan.highlighted
                        ? "text-slate-700 dark:text-slate-300 font-semibold"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {plan.blurb}
                  </p>

                  <ul
                    className={`mt-8 space-y-4 text-sm ${
                      plan.highlighted
                        ? "text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-6"
                        : "text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-6"
                    }`}
                  >
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 ${
                          f.available
                            ? ""
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        {f.icon === "Check" ? (
                          <Check
                            className={`h-5 w-5 ${
                              f.available
                                ? plan.highlighted
                                  ? "text-green-500 shrink-0"
                                  : "text-indigo-500 shrink-0"
                                : ""
                            }`}
                          />
                        ) : f.icon === "Code" ? (
                          <Code
                            className={`h-5 w-5 ${
                              f.available && plan.highlighted
                                ? "text-green-500"
                                : ""
                            }`}
                          />
                        ) : (
                          <Server
                            className={`h-5 w-5 ${
                              f.available && plan.highlighted
                                ? "text-green-500"
                                : ""
                            }`}
                          />
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      href={plan.cta.href}
                      className={
                        plan.cta.primary
                          ? plan.highlighted
                            ? "inline-flex items-center justify-center w-full bg-indigo-700 dark:bg-teal-500 hover:bg-indigo-800 dark:hover:bg-teal-600 text-white dark:text-slate-900 px-4 py-3 rounded-xl font-bold text-xl shadow-lg shadow-indigo-600/40 dark:shadow-teal-500/40"
                            : "inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl font-bold text-lg"
                          : "inline-flex items-center justify-center w-full border-2 border-indigo-600 dark:border-teal-400 text-indigo-600 dark:text-teal-400 px-4 py-3 rounded-xl font-bold text-lg hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
                      }
                    >
                      {plan.cta.text}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================= */}
        {/* 5. FINAL CTA: Bold, Centered Hook (Redesigned) */}
        {/* ======================================================= */}
        <section className="flex justify-center items-center py-24 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <div className="relative w-full max-w-5xl px-6">
            <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/5 p-12 lg:p-16 text-center">
              <FileText className="h-10 w-10 text-indigo-600 dark:text-teal-400 mx-auto mb-4" />
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Ready to Launch Your Portfolio?
              </h2>

              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Stop spending hours on layout — pick a template, swap your
                content, and go live today.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-2xl shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.05]"
                >
                  Start with a Template
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default PortfolioTemplatesPage;
