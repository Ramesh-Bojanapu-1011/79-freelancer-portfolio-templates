import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { Calendar, User, Tag, Share2 } from "lucide-react";

const LaunchingWithConfidence: React.FC = () => {
  return (
    <>
      <Head>
        <title>Launching with confidence — Blog</title>
        <meta
          name="description"
          content="A practical launch checklist covering performance, accessibility, testing and monitoring so your product ships smoothly."
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
                Guides · Design systems
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-900 dark:text-white">
                Launching with confidence
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                A practical launch checklist covering performance,
                accessibility, testing and monitoring so your product ships
                smoothly.
              </p>

              {/* tag chips and share */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-sky-100 text-sky-700">
                    Launch
                  </span>
                  <span className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Product
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
                        <Tag className="w-3.5 h-3.5" /> Launch, Release
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
              <img
                src="/images/course-illustration-1.jpg"
                alt="Design systems illustration"
                width={1200}
                height={450}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 text-xs text-white bg-black bg-opacity-40 px-2 py-1 rounded">
                Illustration: launching
              </figcaption>
            </div>
          </figure>

          {/* Content */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            <section className="mx-auto prose prose-slate dark:prose-invert lg:prose-lg text-slate-700 dark:text-slate-200 lg:col-span-2">
              <p className="lead first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-sky-600">
                Launching a product is more than shipping features — it's about
                planning, reducing risk, and keeping users happy. This guide
                covers the practical steps to prepare, test and monitor a launch
                so your team ships with confidence.
              </p>

              <h2 id="plan">Plan your release</h2>
              <p>
                Successful launches start with a clear plan: defined goals,
                stakeholders, rollback criteria and a communication plan. List
                critical journeys and acceptance criteria before you freeze the
                release.
              </p>

              <h3 id="performance">Performance & observability</h3>
              <p>
                Optimize for speed: measure Core Web Vitals, lazy-load
                noncritical assets, and instrument key transactions with tracing
                and metrics. Make sure alerts are actionable and dashboards show
                real user impact.
              </p>

              <blockquote className="mt-6 border-l-4 border-sky-300 bg-sky-50 dark:bg-slate-800 p-4 rounded">
                <p className="italic text-slate-700 dark:text-slate-300">
                  "Ship smaller, observe faster, and be ready to roll back —
                  launches are an experiment, not a single perfect event."
                </p>
              </blockquote>

              <h3 id="accessibility">Accessibility & UX</h3>
              <p>
                Prioritize accessibility checks for critical flows: keyboard
                navigation, screen reader labels and color contrast. A small set
                of automated a11y checks plus manual spot checks goes a long
                way.
              </p>

              <ul>
                <li>
                  Run automated tests (axe, pa11y) on staging and preflight
                  branches.
                </li>
                <li>
                  Validate critical forms and error states work on low
                  bandwidth.
                </li>
                <li>Include accessibility owners in the release checklist.</li>
              </ul>

              <h3 id="testing">Testing & QA</h3>
              <p>
                Combine unit, integration and end-to-end tests for the most
                important flows. Use smoke tests against production-like staging
                environments to catch configuration issues before release.
              </p>

              <figure className="my-8 rounded-lg overflow-hidden shadow">
                <img
                  src="/images/course-illustration-2.jpg"
                  alt="Launch monitoring"
                  width={1200}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </figure>

              <h3 id="rollout">Feature flags & rollout</h3>
              <p>
                Use gradual rollouts and feature flags to limit blast radius.
                Start with internal or opt-in users, then increase exposure
                while monitoring errors and performance.
              </p>

              <h3 id="monitoring">Post-launch monitoring</h3>
              <p>
                After launch, monitor error rates, latency and user journeys
                closely. Have a clear incident response path and make quick
                decisions based on real user data.
              </p>

              <h3 id="checklist">Launch checklist</h3>
              <ol>
                <li>Define success metrics and rollback criteria.</li>
                <li>Run performance and accessibility preflight checks.</li>
                <li>Smoke-test production-like staging environment.</li>
                <li>Plan staged rollout with feature flags.</li>
              </ol>

              <h3 id="conclusion">Conclusion</h3>
              <p>
                Launches are the moment of truth — prepare, test, observe and
                iterate. With clear plans, gradual rollouts and good monitoring
                you can reduce risk and deliver value to customers with
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
                    href="/contact-us"
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
                      href="#plan"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Plan
                    </a>
                    <a
                      href="#performance"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Performance
                    </a>
                    <a
                      href="#accessibility"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Accessibility
                    </a>
                    <a
                      href="#testing"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Testing
                    </a>
                    <a
                      href="#rollout"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Rollout
                    </a>
                    <a
                      href="#monitoring"
                      className="block text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      Monitoring
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
                      href="/from-figma-to-production"
                      className="block text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600"
                    >
                      From Figma to Production
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

export default LaunchingWithConfidence;
