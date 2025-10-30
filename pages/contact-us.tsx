import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
    hp: "",
  });
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "sent" | "error"
  >("idle");

  // small subscription state for the new newsletter section
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    null | "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // unify input/textarea handling and support checkboxes
    const target = e.target as HTMLInputElement;
    const { name, type } = target;
    const value =
      type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // If honeypot is filled, silently accept (spam bot)
      if (formState.hp) {
        setStatus("sent");
        setFormState({
          name: "",
          email: "",
          message: "",
          newsletter: false,
          hp: "",
        });
        return;
      }

      // Mock submit: in a real app, POST to an API route or external service
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      setFormState({
        name: "",
        email: "",
        message: "",
        newsletter: false,
        hp: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriptionEmail) return;
    setSubStatus("sending");
    try {
      // mock subscribe action
      await new Promise((r) => setTimeout(r, 600));
      setSubStatus("sent");
      setSubscriptionEmail("");
    } catch (err) {
      setSubStatus("error");
    }
  };

  const { t } = useTranslation();

  // Testimonials data (rendered with .map below)
  const testimonials: Array<{
    quote: string;
    name: string;
    role: string;
    initials: string;
    handle?: string;
    date?: string;
    roleShort?: string;
    avatar?: string;
  }> = [
    {
      quote: t("contact.testimonials.items.0.quote"),
      name: t("contact.testimonials.items.0.name"),
      role: t("contact.testimonials.items.0.role"),
      roleShort: t("contact.testimonials.items.0.roleShort"),
      handle: t("contact.testimonials.items.0.handle"),
      date: t("contact.testimonials.items.0.date"),
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      initials: t("contact.testimonials.items.0.initials"),
    },
    {
      quote: t("contact.testimonials.items.1.quote"),
      name: t("contact.testimonials.items.1.name"),
      role: t("contact.testimonials.items.1.role"),
      roleShort: t("contact.testimonials.items.1.roleShort"),
      handle: t("contact.testimonials.items.1.handle"),
      date: t("contact.testimonials.items.1.date"),
      avatar: " https://randomuser.me/api/portraits/women/68.jpg",
      initials: t("contact.testimonials.items.1.initials"),
    },
    {
      quote: t("contact.testimonials.items.2.quote"),
      name: t("contact.testimonials.items.2.name"),
      role: t("contact.testimonials.items.2.role"),
      roleShort: t("contact.testimonials.items.2.roleShort"),
      handle: t("contact.testimonials.items.2.handle"),
      date: t("contact.testimonials.items.2.date"),
      avatar: " https://randomuser.me/api/portraits/men/12.jpg",
      initials: t("contact.testimonials.items.2.initials"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
      </Head>

      <SiteHeadder />

      <main className=" min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100  caret-transparent ">
        {/* 1) Hero - magazine style split */}
        <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24  ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* left: contact text */}
              <div>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-sky-50 text-sky-700">
                  {t("contact.hero.badge")}
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  {t("contact.hero.title_line1")}
                  <br />
                  <span className="text-sky-600">
                    {t("contact.hero.title_line2")}
                  </span>
                </h1>

                <p className="mt-6 text-base text-slate-600 dark:text-slate-300 max-w-xl">
                  {t("contact.hero.desc")}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium"
                  >
                    {t("contact.actions.send_message")}
                  </a>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>{t("contact.actions.call_us_label")}</strong>{" "}
                    <a className="text-sky-600" href="tel:+15551234567">
                      {t("contact.actions.phone")}
                    </a>
                  </div>
                  <div className="text-sm text-slate-500">
                    {t("contact.actions.hours")}
                  </div>
                </div>
              </div>

              {/* right: large image card */}
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                  <div className="relative w-full h-80">
                    <img
                      src="https://i.pinimg.com/736x/68/fe/77/68fe77ee99736755043a3f52239b9ec1.jpg"
                      alt={t("contact.hero.image_alt")}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Contact form */}
        <section
          id="contact-form"
          className=" flex justify-center w-screen items-center bg-linear-to-b   from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8   max-w-7xl   py-24 lg:py-32">
            <div>
              <h2 className="text-2xl font-semibold">
                {t("contact.form.title")}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t("contact.form.desc")}
              </p>

              <div className="mt-6">
                <div className="flex rounded-xl shadow-lg overflow-hidden">
                  <div className="w-1 bg-sky-600" />
                  <div className="flex-1 p-6 bg-white dark:bg-slate-900">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* honeypot - hidden field to deter bots */}
                      <input
                        name="hp"
                        value={formState.hp}
                        onChange={handleChange}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="block">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {t("contact.form.name_label")}
                          </span>
                          <input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder={t("contact.form.name_placeholder")}
                            className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500 transition"
                          />
                        </label>

                        <label className="block">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {t("contact.form.email_label")}
                          </span>
                          <input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder={t("contact.form.email_placeholder")}
                            className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500 transition"
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          {t("contact.form.message_label")}
                        </span>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder={t("contact.form.message_placeholder")}
                          className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500 transition"
                        />
                      </label>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <input
                            name="newsletter"
                            type="checkbox"
                            checked={!!formState.newsletter}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                          />
                          <span>{t("contact.form.newsletter_label")}</span>
                        </label>

                        <div className="text-sm text-slate-500">
                          {t("contact.form.privacy")}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="submit"
                          className={`inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium ${
                            status === "sending"
                              ? "opacity-70 pointer-events-none"
                              : ""
                          }`}
                          disabled={status === "sending"}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          {status === "sending"
                            ? t("contact.form.sending")
                            : t("contact.form.send_button")}
                        </button>

                        <div aria-live="polite" className="text-sm">
                          {status === "sent" && (
                            <span className="flex items-center gap-2 text-green-600">
                              <Check className="w-4 h-4" />{" "}
                              {t("contact.form.thanks")}
                            </span>
                          )}
                          {status === "error" && (
                            <span className="text-sm text-red-600">
                              {t("contact.form.error")}
                            </span>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* 3) Offices */}
            <div>
              <h3 className="text-lg font-semibold">
                {t("contact.offices.title")}
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {t("contact.offices.location1")}
                    </div>
                    <div className="text-sm text-slate-500">
                      {t("contact.offices.location1desc")}
                    </div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {t("contact.offices.location2")}
                    </div>
                    <div className="text-sm text-slate-500">
                      {t("contact.offices.location2desc")}
                    </div>
                  </div>
                </li>
              </ul>

              {/* 4) Contact methods */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold">
                  {t("contact.alternate.title")}
                </h4>
                <div className="mt-3 space-y-3">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Mail className="w-4 h-4" /> hello@example.com
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Phone className="w-4 h-4" /> +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5) FAQ - controlled accordion (try new) */}
        <section className=" flex justify-center w-screen items-center  bg-linear-to-b   from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="w-full mb-10 max-w-3xl py-12 px-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("contact.faq.title")}
            </h3>

            {/* Controlled accordion implementation */}
            <Accordion
              faqs={[
                {
                  title: t("contact.faq.items.0.title"),
                  subtitle: t("contact.faq.items.0.subtitle"),
                  body: t("contact.faq.items.0.body"),
                  icon: "pin",
                },
                {
                  title: t("contact.faq.items.1.title"),
                  subtitle: t("contact.faq.items.1.subtitle"),
                  body: t("contact.faq.items.1.body"),
                  icon: "check",
                },
              ]}
            />
          </div>
        </section>

        {/* NEW: Testimonials (try new look) */}
        <section className="bg-linear-to-b  flex flex-col justify-center items-center  from-white to-slate-50 dark:from-slate-900 dark:to-slate-800  ">
          <div className="  mb-10  items-center      max-w-7xl px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-semibold text-center">
              {t("contact.testimonials.title")}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
              {t("contact.testimonials.desc")}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((test, i) => (
                <figure
                  key={i}
                  className="relative pt-6 pb-6 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg  "
                >
                  {/* overlapping avatar */}
                  <div className="absolute -top-6 left-6">
                    {test.avatar ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white dark:ring-slate-900 shadow">
                        <img
                          src={test.avatar}
                          alt={test.name}
                          width={48}
                          height={48}
                          className=" object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-semibold ring-2 ring-white dark:ring-slate-900 shadow">
                        {test.initials}
                      </div>
                    )}
                  </div>

                  <div className="ml-0 pl-16">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {test.name}
                      </div>
                      {test.handle && (
                        <div className="text-xs text-slate-500">
                          @{test.handle}
                        </div>
                      )}
                      {test.roleShort && (
                        <span className="ml-auto text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600">
                          {test.roleShort}
                        </span>
                      )}
                    </div>

                    <blockquote className="mt-3 text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                      {test.quote}
                    </blockquote>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-500">Invoice2go</span>
                      </div>
                      <div>{test.date}</div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 6) CTA / Map placeholder */}
        <section className="rounded-lg p-6 bg-linear-to-r from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700">
          <div className="md:flex md:items-center md:justify-between md:gap-6">
            <div className="md:flex-1">
              <h4 className="text-lg font-semibold">
                {t("contact.cta.title")}
              </h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t("contact.cta.desc")}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
              >
                <Send className="w-4 h-4" /> {t("contact.cta.book")}
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Mail className="w-4 h-4" /> {t("contact.cta.email_us")}
              </a>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-48 rounded overflow-hidden border border-slate-100 dark:border-slate-700">
              {/* Embedded Google Maps (fallback to static placeholder if blocked) */}
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=123+Market+St+New+York,+NY&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="h-48 rounded border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between">
              <div>
                <div className="text-sm font-medium">
                  {t("contact.office.title")}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {t("contact.actions.hours")}
                </div>
                <div className="mt-3">
                  <a href="tel:+15551234567" className="text-sky-600">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=123+Market+St+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 transition"
                >
                  {t("contact.map.get_directions")}
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Market+St+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md font-medium"
                >
                  {t("contact.map.open")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7) Stay in the loop - gradient band variant (try new) */}
        <section className="mt-8 mb-12 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden bg-linear-to-r from-sky-600/10 via-white to-sky-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 md:p-8">
                <div className="md:flex-1">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {t("contact.subscribe.title")}
                  </h4>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {t("contact.subscribe.desc")}
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center md:justify-end gap-4 w-full">
                  <form
                    onSubmit={handleSubscribe}
                    className="flex w-full max-w-2xl items-center gap-3"
                  >
                    <label className="sr-only" htmlFor="subscribe-email">
                      Email address
                    </label>
                    <input
                      id="subscribe-email"
                      type="email"
                      value={subscriptionEmail}
                      onChange={(e) => setSubscriptionEmail(e.target.value)}
                      placeholder={t("contact.subscribe.placeholder")}
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className={`inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium ${
                        subStatus === "sending"
                          ? "opacity-70 pointer-events-none"
                          : ""
                      }`}
                      disabled={subStatus === "sending"}
                    >
                      <Mail className="w-4 h-4" />
                      <span>
                        {subStatus === "sending"
                          ? t("contact.subscribe.joining")
                          : t("contact.subscribe.join")}
                      </span>
                    </button>
                  </form>
                </div>

                <div className="flex items-center gap-2 md:pl-6">
                  <span className="hidden md:inline text-sm text-slate-500">
                    {t("contact.social.follow")}
                  </span>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-sky-600 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                          fill="#1d9bf0"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-slate-700 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-slate-700 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 128 128"
                    >
                      <g fill="#181616">
                        <path
                          fillRule="evenodd"
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  {t("contact.subscribe.privacy")}
                </div>
                <div aria-live="polite" className="text-sm">
                  {subStatus === "sent" && (
                    <span className="inline-flex items-center gap-2 text-green-600">
                      <Check className="w-4 h-4" />{" "}
                      {t("contact.subscribe.subscribed")}
                    </span>
                  )}
                  {subStatus === "error" && (
                    <span className="text-red-600">
                      {t("contact.subscribe.error")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

// Small accessible accordion component used by the FAQ section.
function Accordion({
  faqs,
}: {
  faqs: Array<{
    title: string;
    subtitle?: string;
    body: string;
    icon?: "pin" | "check";
  }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  function Item({ item, index }: { item: any; index: number }) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight);
      // update height on resize
      function onResize() {
        if (contentRef.current) setHeight(contentRef.current.scrollHeight);
      }
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    const isOpen = openIndex === index;

    return (
      <div className="overflow-hidden  rounded-lg border border-slate-100 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => toggle(index)}
          className="w-full text-left flex items-center justify-between p-4 focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              {item.icon === "check" ? (
                <Check className="w-5 h-5" />
              ) : (
                <MapPin className="w-5 h-5" />
              )}
            </div>
            <div className={``}>
              <div className="font-medium">{item.title}</div>
              {item.subtitle && (
                <div className="text-sm text-slate-500">{item.subtitle}</div>
              )}
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          ref={contentRef}
          style={{ maxHeight: isOpen ? height : 0 }}
          className={`px-4     text-sm text-slate-600 dark:text-slate-300 overflow-hidden transition-[max-height] duration-300`}
        >
          <div className="py-4">{item.body}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-4">
      {faqs.map((f, i) => (
        <Item key={i} item={f} index={i} />
      ))}
    </div>
  );
}

export default ContactUs;
