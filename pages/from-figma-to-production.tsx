import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { Calendar, User, Tag, Share2 } from "lucide-react";

const FromFigmaToProduction: React.FC = () => {
  return (
    <>
      <Head>
        <title>From Figma to Production — Blog</title>
        <meta
          name="description"
          content="Practical steps to convert Figma designs into reusable components, tokens and shipped production UI."
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
                Guides · Design to code
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-900 dark:text-white">
                From Figma to Production
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Practical steps to convert Figma designs into reusable
                components, tokens and shipped production UI.
              </p>

              {/* tag chips and share */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-sky-100 text-sky-700">
                    Figma
                  </span>
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Components
                  </span>
                </div>
                <div className="ml-auto">
                  <button className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-700">
                    <Share2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />{" "}
                    <span className="text-xs">Share</span>
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
                      Alex Morales
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" /> Oct 26, 2025 ·{" "}
                      <span className="inline-flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" /> Design, Engineering
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
                    Reading: 6 min
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                    Level: Intermediate
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Lead image */}
          <figure className="w-full rounded-xl overflow-hidden shadow-lg mb-8 group">
            <div className="relative overflow-hidden">
              <Image
                src="/images/course-illustration-1.jpg"
                alt="Design systems illustration"
                width={1200}
                height={450}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <figcaption className="absolute bottom-3 left-3 text-xs text-white bg-black bg-opacity-40 px-2 py-1 rounded">
                Figma → Production
              </figcaption>
            </div>
          </figure>

          {/* Content */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            <section className="mx-auto prose prose-slate dark:prose-invert lg:prose-lg text-slate-700 dark:text-slate-200 lg:col-span-2">
              <p className="lead first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-sky-600">
                Turning designs into resilient, reusable UI takes more than
                exporting assets. This guide walks through handoff, tokens,
                component APIs, visual testing and deployment patterns that
                shorten the path from Figma to production.
              </p>

              <h2 id="handoff">Design handoff & tokens</h2>
              <p>
                Start with an explicit handoff: export tokens for colors,
                spacing and typography and provide clear usage guidelines. A
                shared token set keeps design and engineering aligned and makes
                theming and platform parity easier.
              </p>

              <h3 id="components">Component APIs & patterns</h3>
              <p>
                Build components with a small, stable public API. Favor
                composition over many boolean props, document expected
                interactions, and expose accessibility hooks (aria-labels,
                keyboard handling) as part of the contract.
              </p>

              <blockquote className="mt-6 border-l-4 border-sky-300 bg-sky-50 dark:bg-slate-800 p-4 rounded">
                <p className="italic text-slate-700 dark:text-slate-300">
                  "Treat components as the contract between designers and
                  engineers — stable APIs reduce friction and speed up
                  delivery."
                </p>
              </blockquote>

              <h3 id="visual-testing">Visual testing & QA</h3>
              <p>
                Integrate visual regression testing (Chromatic, Percy) and
                storybook-driven development so designers can review and sign
                off on components before they land in product pages.
              </p>

              <figure className="my-8 rounded-lg overflow-hidden shadow">
                <Image
                  src="/images/course-illustration-2.jpg"
                  alt="Figma to code"
                  width={1200}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </figure>

              <h3 id="ci">CI/CD & preview environments</h3>
              <p>
                Automate builds and tests in CI. Use per-PR preview deploys and
                visual diffs so reviewers see actual rendered pages. Gate merges
                on passing checks to reduce regressions.
              </p>

              <h3 id="performance">Performance & accessibility</h3>
              <p>
                Optimize images, fonts and critical rendering paths. Run
                automated accessibility checks and manual spot checks for key
                flows to catch issues early.
              </p>

              <h3 id="checklist">Production checklist</h3>
              <ol>
                <li>Publish tokens and ensure platform parity.</li>
                <li>Cover core components with visual and unit tests.</li>
                <li>Run accessibility and performance preflight checks.</li>
                <li>Deploy preview and validate critical user journeys.</li>
              </ol>

              <h3 id="conclusion">Conclusion</h3>
              <p>
                A repeatable design-to-code pipeline reduces cycle time and
                improves quality. Standardize tokens, component contracts and
                automated testing so teams can deliver UI faster and with
                confidence.
              </p>

              <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <h4 className="font-semibold">Ready to start?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  If you'd like help defining or implementing a design system,
                  we offer audits and hands-on setups.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white"
                  >
                    Request an audit
                  </Link>
                </div>
              </div>
            </section>

            <aside className="mt-8 lg:mt-0 lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg shadow-sm">
                  <h5 className="text-sm font-semibold mb-2">On this page</h5>
                  <nav className="text-sm space-y-2">
                    <a
                      href="#handoff"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Handoff
                    </a>
                    <a
                      href="#components"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Components
                    </a>
                    <a
                      href="#visual-testing"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Visual testing
                    </a>
                    <a
                      href="#ci"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      CI / Preview
                    </a>
                    <a
                      href="#performance"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Performance
                    </a>
                    <a
                      href="#checklist"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Checklist
                    </a>
                    <a
                      href="#conclusion"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Conclusion
                    </a>
                  </nav>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg shadow-sm">
                  <h5 className="text-sm font-semibold mb-3">Related posts</h5>
                  <div className="space-y-3">
                    <Link
                      href="/launching-with-confidence"
                      className="block text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Launching with confidence
                    </Link>
                    <Link
                      href="/design-systems-that-scale"
                      className="block text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Design systems that scale
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
