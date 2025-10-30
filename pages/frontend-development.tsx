import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import AOS from "aos";
import {
  Check,
  Code,
  Figma,
  FileText,
  Layout,
  Server,
  Zap,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const DesignSystemsUIPage: React.FC = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const pricingPlans = [
    {
      id: "starter",
      titleKey: "frontend.pricing.plans.starter.title",
      price: "$9",
      period: "/ month",
      blurbKey: "frontend.pricing.plans.starter.blurb",
      features: [
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.starter.features.0",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.starter.features.1",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.starter.features.2",
          available: true,
        },
        {
          icon: "Code",
          textKey: "frontend.pricing.plans.starter.features.3",
          available: false,
        },
        {
          icon: "Server",
          textKey: "frontend.pricing.plans.starter.features.4",
          available: false,
        },
      ],
      highlighted: false,
      cta: {
        href: "/contact-us",
        textKey: "frontend.pricing.plans.starter.cta",
        primary: true,
      },
    },
    {
      id: "pro",
      titleKey: "frontend.pricing.plans.pro.title",
      price: "$2,900",
      period: "/ one-time",
      blurbKey: "frontend.pricing.plans.pro.blurb",
      features: [
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.pro.features.0",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.pro.features.1",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.pro.features.2",
          available: true,
        },
        {
          icon: "Code",
          textKey: "frontend.pricing.plans.pro.features.3",
          available: true,
        },
        {
          icon: "Server",
          textKey: "frontend.pricing.plans.pro.features.4",
          available: true,
        },
      ],
      highlighted: true,
      cta: {
        href: "/contact-us",
        textKey: "frontend.pricing.plans.pro.cta",
        primary: true,
      },
    },
    {
      id: "agency",
      titleKey: "frontend.pricing.plans.agency.title",
      price: "$79",
      period: "/ month",
      blurbKey: "frontend.pricing.plans.agency.blurb",
      features: [
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.agency.features.0",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.agency.features.1",
          available: true,
        },
        {
          icon: "Check",
          textKey: "frontend.pricing.plans.agency.features.2",
          available: true,
        },
        {
          icon: "Code",
          textKey: "frontend.pricing.plans.agency.features.3",
          available: true,
        },
        {
          icon: "Server",
          textKey: "frontend.pricing.plans.agency.features.4",
          available: true,
        },
      ],
      highlighted: false,
      cta: {
        href: "/contact-us",
        textKey: "frontend.pricing.plans.agency.cta",
        primary: false,
      },
    },
  ];

  const projects = [
    {
      id: "project-1",
      titleKey: "frontend.projects.0.title",
      img: "https://i.pinimg.com/736x/10/53/a2/1053a2c88fc1c0dd85905a18b3e580da.jpg",
      descKey: "frontend.projects.0.desc",
    },
    {
      id: "project-2",
      titleKey: "frontend.projects.1.title",
      img: "https://media.istockphoto.com/id/1091104298/video/multicolor-background-projection-upon-a-female-dancer.jpg?s=640x640&k=20&c=2bOsYMs1sSbwK-UC-6Kt_Xm3x86BkpNWsrj-sISAcN0=",
      descKey: "frontend.projects.1.desc",
    },
    {
      id: "project-3",
      titleKey: "frontend.projects.2.title",
      img: "https://i.pinimg.com/736x/1a/5b/10/1a5b1040ec6375c87a9b53c62fcd194d.jpg",
      descKey: "frontend.projects.2.desc",
    },
  ];

  const testimonials = [
    {
      id: "t1",
      nameKey: "frontend.testimonials.items.t1.name",
      roleKey: "frontend.testimonials.items.t1.role",
      quoteKey: "frontend.testimonials.items.t1.quote",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      id: "t2",
      nameKey: "frontend.testimonials.items.t2.name",
      roleKey: "frontend.testimonials.items.t2.role",
      quoteKey: "frontend.testimonials.items.t2.quote",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      id: "t3",
      nameKey: "frontend.testimonials.items.t3.name",
      roleKey: "frontend.testimonials.items.t3.role",
      quoteKey: "frontend.testimonials.items.t3.quote",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
  ];

  return (
    <>
      <Head>
        <title>Design Systems & UI — Services</title>
        <meta
          name="description"
          content="Design systems, reusable UI components and polished layouts for freelancer portfolios."
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
                        {t("header.services")}
                      </Link>
                    </li>
                    <li className="text-slate-300 dark:text-slate-700">/</li>
                    <li className="text-indigo-600 dark:text-cyan-400 font-semibold">
                      {t("frontend.breadcrumb.current")}
                    </li>
                  </ol>
                </nav>

                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  {t("frontend.hero.title")}
                </h1>

                <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-xl">
                  {t("frontend.hero.desc")}
                </p>

                {/* --- CTAs (Redesigned for premium look) --- */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {t("frontend.hero.cta_start")}
                  </Link>
                </div>

                {/* --- Value/Feature List (Improved visual style) --- */}
                <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                  {/* Performance-minded */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("frontend.features.performance.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {t("frontend.features.performance.desc")}
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
                        {t("frontend.features.reusable.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {t("frontend.features.reusable.desc")}
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
                        {t("frontend.features.tooling.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {t("frontend.features.tooling.desc")}
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
                        {t("frontend.features.accessibility.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {t("frontend.features.accessibility.desc")}
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
                        src="https://i.pinimg.com/736x/6a/5f/bc/6a5fbcdafb52ed86f72a836d55b49998.jpg"
                        alt="Design system preview"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-5">
                        <div className=" text-slate-500 dark:text-slate-400">
                          {t("frontend.preview.example")}
                        </div>
                        <div className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {t("frontend.preview.preview_title")}
                        </div>
                        <p className="mt-2  text-slate-600 dark:text-slate-300">
                          {t("frontend.preview.preview_desc")}
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
        <section className=" bg-linear-to-b   from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t("frontend.scope.title")}
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t("frontend.scope.desc")}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Deliverables */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-shadow duration-300 hover:shadow-2xl">
                <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                  <Figma className="h-6 w-6" />{" "}
                  {t("frontend.deliverables.title")}
                </div>
                <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    • {t("frontend.deliverables.items.reactPages")}
                  </li>
                  <li className="flex items-start gap-2">
                    • {t("frontend.deliverables.items.components")}
                  </li>
                  <li className="flex items-start gap-2">
                    • {t("frontend.deliverables.items.pageTemplates")}
                  </li>
                  <li className="flex items-start gap-2">
                    • {t("frontend.deliverables.items.performance")}
                  </li>
                  <li className="flex items-start gap-2">
                    • {t("frontend.deliverables.items.deployment")}
                  </li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-shadow duration-300 hover:shadow-2xl">
                <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                  <Zap className="h-6 w-6" /> {t("frontend.timeline.title")}
                </div>
                <div className="mt-6 text-slate-700 dark:text-slate-300">
                  {t("frontend.timeline.desc")}
                </div>
                <div className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-t pt-4 border-slate-200 dark:border-slate-700">
                  {t("frontend.timeline.note")}
                </div>
              </div>

              {/* How we work */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                    <Code className="h-6 w-6" /> {t("frontend.workflow.title")}
                  </div>
                  <ol className="mt-6 text-slate-700 dark:text-slate-300 space-y-3 list-decimal pl-5">
                    <li>{t("frontend.workflow.steps.0")}</li>
                    <li>{t("frontend.workflow.steps.1")}</li>
                    <li>{t("frontend.workflow.steps.2")}</li>
                    <li>{t("frontend.workflow.steps.3")}</li>
                  </ol>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    {t("frontend.workflow.cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-linear-to-b   from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {t("frontend.projects.title")}
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {t("frontend.projects.desc")}
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {projects.map((p, idx) => (
                <article
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
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
                        alt={t(p.titleKey)}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                      <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/90 dark:bg-black/60 text-sm px-3 py-1 rounded-full font-medium text-slate-800 dark:text-slate-100">
                        {t(p.titleKey).split("—")[0].trim()}
                      </span>
                    </div>

                    <div className="w-full lg:w-1/2 p-2 lg:p-6">
                      <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">
                        {t(p.titleKey)}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        {t(p.descKey)}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {t("frontend.projects.meta")}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className=" bg-linear-to-b   from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t("frontend.testimonials.title")}
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t("frontend.testimonials.desc")}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <blockquote
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  key={item.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-8 shadow-md ring-1 ring-black/5 dark:ring-white/5 border-t-4 border-indigo-600 dark:border-cyan-400"
                >
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                    “{t(item.quoteKey)}”
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={t(item.nameKey)}
                      className="w-12 h-12 rounded-full ring-2 ring-indigo-600 dark:ring-cyan-400"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {t(item.nameKey)}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {t(item.roleKey)}
                      </div>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
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
              {t("frontend.pricing.badge")}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t("frontend.pricing.title")}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t("frontend.pricing.desc")}
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
                    {t(plan.titleKey)}
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
                    {t(plan.blurbKey)}
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
                        {t(f.textKey)}
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
                      {t(plan.cta.textKey)}
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
                {t("frontend.cta.title")}
              </h2>

              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("frontend.cta.desc")}
              </p>

              <div className="mt-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-2xl shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.05]"
                >
                  {t("frontend.cta.button")}
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

export default DesignSystemsUIPage;
