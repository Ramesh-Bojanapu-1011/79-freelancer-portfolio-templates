"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { readAuth, readUsers } from "../../pages/auth";

const services = [
  { label: "All Services", href: "/services" },

  { label: "Design Systems & UI", href: "/design-systems-&-ui" },
  { label: "Frontend Development", href: "/frontend-development" },
  { label: "SEO & Performance", href: "/seo-performance" },
  { label: "Branding & Identity", href: "/branding-&-identity" },
  { label: "Portfolio Templates", href: "/portfolio-templates" },
  { label: "Setup & Support", href: "/setup-&-support" },
];

export default function SiteHeadder() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [homeOpen, setHomeOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [mobileprofileOpen, setMobileProfileOpen] = React.useState(false);
  const users = readUsers();

  // Avoid reading `ft_auth` during server render to prevent hydration mismatch.
  // We'll compute initials on the client after mount.
  const [initials, setInitials] = React.useState("R");

  React.useEffect(() => {
    try {
      const auth = readAuth();
      if (!auth) return;
      const userObj = auth as {
        firstName?: string;
        lastName?: string;
        email?: string;
      };
      const f = (userObj.firstName || "").trim();
      const l = (userObj.lastName || "").trim();
      let computed = "R";
      if (f || l) computed = (f.charAt(0) + (l.charAt(0) || "")).toUpperCase();
      else if (userObj.email) computed = userObj.email.charAt(0).toUpperCase();
      setInitials(computed);
    } catch (e) {
      // ignore
    }
  }, []);

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setHomeOpen(false);
        setServicesOpen(false);
        setLangOpen(false);
        setProfileOpen(false);
        setMobileProfileOpen(false);
        setMobileOpen(false);
        setMobileHomeOpen(false);
        setMobileServicesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setHomeOpen(false);
        setServicesOpen(false);
        setLangOpen(false);
        setProfileOpen(false);
        setMobileOpen(false);
        setMobileHomeOpen(false);
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  console.log("SiteHeader initials:", initials);

  function handleLogout(): void {
    // Implement logout functionality (read auth/users at runtime to avoid SSR reads)
    try {
      const auth = readAuth();
      if (!auth) return;
      const user = auth as { email?: string };
      const currentUsers = readUsers();
      const updatedUsers = currentUsers.map((u) =>
        u.email === user.email
          ? { ...u, logoutTime: new Date().toISOString() }
          : u,
      );

      if (typeof window !== "undefined") {
        localStorage.removeItem("ft_auth");
        localStorage.setItem("ft_users", JSON.stringify(updatedUsers));
        window.location.href = "/auth";
      }
    } catch (error) {
      console.error("Failed during logout:", error);
    }
  }

  return (
    <header className="w-screen bg-linear-to-r from-white  to-gray-100 dark:from-gray-900 dark:to-gray-800 sticky top-0 z-40 shadow-sm dark:text-white caret-transparent">
      <div ref={containerRef} className="mx-auto   px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link href="/home1" className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Center: Nav */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <div className="relative">
              <button
                onClick={() => setHomeOpen((s) => !s)}
                aria-expanded={homeOpen}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Home
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.53 13.02a.75.75 0 01-1.06 0L5.21 8.28a.75.75 0 01.02-1.07z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {homeOpen && (
                <div className="absolute left-0 mt-2 w-40 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                  <Link
                    href="/home1"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                  >
                    Home 1
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                  >
                    Home 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              About Us
            </Link>

            <div className="relative">
              <button
                onClick={() => setServicesOpen((s) => !s)}
                aria-expanded={servicesOpen}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Services
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.53 13.02a.75.75 0 01-1.06 0L5.21 8.28a.75.75 0 01.02-1.07z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 py-2 grid grid-cols-1">
                  {services.map((s, index) => (
                    <Link
                      key={index}
                      href={`/${s.href}`}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex md:items-center md:gap-2">
              <div className="relative">
                <button
                  onClick={() => setLangOpen((s) => !s)}
                  aria-expanded={langOpen}
                  className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M21 13v2a2 2 0 0 1-2 2h-6" />
                    <path d="M3 7v0a2 2 0 0 1 2-2h6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span className="text-sm">EN</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200">
                      English (EN)
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200">
                      العربية (AR)
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200">
                      עברית (HE)
                    </button>
                  </div>
                )}
              </div>

              <ModeToggle />

              <div className="relative">
                <button
                  onClick={() => setProfileOpen((s) => !s)}
                  aria-expanded={profileOpen}
                  className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium text-slate-700 dark:text-slate-200">
                    {initials}
                  </div>
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => handleLogout()}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                title="Toggle menu"
              >
                {mobileOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="px-4 py-3 space-y-1">
              <div>
                <button
                  onClick={() => setMobileHomeOpen((s) => !s)}
                  aria-expanded={mobileHomeOpen}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium"
                >
                  <span>Home</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      mobileHomeOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.53 13.02a.75.75 0 01-1.06 0L5.21 8.28a.75.75 0 01.02-1.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {mobileHomeOpen && (
                  <div className="pl-4">
                    <Link
                      href="/home1"
                      className="block px-3 py-2 rounded-md text-base"
                    >
                      Home 1
                    </Link>
                    <Link
                      href="/home2"
                      className="block px-3 py-2 rounded-md text-base"
                    >
                      Home 2
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about-us"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              <div className="pt-2 pb-1">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  aria-expanded={mobileServicesOpen}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium"
                >
                  <span>Services</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.53 13.02a.75.75 0 01-1.06 0L5.21 8.28a.75.75 0 01.02-1.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-1 space-y-1 pl-4">
                    {services.map((s, index) => (
                      <Link
                        key={index}
                        href={`${s.href}`}
                        className="block px-3 py-2 rounded-md text-base"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setMobileProfileOpen((s) => !s)}
                      aria-expanded={mobileprofileOpen}
                      className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex justify-center items-center"
                    >
                      {initials}
                    </button>
                  </div>
                  <ModeToggle />
                </div>

                {/* Desktop-like card for profile actions on mobile */}
                {mobileprofileOpen && (
                  <div className="mt-2 absolute bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => handleLogout()}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
