"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { Calendar, User, Tag, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const FromFigmaToProduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("fromFigmaToProduction.meta.title")}</title>
        <meta
          name="description"
          content={t("fromFigmaToProduction.meta.description")}
        />
      </Head>

      <SiteHeadder />

      <main className="max-w-7xl mx-auto px-6 py-16 caret-transparent">
        {/* Hero */}
        <article className="mx-auto">
          <header className="mb-10">
            <div className="relative rounded-2xl p-8 bg-linear-to-r from-sky-50 via-white to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 shadow-lg">
              {/* decorative blurred circle */}
              <div
                className="absolute -z-10 -left-10 top-0 w-72 h-72 bg-linear-to-tr from-sky-200 to-indigo-200 rounded-full opacity-30 blur-2xl"
                aria-hidden
              />
              <p className="text-sm text-sky-600 font-medium">
                {t("fromFigmaToProduction.hero.badge")}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-900 dark:text-white">
                {t("fromFigmaToProduction.hero.title")}
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                {t("fromFigmaToProduction.hero.subtitle")}
              </p>

              {/* tag chips and share */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-sky-100 text-sky-700">
                    {t("fromFigmaToProduction.tags.figma")}
                  </span>
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t("fromFigmaToProduction.tags.components")}
                  </span>
                </div>
                <div className="ml-auto">
                  <button className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-700">
                    <Share2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />{" "}
                    <span className="text-xs">
                      {t("fromFigmaToProduction.share")}
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="flex-none w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-semibold">
                    AM
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {t("fromFigmaToProduction.author.name")}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />{" "}
                      {t("fromFigmaToProduction.date")}
                      <span className="inline-flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />{" "}
                        {t("fromFigmaToProduction.tagsList")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
                    {t("fromFigmaToProduction.reading", { time: "6 min" })}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                    {t("fromFigmaToProduction.level")}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Lead image */}
          <figure className="w-full rounded-xl overflow-hidden shadow-lg mb-8 group">
            <div className="relative overflow-hidden">
              <img
                src="/images/course-illustration-1.jpg"
                alt={t("fromFigmaToProduction.imageAlt1")}
                width={1200}
                height={450}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 text-xs text-white bg-black bg-opacity-40 px-2 py-1 rounded">
                {t("fromFigmaToProduction.figcaption1")}
              </figcaption>
            </div>
          </figure>

          {/* Content */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            <section className="mx-auto prose prose-slate dark:prose-invert lg:prose-lg text-slate-700 dark:text-slate-200 lg:col-span-2">
              <p className="lead first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-sky-600">
                {t("fromFigmaToProduction.lead")}
              </p>

              <h2 id="handoff">{t("fromFigmaToProduction.handoff.title")}</h2>
              <p>{t("fromFigmaToProduction.handoff.body")}</p>

              <h3 id="components">
                {t("fromFigmaToProduction.components.title")}
              </h3>
              <p>{t("fromFigmaToProduction.components.body")}</p>

              <blockquote className="mt-6 border-l-4 border-sky-300 bg-sky-50 dark:bg-slate-800 p-4 rounded">
                <p className="italic text-slate-700 dark:text-slate-300">
                  {t("fromFigmaToProduction.quote")}
                </p>
              </blockquote>

              <h3 id="visual-testing">
                {t("fromFigmaToProduction.visualTesting.title")}
              </h3>
              <p>{t("fromFigmaToProduction.visualTesting.body")}</p>

              <figure className="my-8 rounded-lg overflow-hidden shadow">
                <img
                  src="/images/course-illustration-2.jpg"
                  alt={t("fromFigmaToProduction.imageAlt2")}
                  width={1200}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </figure>

              <h3 id="ci">{t("fromFigmaToProduction.ci.title")}</h3>
              <p>{t("fromFigmaToProduction.ci.body")}</p>

              <h3 id="performance">
                {t("fromFigmaToProduction.performance.title")}
              </h3>
              <p>{t("fromFigmaToProduction.performance.body")}</p>

              <h3 id="checklist">
                {t("fromFigmaToProduction.checklist.title")}
              </h3>
              <ol>
                <li>{t("fromFigmaToProduction.checklist.item1")}</li>
                <li>{t("fromFigmaToProduction.checklist.item2")}</li>
                <li>{t("fromFigmaToProduction.checklist.item3")}</li>
                <li>{t("fromFigmaToProduction.checklist.item4")}</li>
              </ol>

              <h3 id="conclusion">
                {t("fromFigmaToProduction.conclusion.title")}
              </h3>
              <p>{t("fromFigmaToProduction.conclusion.body")}</p>

              <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <h4 className="font-semibold">
                  {t("fromFigmaToProduction.cta.title")}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t("fromFigmaToProduction.cta.desc")}
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact-us"
                    className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white"
                  >
                    {t("fromFigmaToProduction.cta.cta_primary")}
                  </Link>
                </div>
              </div>
            </section>

            <aside className="mt-8 lg:mt-0 lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg shadow-sm">
                  <h5 className="text-sm font-semibold mb-2">
                    {t("fromFigmaToProduction.aside.onThisPage")}
                  </h5>
                  <nav className="text-sm space-y-2">
                    <a
                      href="#handoff"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.handoff")}
                    </a>
                    <a
                      href="#components"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.components")}
                    </a>
                    <a
                      href="#visual-testing"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.visualTesting")}
                    </a>
                    <a
                      href="#ci"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.ci")}
                    </a>
                    <a
                      href="#performance"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.performance")}
                    </a>
                    <a
                      href="#checklist"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.checklist")}
                    </a>
                    <a
                      href="#conclusion"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.aside.nav.conclusion")}
                    </a>
                  </nav>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg shadow-sm">
                  <h5 className="text-sm font-semibold mb-3">
                    {t("fromFigmaToProduction.aside.relatedPosts")}
                  </h5>
                  <div className="space-y-3">
                    <Link
                      href="/launching-with-confidence"
                      className="block text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.related.launching")}
                    </Link>
                    <Link
                      href="/design-systems-that-scale"
                      className="block text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      {t("fromFigmaToProduction.related.designSystems")}
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
};

export default FromFigmaToProduction;
