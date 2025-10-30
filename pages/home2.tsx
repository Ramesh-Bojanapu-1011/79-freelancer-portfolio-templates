import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import {
  Aperture,
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  Facebook,
  Film,
  Image as ImageIcon,
  Layers,
  Linkedin,
  PenTool,
  Star,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Home2 = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("home2.testimonials.items.0.quote"),
      name: t("home2.testimonials.items.0.name"),
      title: t("home2.testimonials.items.0.title"),
      rating: 5,
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      quote: t("home2.testimonials.items.1.quote"),
      name: t("home2.testimonials.items.1.name"),
      title: t("home2.testimonials.items.1.title"),
      rating: 5,
      img: " https://i.pravatar.cc/100?img=12",
    },
    {
      quote: t("home2.testimonials.items.2.quote"),
      name: t("home2.testimonials.items.2.name"),
      title: t("home2.testimonials.items.2.title"),
      rating: 4,
      img: " https://i.pravatar.cc/100?img=5",
    },
  ];

  const tools = [
    {
      nameKey: "home2.tools.items.figma",
      pct: 98,
      icon: <PenTool className="h-6 w-6 text-indigo-500" />,
    },
    {
      nameKey: "home2.tools.items.sketch",
      pct: 92,
      icon: <Layers className="h-6 w-6 text-indigo-500" />,
    },
    {
      nameKey: "home2.tools.items.photoshop",
      pct: 90,
      icon: <ImageIcon className="h-6 w-6 text-indigo-500" />,
    },
    {
      nameKey: "home2.tools.items.after_effects",
      pct: 85,
      icon: <Film className="h-6 w-6 text-indigo-500" />,
    },
    {
      nameKey: "home2.tools.items.storybook",
      pct: 90,
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
    },
    {
      nameKey: "home2.tools.items.invision",
      pct: 95,
      icon: <Aperture className="h-6 w-6 text-indigo-500" />,
    },
  ];

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <Head>
        <title>{t("home2.meta.title")}</title>
        <meta name="description" content={t("home2.meta.description")} />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent max-w-svw overflow-hidden">
        {/* Hero (dark profile) */}
        <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: text */}
              <div
                data-aos="fade-up-right"
                className="text-center lg:text-left"
              >
                <div className="inline-block rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm text-indigo-600 font-medium">
                  {t("home2.hero.badge")}
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  {t("home2.hero.title")}
                  <br />
                  <span className="text-indigo-500">
                    {t("home2.hero.highlight")}
                  </span>
                </h1>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                  {t("home2.hero.desc")}
                </p>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    {t("home2.hero.cta_explore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label={t("social.facebook")}
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </a>
                    <a
                      href="#"
                      aria-label={t("social.twitter")}
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Twitter className="h-4 w-4 text-sky-500" />
                    </a>
                    <a
                      href="#"
                      aria-label={t("social.linkedin")}
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div
                data-aos="fade-left"
                className="relative flex items-center justify-center"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                  <img
                    src="https://i.pinimg.com/736x/2e/39/5b/2e395b1a132ee54a7a11ea79c9c4ee86.jpg"
                    alt={t("home2.hero.imageAlt")}
                    width={900}
                    height={900}
                    className="w-[560px] h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Availability section */}
        <section className="mx-auto w-screen px-6 lg:px-8 py-20 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: portrait card */}
            <div data-aos="fade-up-right" className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/30 opacity-60 blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                  <img
                    src="https://i.pinimg.com/736x/4e/2e/7a/4e2e7a1b4b04fd4e3d03bef35b61cd80.jpg"
                    alt={t("home2.about.imageAlt")}
                    width={700}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div data-aos="fade-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                  {t("home2.about.badge")}
                </span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
                {t("home2.about.title")}{" "}
                <span className="text-indigo-600">
                  {t("home2.about.highlight")}
                </span>
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                {t("home2.about.desc")}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">280+</div>
                    <div className="text-xs text-slate-500">
                      {t("home2.about.stats.reviewsLabel")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">15+</div>
                    <div className="text-xs text-slate-500">
                      {t("home2.about.stats.yearsLabel")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">49+</div>
                    <div className="text-xs text-slate-500">
                      {t("home2.about.stats.awardsLabel")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                >
                  {t("home2.about.cta")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore / Courses-like collage section (theme colors) */}
        <section className="bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: collage */}
            <div
              data-aos="fade-up-right"
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-xl">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://i.pinimg.com/736x/32/2b/a3/322ba37b4f9bdd6802a6a690afcb54e0.jpg"
                    alt={t("home2.resources.imageAlt")}
                    width={800}
                    height={520}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                </div>

                <div className="absolute -top-8 left-6 w-36 h-36 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center shadow-md">
                  <img
                    src="https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg"
                    alt={t("home2.resources.smallAlt")}
                    width={120}
                    height={120}
                    className="w-20 h-20 rounded-full object-top object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 right-6 w-28 h-28 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center shadow-md">
                  <img
                    src="https://i.pinimg.com/736x/56/85/49/56854952ea1912a7a35a6fd36c45e024.jpg"
                    alt={t("home2.resources.smallAlt2")}
                    width={96}
                    height={96}
                    className="w-16 h-16 rounded-full object-top object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div data-aos="fade-left">
              <p className="text-sm font-medium text-indigo-600">
                {t("home2.resources.badge")}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                {t("home2.resources.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-lg">
                {t("home2.resources.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Tools / Favorite tools section */}
        <section className="bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 ">
            <div className="text-center">
              <p className="text-sm font-medium text-indigo-600">
                {t("home2.tools.badge")}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold">
                {t("home2.tools.title")}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {t("home2.tools.desc")}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-end">
              {tools.map((tool, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  key={i}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 flex flex-col items-center justify-center shadow ring-1 ring-black/5 dark:ring-white/5">
                    {tool.icon}
                  </div>
                  <div className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                    {t(tool.nameKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <p className="text-sm font-medium text-indigo-600">
                {t("home2.testimonials.badge")}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold">
                {t("home2.testimonials.title")}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {t("home2.testimonials.desc")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {testimonials.map((tst, idx) => (
                <blockquote
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: tst.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-indigo-500" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    “{tst.quote}”
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 font-medium">
                      <img
                        src={tst.img}
                        alt=""
                        className=" h-full w-full rounded-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {tst.name}
                      </div>
                      <div className="text-xs text-slate-500">{tst.title}</div>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-indigo-600/5 dark:bg-indigo-900/30 p-8 sm:p-12 text-center ring-1 ring-black/5 dark:ring-white/5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t("home2.cta.title")}
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("home2.cta.desc")}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
              >
                {t("home2.cta.cta_primary")} <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-indigo-600 hover:underline px-4 py-3 rounded-md font-medium"
              >
                {t("home2.cta.cta_secondary")}
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default Home2;
