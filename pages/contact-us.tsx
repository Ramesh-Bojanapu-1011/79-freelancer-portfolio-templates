import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check, ChevronDown } from "lucide-react";

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
      quote:
        "The team helped us ship a scalable design system faster than we expected. Their attention to detail in accessibility and performance was outstanding.",
      name: "Alex Rivera",
      role: "Head of Design, Acme Co.",
      roleShort: "Head of Design",
      handle: "alex.rivera",
      date: "Nov 20, 2024",
      avatar: "/images/avatars/alex.jpg",
      initials: "AR",
    },
    {
      quote:
        "Great collaboration and clear documentation — the handoff to engineering was seamless and saved us weeks of rework.",
      name: "Maya Johnson",
      role: "Product Lead, Nova Labs",
      roleShort: "Product Lead",
      handle: "maya.j",
      date: "Oct 2, 2024",
      avatar: "/images/avatars/maya.jpg",
      initials: "MJ",
    },
    {
      quote:
        "They helped us launch with confidence — fast, pragmatic, and reliably communicative through the whole process.",
      name: "Ravi Lal",
      role: "CTO, BrightApps",
      roleShort: "CTO",
      handle: "ravi.lal",
      date: "Sep 12, 2024",
      avatar: "/images/avatars/ravi.jpg",
      initials: "RL",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact — Enkonix Templates</title>
        <meta
          name="description"
          content="Get in touch for audits, implementations and design+engineering help."
        />
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
                  CONTACT
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  We'd love to hear from you
                  <br />
                  <span className="text-sky-600">
                    Questions, estimates or support — let’s talk.
                  </span>
                </h1>

                <p className="mt-6 text-base text-slate-600 dark:text-slate-300 max-w-xl">
                  Reach out for audits, bespoke implementations or help shipping
                  production-ready UIs. Use the form to send a message or call
                  us during business hours — we typically respond within one
                  business day.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="#contact-form"
                    className="inline-block rounded-md bg-sky-600 px-5 py-3 text-white shadow"
                  >
                    Send a message
                  </a>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Call us:</strong>{" "}
                    <a className="text-sky-600" href="tel:+15551234567">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="text-sm text-slate-500">
                    Business hours: Mon–Fri, 9am–6pm (EST)
                  </div>
                </div>
              </div>

              {/* right: large image card */}
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                  <div className="relative w-full h-80">
                    <img
                      src="/images/contact-illustration.jpg"
                      alt="Contact illustration"
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
          className=" flex justify-center w-screen items-center bg-white dark:bg-slate-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-7xl   py-24 lg:py-32">
            <div>
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Tell us a bit about your project and we'll follow up with next
                steps.
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
                            Name
                          </span>
                          <input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500 transition"
                          />
                        </label>

                        <label className="block">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            Email
                          </span>
                          <input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500 transition"
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          Message
                        </span>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project, timeline and budget (optional)"
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
                          <span>Send occasional updates and resources</span>
                        </label>

                        <div className="text-sm text-slate-500">
                          All messages are private. We reply within 1 business
                          day.
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="submit"
                          className={`inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white shadow-sm hover:bg-sky-700 transition ${
                            status === "sending"
                              ? "opacity-70 pointer-events-none"
                              : ""
                          }`}
                          disabled={status === "sending"}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          {status === "sending" ? "Sending..." : "Send message"}
                        </button>

                        <div aria-live="polite" className="text-sm">
                          {status === "sent" && (
                            <span className="flex items-center gap-2 text-green-600">
                              <Check className="w-4 h-4" /> Thanks — we'll be in
                              touch!
                            </span>
                          )}
                          {status === "error" && (
                            <span className="text-sm text-red-600">
                              Something went wrong — try again.
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
              <h3 className="text-lg font-semibold">Our offices</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">New York</div>
                    <div className="text-sm text-slate-500">
                      123 Market St, New York, NY
                    </div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Remote / EU</div>
                    <div className="text-sm text-slate-500">
                      We operate remotely across EU timezones
                    </div>
                  </div>
                </li>
              </ul>

              {/* 4) Contact methods */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold">Prefer another way?</h4>
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
        <section className="mb-10 flex justify-center w-screen items-center bg-white dark:bg-slate-900">
          <div className="w-full max-w-3xl px-4">
            <h3 className="text-2xl font-semibold text-center">FAQ</h3>

            {/* Controlled accordion implementation */}
            <Accordion
              faqs={[
                {
                  title: "How long until you reply?",
                  subtitle: "Response time & availability",
                  body: `We typically respond within one business day. During busy periods we may take slightly longer — if you need urgent support please call the number above.`,
                  icon: "pin",
                },
                {
                  title: "Do you offer audits?",
                  subtitle: "Design system & accessibility",
                  body: `Yes — we provide design system and accessibility audits. Use the form to request a custom audit; include goals and the scale of your product for an accurate estimate.`,
                  icon: "check",
                },
              ]}
            />
          </div>
        </section>

        {/* NEW: Testimonials (try new look) */}
        <section className="mb-10 flex justify-center w-screen items-center  ">
          <div className="w-full max-w-7xl px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-semibold text-center">
              What our clients say
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
              Trusted by product teams and startups — here are a few kind words
              from our clients.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="relative pt-6 pb-6 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg  "
                >
                  {/* overlapping avatar */}
                  <div className="absolute -top-6 left-6">
                    {t.avatar ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white dark:ring-slate-900 shadow">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          width={48}
                          height={48}
                          className=" object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-semibold ring-2 ring-white dark:ring-slate-900 shadow">
                        {t.initials}
                      </div>
                    )}
                  </div>

                  <div className="ml-0 pl-16">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {t.name}
                      </div>
                      {t.handle && (
                        <div className="text-xs text-slate-500">
                          @{t.handle}
                        </div>
                      )}
                      {t.roleShort && (
                        <span className="ml-auto text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600">
                          {t.roleShort}
                        </span>
                      )}
                    </div>

                    <blockquote className="mt-3 text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                      {t.quote}
                    </blockquote>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-500">Invoice2go</span>
                      </div>
                      <div>{t.date}</div>
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
              <h4 className="text-lg font-semibold">Ready to talk?</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Book a quick call and we'll discuss your project and next steps.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white shadow-sm hover:bg-sky-700 transition"
              >
                <Send className="w-4 h-4" /> Book a call
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Mail className="w-4 h-4" /> Email us
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
                <div className="text-sm font-medium">Office hours</div>
                <div className="mt-2 text-sm text-slate-600">
                  Mon–Fri, 9am–6pm (EST)
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
                  Get directions
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Market+St+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-1 text-sm text-white hover:bg-sky-700 transition"
                >
                  Open in Maps
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
                    Stay in the loop
                  </h4>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    Occasional updates, case studies and practical design tips.
                    We respect your privacy.
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
                      placeholder="you@company.com"
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className={`inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition ${
                        subStatus === "sending"
                          ? "opacity-70 pointer-events-none"
                          : ""
                      }`}
                      disabled={subStatus === "sending"}
                    >
                      <Mail className="w-4 h-4" />
                      <span>
                        {subStatus === "sending" ? "Joining..." : "Join"}
                      </span>
                    </button>
                  </form>
                </div>

                <div className="flex items-center gap-2 md:pl-6">
                  <span className="hidden md:inline text-sm text-slate-500">
                    Follow us
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
                    GH
                  </a>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  We never share your email. Unsubscribe anytime.
                </div>
                <div aria-live="polite" className="text-sm">
                  {subStatus === "sent" && (
                    <span className="inline-flex items-center gap-2 text-green-600">
                      <Check className="w-4 h-4" /> Subscribed — check your
                      inbox
                    </span>
                  )}
                  {subStatus === "error" && (
                    <span className="text-red-600">
                      Subscription failed — try again
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
