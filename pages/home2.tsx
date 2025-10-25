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
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home2 = () => {
  const testimonials = [
    {
      quote:
        "These templates helped me land my first two clients — clean, fast and easy to customize. Support was quick and helpful.",
      name: "Aman Singh",
      title: "UX Designer",
      rating: 5,
    },
    {
      quote:
        "I launched a portfolio in a day. The SEO-focused markup and accessible patterns saved me hours of work.",
      name: "Lina Park",
      title: "Frontend Developer",
      rating: 5,
    },
    {
      quote:
        "Great designs and sensible defaults — perfect for freelancers who want a professional online presence without the hassle.",
      name: "Marco Ruiz",
      title: "Product Designer",
      rating: 4,
    },
  ];

  const tools = [
    {
      name: "Figma",
      pct: 98,
      icon: <PenTool className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "Sketch",
      pct: 92,
      icon: <Layers className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "Photoshop",
      pct: 90,
      icon: <ImageIcon className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "After Effects",
      pct: 85,
      icon: <Film className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "Storybook",
      pct: 90,
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "InVision",
      pct: 95,
      icon: <Aperture className="h-6 w-6 text-indigo-500" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Freelancer / Portfolio Templates</title>
        <meta
          name="description"
          content="Beautiful freelancer portfolio templates"
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent">
        {/* Hero (dark profile) */}
        <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: text */}
              <div className="text-center lg:text-left">
                <div className="inline-block rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm text-indigo-600 font-medium">
                  OUR SERVICES
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  We help freelancers grow
                  <br />
                  <span className="text-indigo-500">
                    Design • Development • Branding
                  </span>
                </h1>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                  We build polished portfolios, landing pages and case studies
                  that highlight your work and convert visitors into clients.
                  From visual design to lightweight implementation and
                  SEO-friendly content, we deliver end-to-end solutions for
                  independent professionals.
                </p>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="facebook"
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </a>
                    <a
                      href="#"
                      aria-label="twitter"
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Twitter className="h-4 w-4 text-sky-500" />
                    </a>
                    <a
                      href="#"
                      aria-label="linkedin"
                      className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                  <img 
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="Jenna portrait"
                    width={900}
                    height={900}
                    className="w-[560px] h-auto object-cover"
                  />
                </div>
                {/* decorative lines */}
                <div className="hidden lg:block absolute right-8 -mr-10 w-44 h-44 rounded-full border-2 border-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* About / Availability section */}
        <section className="mx-auto   w-screen   px-6 lg:px-8 py-20 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: portrait card */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/30 opacity-60 blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                  <img 
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="profile"
                    width={700}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm w-max">
                <span className="text-indigo-700 dark:text-indigo-200 font-medium">
                  ABOUT US
                </span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
                I AM AVAILABLE FOR{" "}
                <span className="text-indigo-600">UI/UX DESIGN</span> PROJECTS
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                I craft user-centered interfaces and brand-driven experiences
                that help freelancers and small teams present work with clarity
                and confidence. From research and wireframes to polished UI and
                handoff-ready assets — I cover the full product design flow.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">280+</div>
                    <div className="text-xs text-slate-500">Google Review</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">15+</div>
                    <div className="text-xs text-slate-500">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                  <div className="h-10 w-10 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">49+</div>
                    <div className="text-xs text-slate-500">Award Winning</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                >
                  GET IN TOUCH
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Explore / Courses-like collage section (theme colors) */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: collage */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="collage main"
                    width={800}
                    height={520}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                </div>

                <div className="absolute -top-8 left-6 w-36 h-36 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center shadow-md">
                  <img 
                    src="https://i.postimg.cc/5ym0KZ1Y/avatar.jpg"
                    alt="small"
                    width={120}
                    height={120}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 right-6 w-28 h-28 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center shadow-md">
                  <img 
                    src="https://i.postimg.cc/5ym0KZ1Y/avatar.jpg"
                    alt="small2"
                    width={96}
                    height={96}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <p className="text-sm font-medium text-indigo-600">RESOURCES</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                Explore ready-made templates and resources
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-lg">
                Dive into a curated collection of templates, UI kits and
                walkthroughs designed for freelancers. Quickly launch a
                professional portfolio, or customize a landing page to match
                your brand — everything is optimized for performance and SEO.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                >
                  Browse templates
                </Link>
                <Link
                  href="/resources"
                  className="text-indigo-600 hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tools / Favorite tools section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-sm font-medium text-indigo-600">
              My Favorite Tools
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold">
              Exploring the tools behind my designs
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Tools and libraries we use to build polished, performant
              portfolios.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-end">
            {tools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 flex flex-col items-center justify-center shadow ring-1 ring-black/5 dark:ring-white/5">
                  {tool.icon}
                </div>
                <div className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-sm font-medium text-indigo-600">TESTIMONIALS</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold">
              Loved by freelancers
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real feedback from people using our templates and services to get
              more clients and ship faster.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-indigo-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  “{t.quote}”
                </p>

                <footer className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 font-medium">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500">{t.title}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Call-to-action section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-indigo-600/5 dark:bg-indigo-900/30 p-8 sm:p-12 text-center ring-1 ring-black/5 dark:ring-white/5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Ready to launch your portfolio?
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Start with a polished template and get support when you need it.
              We will help you ship faster and look professional.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-indigo-600 hover:underline px-4 py-3 rounded-md font-medium"
              >
                Browse templates
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
