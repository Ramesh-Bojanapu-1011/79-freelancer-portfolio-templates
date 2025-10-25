"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Fixed for modern Next.js App Router
import Image from "next/image";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  logindate?: Date;
  registerdate?: Date;
};

const ADMIN_EMAIL = "admin@stakly.com";
const ADMIN_PASS = "admin123";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = React.useState<"login" | "register" | "forgot">(
    "login",
  );

  // Login fields
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Register fields
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  // Forgot flow
  const [resetStep, setResetStep] = React.useState<"request" | "set">(
    "request",
  );
  const [newPassword, setNewPassword] = React.useState("");

  const [message, setMessage] = React.useState<string | null>(null);

  /* --- LocalStorage User Handlers --- */

  function readUsers(): User[] {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("ft_users");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeUsers(users: User[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem("ft_users", JSON.stringify(users));
  }

  function setAuth(user: User, isAdmin = false) {
    if (typeof window === "undefined") return;
    const now = new Date();
    localStorage.setItem(
      "ft_auth",
      JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin,
        logindate: now,
        registerdate: user.registerdate,
      }),
    );
  }

  /* --- Auth Flow Handlers --- */

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!email || !password)
      return setMessage("Please provide email and password.");
    if (password.length < 6)
      return setMessage("Password must be at least 6 characters long.");

    const users = readUsers();
    if (users.find((u) => u.email === email))
      return setMessage("A user with that email already exists.");
    const now = new Date();

    const user: User = {
      firstName,
      lastName,
      email,
      password,
      registerdate: now,
    };
    users.push(user);
    writeUsers(users);

    setMessage("Registration successful. Redirecting...");
    // A successful registration typically defaults to showing the login form
    setMode("login");
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!email || !password)
      return setMessage("Please enter email and password.");

    // Admin shortcut
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      const now = new Date();
      setAuth(
        {
          email,
          password,
          firstName: "Admin",
          lastName: "User",
          logindate: now,
        },
        true,
      );
      setMessage("Admin login successful. Redirecting to dashboard...");
      setTimeout(() => router.push("/admin-dashboard"), 600);
      return;
    }

    const users = readUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) return setMessage("Invalid credentials or user not registered.");

    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) return setMessage("No account found for that email.");
    users[idx].logindate = new Date();
    writeUsers(users);
    setAuth(user, false);

    setMessage("Login successful. Redirecting...");
    setTimeout(() => router.push("/home1"), 600);
  }

  function handleRequestReset(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    const users = readUsers();
    const user = users.find((u) => u.email === email);
    if (!user) return setMessage("No account found for that email.");
    setResetStep("set");
    setMessage("Account found. Enter a new password.");
  }

  function handleSetNewPassword(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!newPassword || newPassword.length < 6)
      return setMessage("New password must be at least 6 characters.");

    const users = readUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) return setMessage("No account found for that email.");

    users[idx].password = newPassword;
    writeUsers(users);
    setMessage("Password updated. You can now login.");

    // Reset state for login
    setResetStep("request");
    setMode("login");
    setNewPassword("");
  }

  /* --- UI Rendering --- */

  const inputStyle =
    "mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out";
  const buttonPrimary =
    "w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out";
  const buttonSecondary =
    "text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline transition duration-150 ease-in-out";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-xl p-8 sm:p-10">
          {/* Logo and Header */}
          <div className="flex flex-col items-center  ">
            <img
              src={"https://i.postimg.cc/DwdH9gv8/logo-stackly.png"}
              alt={"Stakly Logo"}
              width={100}
              height={100}
              className="  h-10 w-auto "
            />
          </div>

          {/* Mode Switcher */}
          <div className="flex justify-center mb-6 border-b border-slate-200 dark:border-slate-700">
            <button
              onClick={() => {
                setMode("login");
                setMessage(null);
              }}
              className={`py-2 px-6 text-lg font-medium transition duration-200 ${
                mode === "login"
                  ? "border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode("register");
                setMessage(null);
              }}
              className={`py-2 px-6 text-lg font-medium transition duration-200 ${
                mode === "register"
                  ? "border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Message Area */}
          {message && (
            <div className="mb-4 p-3 text-sm text-center font-medium bg-rose-50 dark:bg-rose-900 border border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300 rounded-lg">
              {message}
            </div>
          )}

          {/* Forms Container */}
          <div>
            {/* Login Form */}
            {mode === "login" && (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label
                    htmlFor="email-login"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email-login"
                    className={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password-login"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                  <input
                    id="password-login"
                    className={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("forgot");
                      setMessage(null);
                    }}
                    className={buttonSecondary}
                  >
                    Forgot password?
                  </button>
                  <button type="submit" className={buttonPrimary}>
                    Sign In
                  </button>
                </div>
              </form>
            )}

            {/* Register Form */}
            {mode === "register" && (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className={inputStyle}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className={inputStyle}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email-register"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email-register"
                    className={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password-register"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                  <input
                    id="password-register"
                    className={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button type="submit" className={buttonPrimary}>
                    Create Account
                  </button>
                </div>
              </form>
            )}

            {/* Forgot Password Flow */}
            {mode === "forgot" && (
              <div className="space-y-6">
                {/* Step 1: Request account */}
                {resetStep === "request" && (
                  <form onSubmit={handleRequestReset} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email-forgot"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Enter your account email
                      </label>
                      <input
                        id="email-forgot"
                        className={inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setMode("login");
                          setMessage(null);
                        }}
                        className={buttonSecondary}
                      >
                        Back to Sign In
                      </button>
                      <button type="submit" className={buttonPrimary}>
                        Find Account
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 2: Set new password */}
                {resetStep === "set" && (
                  <form onSubmit={handleSetNewPassword} className="space-y-6">
                    <div>
                      <label
                        htmlFor="new-password"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        New password
                      </label>
                      <input
                        id="new-password"
                        className={inputStyle}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        required
                      />
                    </div>
                    <div className="flex justify-end pt-2">
                      <button type="submit" className={buttonPrimary}>
                        Set Password
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
