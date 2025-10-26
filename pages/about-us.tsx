import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t("about.pillars.speed.title"),
      desc: t("about.pillars.speed.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 32 32"
        >
          <path
            fill="#ff822d"
            d="m17.831 3.306l-9.726 13.9c-.26.37-.045.794.395.794h4c.35 0 .5.14.5.5v10.763c0 .71.86 1.02 1.27.45l9.618-12.828c.27-.37.052-.885-.388-.885H20c-.5 0-1-.5-1-1V3.5c0-.5-.76-.774-1.169-.194"
          ></path>
        </svg>
      ),
    },
    {
      title: t("about.pillars.accessibility.title"),
      desc: t("about.pillars.accessibility.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="url(#SVGiQCt3dKb)"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
            ></path>
            <path
              fill="url(#SVGcxkzteKY)"
              fillRule="evenodd"
              d="M9.115 2.422a9.6 9.6 0 0 0-.85 1.704c-.48 1.23-.838 2.723-1.049 4.374H2.63q-.271.725-.43 1.5h4.87a29 29 0 0 0 .088 5h-4.7q.246.78.61 1.5h4.297c.215 1.255.52 2.397.9 3.374c.246.63.53 1.205.85 1.704A10 10 0 0 0 12 22a10 10 0 0 0 2.885-.422a9.6 9.6 0 0 0 .85-1.704c.38-.977.685-2.119.9-3.374h4.298q.364-.72.61-1.5h-4.7a29 29 0 0 0 .088-5h4.87a10 10 0 0 0-.43-1.5h-4.587c-.21-1.651-.57-3.144-1.05-4.374a9.6 9.6 0 0 0-.849-1.704A10 10 0 0 0 12 2a10 10 0 0 0-2.885.422M8.73 8.5c.2-1.47.522-2.774.934-3.829c.36-.92.77-1.612 1.194-2.062C11.278 2.163 11.663 2 12 2s.723.163 1.143.609c.423.45.835 1.142 1.194 2.062c.412 1.055.734 2.36.934 3.829zM12 22c.338 0 .723-.163 1.143-.609c.423-.45.835-1.142 1.194-2.062c.316-.81.58-1.765.775-2.829H8.888c.196 1.064.46 2.02.775 2.829c.36.92.77 1.612 1.194 2.062c.42.446.805.609 1.143.609M8.5 12c0 1.048.058 2.055.166 3h6.668a27 27 0 0 0 .094-5H8.573a27 27 0 0 0-.073 2"
              clipRule="evenodd"
            ></path>
            <defs>
              <radialGradient
                id="SVGcxkzteKY"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="rotate(-135.338 12.654 4.738)scale(16.0089 16.0078)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#25a2f0"></stop>
                <stop offset={0.974} stopColor="#3bd5ff"></stop>
              </radialGradient>
              <linearGradient
                id="SVGiQCt3dKb"
                x1={6.444}
                x2={20.889}
                y1={5.333}
                y2={18.667}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#29c3ff"></stop>
                <stop offset={1} stopColor="#2052cb"></stop>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ),
    },
    {
      title: t("about.pillars.seo.title"),
      desc: t("about.pillars.seo.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#ca0b4a"
              d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"
            ></path>
            <path
              fill="#f4f4f4"
              d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"
            ></path>
            <path
              fill="#9b9b9b"
              d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"
            ></path>
            <path
              fill="#83cbff"
              d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"
            ></path>
            <path
              fill="#ff8257"
              d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"
            ></path>
            <path
              fill="#533566"
              d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"
            ></path>
            <path
              fill="#f92f60"
              d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"
            ></path>
          </g>
        </svg>
      ),
    },
  ];

  // small stat badge component with a simple animation that starts when `start` is true
  const StatBadge = ({
    label,
    value,
    suffix,
    start,
  }: {
    label: string;
    value: number;
    suffix?: string;
    start?: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // don't animate until start is true

      let raf = 0;
      const duration = 900; // ms
      const startTime = performance.now();

      const loop = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) raf = requestAnimationFrame(loop);
        else setCount(value);
      };

      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [value, start]);

    return (
      <div className="rounded-lg bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 text-center">
        <div className="text-3xl font-extrabold text-indigo-600">
          {count}
          {suffix}
        </div>
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {label}
        </div>
      </div>
    );
  };

  // ref and state to control when stats should start animating
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const stats = [
    { label: t("about.stats.items.0.label"), value: 280, suffix: "+" },
    { label: t("about.stats.items.1.label"), value: 15, suffix: "+" },
    { label: t("about.stats.items.2.label"), value: 49, suffix: "+" },
  ];

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    if (statsVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [statsVisible]);
  return (
    <>
      <Head>
        <title>{t("about.meta.title")}</title>
        <meta name="description" content={t("about.meta.description")} />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 caret-transparent">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block rounded-full bg-indigo-50 dark:bg-indigo-900 px-3 py-1 text-sm text-indigo-600 font-medium">
                  {t("about.hero.badge")}
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  {t("about.hero.title")} <br />
                  <span className="text-indigo-500">
                    {t("about.hero.subtitle")}
                  </span>
                </h1>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                  {t("about.hero.desc")}
                </p>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    {t("about.hero.cta_work")}
                  </Link>

                  <Link
                    href="/templates"
                    className="text-indigo-600 hover:underline"
                  >
                    {t("about.hero.cta_browse")}
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5 w-full max-w-md">
                  <img
                    src="https://i.postimg.cc/4d2j6w1y/portfolio-sample.jpg"
                    alt="studio"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Mission (refreshed) */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                {t("about.mission.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
                {t("about.mission.desc")}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  {t("about.mission.cta_services")}
                </Link>
                <Link
                  href="/contact-us"
                  className="text-indigo-600 hover:underline"
                >
                  {t("about.mission.cta_contact")}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 text-lg">
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Stats — animated counters idea */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {t("about.stats.heading")}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {t("about.stats.desc")}
              </p>
            </div>

            <div
              ref={statsRef}
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Animated stat badges — they start when the section becomes visible */}
              {stats.map((s, i) => (
                <StatBadge
                  key={i}
                  label={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  start={statsVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Team */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              {t("about.team.title")}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("about.team.desc")}
            </p>
          </div>

          {/* New: interactive team cards with hover overlay showing bio/contact */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(
              [
                {
                  name: "Jenna Doe",
                  role: "Lead Designer",
                  img: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                  bio: "Design lead focused on systems, UX and beautiful interfaces.",
                  contact: "jenna@example.com",
                },
                {
                  name: "Ramesh B.",
                  role: "Frontend Engineer",
                  img: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                  bio: "Loves performant, accessible frontends and clean code.",
                  contact: "ramesh@example.com",
                },
                {
                  name: "Sana K.",
                  role: "Product Designer",
                  img: "https://i.postimg.cc/5ym0KZ1Y/avatar.jpg",
                  bio: "Product-minded designer who prototypes and ships fast.",
                  contact: "sana@example.com",
                },
              ] as const
            ).map((m, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                {/* Card body */}
                <div className="p-6 flex flex-col items-center gap-4">
                  <div className="relative w-50 h-50    ">
                    <img
                      src={m.img}
                      alt={m.name}
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full ring-1 ring-black/5 dark:ring-white/5 object-cover"
                    />
                    <div className="absolute    -bottom-2    left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-full px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm ring-1 ring-black/5">
                      {t(`about.team.members.${i}.role`, {
                        defaultValue: m.role,
                      })}
                    </div>
                  </div>

                  <div className="mt-6 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {t(`about.team.members.${i}.name`, {
                      defaultValue: m.name,
                    })}
                  </div>

                  <p className="mt-2 text-sm text-slate-500 max-w-xs text-center">
                    {t(`about.team.members.${i}.bio`, { defaultValue: m.bio })}
                  </p>
                </div>

                {/* Slide-up action panel */}
                <div className="absolute left-0 right-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-indigo-600/95 text-white p-4 rounded-b-2xl flex items-center justify-between gap-4">
                    <div className="text-sm">Reach out</div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`mailto:${m.contact}`}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={30}
                          height={30}
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#96a9b2"
                            d="M511.824 425.007c1.941-5.245-220.916-173.519-220.916-173.519c-27.9-20.589-42.574-20.913-70.164 0c0 0-222.532 168.138-220.659 173.311l-.045.038c.023.045.06.076.091.117a48.5 48.5 0 0 0 8.119 14.157c1.473 1.786 3.248 3.282 4.955 4.837l-.083.064c.136.121.317.177.453.298c7.235 6.454 16.359 10.634 26.495 11.827c.159.019.287.102.446.121h.612c1.541.147 3.006.517 4.584.517h420.721c20.717 0 38.269-13.028 45.241-31.291c.083-.136.211-.234.287-.374z"
                          ></path>
                          <path
                            fill="#b9c5c6"
                            d="M256.133 232.176L1.216 423.364V152.515c0-26.4 21.397-47.797 47.797-47.797h414.24c26.4 0 47.797 21.397 47.797 47.797v270.849z"
                          ></path>
                          <path
                            fill="#edece6"
                            d="m4.189 135.896l217.645 170.949c27.47 20.271 41.918 20.591 69.083 0L508.22 136.167c-3.77-6.834-9.414-12.233-15.869-16.538l2.989-2.342c-7.295-6.641-16.62-10.946-26.971-12.058l-424.455.015c-10.322 1.097-19.662 5.417-26.942 12.043l2.967 2.313c-6.38 4.245-11.972 9.551-15.75 16.296"
                          ></path>
                          <path
                            fill="#dce2e2"
                            d="M4.118 136.254C2.207 141.419 221.63 307.099 221.63 307.099c27.47 20.271 41.918 20.591 69.083 0c0 0 219.103-165.546 217.258-170.64l.045-.037c-.022-.045-.059-.074-.089-.115a47.7 47.7 0 0 0-7.994-13.939c-1.45-1.759-3.198-3.231-4.878-4.763l.082-.063c-.134-.119-.312-.175-.446-.294c-7.124-6.354-16.107-10.47-26.086-11.645c-.156-.019-.283-.1-.439-.119h-.602c-1.517-.145-2.96-.509-4.514-.509H48.81c-20.398 0-37.68 12.828-44.543 30.809c-.082.134-.208.231-.283.368z"
                          ></path>
                          <path
                            fill="#597b91"
                            d="M291.401 154.645h-38.632a6.155 6.155 0 0 0-6.155 6.155v21.722a6.155 6.155 0 0 0 6.155 6.155h31.415a6.155 6.155 0 0 1 6.155 6.155v11.616a6.155 6.155 0 0 1-6.155 6.155h-31.415a6.155 6.155 0 0 0-6.155 6.155v23.578a6.155 6.155 0 0 0 6.155 6.155h41.316a6.155 6.155 0 0 1 6.155 6.155v12.441a6.155 6.155 0 0 1-6.155 6.155h-75.76a6.155 6.155 0 0 1-6.155-6.155V136.461a6.155 6.155 0 0 1 6.155-6.155h74.81c3.749 0 6.627 3.322 6.092 7.033l-1.733 12.028a6.156 6.156 0 0 1-6.093 5.278"
                          ></path>
                        </svg>
                      </Link>
                      <Link
                        href={`https://linkedin.com/search/results/all/?keywords=${encodeURIComponent(
                          m.name,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20"
                        aria-label={`LinkedIn ${m.name}`}
                      >
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
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#0a66c2"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Approach / How we work */}
        <section className="mx-auto  w-screen   py-16 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Our approach
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We combine design systems, accessible markup, and
              performance-minded code to deliver templates that are
              production-ready. Work with templates or hire us for custom
              setups.
            </p>

            {/* New: 3-step process timeline */}
            <div className="mt-12">
              <div className="relative">
                {/* horizontal connector */}
                <div className="hidden sm:block absolute top-8 left-8 right-8 h-0.5 bg-slate-100 dark:bg-slate-700" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Plan",
                      desc: "We discover goals, gather requirements and prepare a focused brief.",
                      color: "bg-indigo-600",
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 3v18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Build",
                      desc: "Design and develop accessible, performant templates ready for content.",
                      color: "bg-emerald-500",
                      icon: (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z"
                            stroke="currentColor"
                            strokeWidth="0"
                            fill="currentColor"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Launch",
                      desc: "Deploy, optimize and hand off with clear docs and optional setup support.",
                      color: "bg-indigo-500",
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="relative sm:px-6">
                      <div className="flex items-start sm:flex-col sm:items-center gap-4">
                        <div className="flex items-center justify-center">
                          <div
                            className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md ring-1 ring-black/5`}
                          >
                            {step.icon}
                          </div>
                        </div>

                        <div className="sm:text-center">
                          <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {t(`about.approach.items.${idx}.title`, {
                              defaultValue: step.title,
                            })}
                          </div>
                          <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md">
                            {t(`about.approach.items.${idx}.desc`, {
                              defaultValue: step.desc,
                            })}
                          </div>
                        </div>
                      </div>

                      {/* connector dot for small screens */}
                      {idx < 2 && (
                        <div className="sm:hidden mt-6 flex items-center justify-center">
                          <div className="h-0.5 w-28 bg-slate-100 dark:bg-slate-700" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-indigo-600/5 dark:bg-indigo-900/30 p-8 sm:p-12 text-center ring-1 ring-black/5 dark:ring-white/5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t("about.cta.title")}
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("about.cta.desc")}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
              >
                {t("about.cta.cta_primary")}
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-indigo-600 hover:underline px-4 py-3 rounded-md font-medium"
              >
                {t("about.cta.cta_secondary")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default AboutUsPage;
