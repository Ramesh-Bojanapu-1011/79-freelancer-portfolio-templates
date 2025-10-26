import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { Briefcase, Check, Star, User } from "lucide-react";
import Head from "next/head";
import React, { useTransition } from "react";
import AOS from "aos";
import Link from "next/link";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

export default function Home1() {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <Head>
        <title>{t("home.meta.title")}</title>
        <meta name="description" content={t("home.meta.description")} />
      </Head>
      <SiteHeadder />
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100  caret-transparent max-w-screen overflow-x-hidden">
        {/* Hero */}
        <section className="relative  overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 min-h-screen flex justify-center items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8    ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-up-right">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                  <Briefcase className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                  <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                    {t("home.hero.badge")}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
                  {t("home.hero.title")}
                </h1>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  {t("home.hero.subtitle")}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/auth"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    {t("home.hero.get_started")}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border bg-white dark:bg-slate-800"
                  >
                    {t("home.hero.contact_sales")}
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Star className="h-4 w-4 text-amber-500" />{" "}
                    {t("home.hero.trusted")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-emerald-500" />{" "}
                    {t("home.hero.fast_customize")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <User className="h-4 w-4 text-indigo-500" />{" "}
                    {t("home.hero.seo_friendly")}
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                  <img
                    src="https://i.postimg.cc/portfolio-sample.jpg"
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
            <div data-aos="fade-up-right" className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                <img
                  src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                  alt="Showcase"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: content */}
            <div data-aos="fade-left" className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                  {t("home.services.badge")}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {t("home.services.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {t("home.services.subtitle")}
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      {t("home.services.bullet1.title")}
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {t("home.services.bullet1.desc")}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      {t("home.services.bullet2.title")}
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {t("home.services.bullet2.desc")}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="font-medium">
                      {t("home.services.bullet3.title")}
                    </strong>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {t("home.services.bullet3.desc")}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  {t("home.services.learn_more")}
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
              <div data-aos="fade-up-right">
                <h3 className="text-sm font-medium text-indigo-600">
                  {t("home.why.title")}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                  {t("home.why.para")}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t("home.why.business_growth.title")}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home.why.business_growth.desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t("home.why.perfect.title")}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home.why.perfect.desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t("home.why.trusted.title")}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home.why.trusted.desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-800/30 flex items-center justify-center text-indigo-600">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t("home.why.seo.title")}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home.why.seo.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.postimg.cc/5ym0KZ1Y/avatar.jpg"
                      alt="Author"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">
                        {t("home.why.testimonial.author")}
                      </p>
                      <p className="text-sm text-slate-500">
                        {t("home.why.testimonial.role")}
                      </p>
                    </div>
                  </div>

                  <div className="ml-auto text-sm text-slate-500">
                    {t("home.why.call_us")}{" "}
                    <span className="text-indigo-600 font-medium">
                      {t("footer.phone")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: image with decorative gradient */}
              <div
                data-aos="fade-left"
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 transform rotate-2 rounded-3xl bg-linear-to-tr from-indigo-400 to-pink-400 opacity-30 blur-lg"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                    <img
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
            <p className="text-sm font-medium text-indigo-600">
              {t("home.approach.badge")}
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
              {t("home.approach.title")}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("home.approach.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titleKey: "home.approach.items.discovery.title",
                descKey: "home.approach.items.discovery.desc",
                icon: Check,
                color: "from-blue-500 to-indigo-500",
                animation: "fade-up",
              },
              {
                titleKey: "home.approach.items.strategize.title",
                descKey: "home.approach.items.strategize.desc",
                icon: Briefcase,
                color: "from-purple-500 to-pink-500",
                animation: "fade-up",
              },
              {
                titleKey: "home.approach.items.implementation.title",
                descKey: "home.approach.items.implementation.desc",
                icon: Star,
                color: "from-emerald-500 to-teal-500",
                animation: "fade-up",
              },
              {
                titleKey: "home.approach.items.analysis.title",
                descKey: "home.approach.items.analysis.desc",
                icon: User,
                color: "from-orange-500 to-red-500",
                animation: "fade-up",
              },
            ].map((f, i) => {
              const Icon = f.icon as any;
              return (
                <div
                  key={i}
                  data-aos={f.animation}
                  data-aos-delay={i * 150}
                  className="relative bg-white/60 dark:bg-slate-800/70 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent to-white/10 dark:to-white/5 pointer-events-none" />
                  <div className="flex justify-center">
                    <div
                      className={`h-16 w-16 rounded-full bg-linear-to-tr ${f.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-center text-slate-900 dark:text-white">
                    {t(f.titleKey!)}
                  </h3>
                  <p className="mt-3 text-sm text-center text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(f.descKey!)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Template types / Related to theme (new) */}
        <section className="mx-auto bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800   px-6 lg:px-8 py-20">
          <div className="text-center">
            <h3 className="text-sm font-medium text-indigo-600">
              {t("home.templates.heading")}
            </h3>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
              {t("home.templates.title")}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("home.templates.description")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titleKey: "home.templates.items.portfolio.title",
                descKey: "home.templates.items.portfolio.desc",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                titleKey: "home.templates.items.agency.title",
                descKey: "home.templates.items.agency.desc",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                titleKey: "home.templates.items.case.title",
                descKey: "home.templates.items.case.desc",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
              {
                titleKey: "home.templates.items.landing.title",
                descKey: "home.templates.items.landing.desc",
                img: "https://i.postimg.cc/6QxYq3k1/portfolio-thumb.jpg",
              },
            ].map((item, i) => (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl p-4"
              >
                <div className="rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={t(item.titleKey)}
                    width={600}
                    height={400}
                    className="w-full h-36 object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold">{t(item.titleKey)}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t(item.descKey)}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials / Reviews */}
        <section className="mx-auto w-screen    bg-linear-to-b to-white from-slate-50 dark:to-slate-900 dark:from-slate-800 px-6 lg:px-8 py-16">
          <div className="    ">
            <div className="flex-col flex  justify-center items-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                {t("home.testimonials.title")}
                <span className="text-indigo-600">
                  {t("home.testimonials.highlight")}
                </span>
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-lg font-medium">
                    {t("home.testimonials.rating")}
                  </span>
                  <Star className="h-4 w-4 text-emerald-500" />
                  <span className="ml-1">{t("home.testimonials.source")}</span>
                </div>
                <div className="text-sm text-slate-400">
                  {t("home.testimonials.based_on")}
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
                          nameKey: "home.testimonials.items.0.name",
                          textKey: "home.testimonials.items.0.text",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          timeKey: "home.testimonials.items.0.time",
                        },
                        {
                          nameKey: "home.testimonials.items.1.name",
                          textKey: "home.testimonials.items.1.text",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          timeKey: "home.testimonials.items.1.time",
                        },
                        {
                          nameKey: "home.testimonials.items.2.name",
                          textKey: "home.testimonials.items.2.text",
                          avatar: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                          timeKey: "home.testimonials.items.2.time",
                        },
                      ].map((r, i) => (
                        <div
                          key={i}
                          data-aos="fade-up"
                          data-aos-delay={i * 150}
                          className="snap-start max-w-sm"
                          style={{ minWidth: 300 }}
                        >
                          <article className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg w-full">
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                              {t(r.textKey!)}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={r.avatar}
                                  alt={t(r.nameKey!)}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <div>
                                  <div className="font-medium">
                                    {t(r.nameKey!)}
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {t(r.timeKey!)}
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
