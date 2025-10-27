import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const posts = [
  {
    id: "1",
    slug: "design-systems-that-scale",
    date: "2025-09-10",
  },
  {
    id: "2",
    slug: "launching-with-confidence",
    date: "2025-08-21",
  },
  {
    id: "3",
    slug: "from-figma-to-production",
    date: "2025-07-15",
  },
];

const clients = [
  { name: "Mulan Park", image: "/images/client-mulan.jpg", alt: "Mulan Park" },
  { name: "Ecom Co", image: "/images/client-2.jpg", alt: "Ecom Co" },
  { name: "Studio X", image: "/images/client-3.jpg", alt: "Studio X" },
  { name: "FinTech Ltd", image: "/images/client-4.jpg", alt: "FinTech Ltd" },
  { name: "Startup Y", image: "/images/client-5.jpg", alt: "Startup Y" },
  { name: "Agency Z", image: "/images/client-6.jpg", alt: "Agency Z" },
];

const features = [{ id: 1 }, { id: 2 }, { id: 3 }];

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("blog.meta.title")}</title>
        <meta name="description" content={t("blog.meta.description")} />
      </Head>

      <SiteHeadder />

      <main className="max-w-screen min-h-screen mx-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent">
        <section className="text-center min-h-screen flex flex-col justify-center bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            {t("blog.hero.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{t("blog.hero.desc")}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
            >
              {t("blog.hero.cta_work")}
            </Link>
            <a
              href="#latest"
              className="inline-block rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              {t("blog.hero.cta_browse")}
            </a>
          </div>
        </section>

        <section id="latest" className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center flex-col">
              <h2 className="text-2xl font-semibold">
                {t("blog.trending.title")}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("blog.trending.desc")}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((p) => (
                <article
                  key={p.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 p-6 bg-white dark:bg-slate-900"
                >
                  <div className="h-48 bg-linear-to-r from-pink-300 to-indigo-400 flex items-center justify-center text-white rounded-md mb-4">
                    <span className="sr-only">
                      {t(`blog.posts.${p.id}.title`)} image
                    </span>
                    <div className="text-lg font-semibold">
                      {t(`blog.posts.${p.id}.title`)}
                    </div>
                  </div>

                  <h3 className="mt-3 font-semibold">
                    {t(`blog.posts.${p.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {t(`blog.posts.${p.id}.excerpt`)}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/${p.slug}`}
                      className="text-sky-600 font-medium"
                    >
                      {t("blog.cta.read_article")}
                    </Link>
                    <div className="text-xs text-slate-500">{p.date}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                {t("blog.advantages.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                {t("blog.advantages.desc")}
              </p>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ✓
                  </span>
                  <div>
                    <div className="font-medium">
                      {t("blog.advantages.items.1.title")}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {t("blog.advantages.items.1.desc")}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ✓
                  </span>
                  <div>
                    <div className="font-medium">
                      {t("blog.advantages.items.2.title")}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {t("blog.advantages.items.2.desc")}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white"
                >
                  {t("blog.advantages.cta")}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/upsell-illustration.jpg"
                  alt="Upsell"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              {t("blog.features.title")}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("blog.features.desc")}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {features.map((f) => (
                <div
                  key={f.id}
                  className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-left bg-white dark:bg-slate-900 shadow-sm"
                >
                  <h3 className="font-semibold text-lg">
                    {t(`blog.features.items.${f.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {t(`blog.features.items.${f.id}.desc`)}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center font-semibold text-sky-600">
                      {f.id}
                    </div>
                    <div className="text-xs text-slate-500">{t("blog.features.badge")} {f.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              {t("blog.clients.title")}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("blog.clients.desc")}
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
                  <div className="mt-2 text-sm">{c.name}</div>
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
                {t("blog.final.title")}
              </h2>
              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("blog.final.desc")}
              </p>

              <div className="mt-10">
                <Link
                  href="/contact-us"
                  className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white"
                >
                  {t("blog.final.cta")}
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

export default BlogPage;
