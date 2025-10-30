"use client";

import SiteHeadder from "@/components/SiteHeadder";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { readUsers } from "./auth";

// --- Utility Functions (Kept as is) ---
function formatShort(dateStr?: string | Date | null) {
  if (!dateStr) return "-";
  try {
    const d = new Date(dateStr);
    return d.toLocaleString();
  } catch {
    return String(dateStr);
  }
}

function getDateKey(d: Date) {
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}
// ----------------------------------------

// --- New Component: StatCard (with icons and gradient style) ---
const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, icon, color }) => (
  // Gradient background, deep shadow, and subtle hover scale effect
  <div
    className={`p-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.02] ${color}`}
  >
    <div className="flex items-center justify-between">
      <div>
        {/* White text for contrast against gradient */}
        <p className="text-sm font-medium text-white opacity-80">{title}</p>
        <p className="text-4xl font-extrabold text-white mt-1">{value}</p>
      </div>
      <div className="text-white opacity-90">{icon}</div>
    </div>
  </div>
);
// ----------------------------------------

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    try {
      const u = readUsers() || [];
      const norm = u.map((x: any) => ({ ...x }));
      setUsers(norm);
    } catch (e) {
      setUsers([]);
    }
  }, []);

  const total = users.length;

  // Active = logged in within last 30 days (User's logic)
  const activeCount = React.useMemo(() => {
    const now = Date.now();
    const thirty = 1000 * 60 * 60 * 24 * 30;
    return users.filter((u) => {
      if (!u.logindate) return false;
      const t = new Date(u.logindate).getTime();
      return now - t <= thirty;
    }).length;
  }, [users]);

  // Pie chart data and colors (Vibrant Violet/Purple scheme)
  const pieData = [
    { name: t("adminDashboard.pie.activeLabel"), value: activeCount },
    {
      name: t("adminDashboard.pie.inactiveLabel"),
      value: Math.max(0, total - activeCount),
    },
  ];
  const PIE_COLORS = ["#8b5cf6", "#d8b4fe"]; // Violet-500, Violet-300

  // Bar chart data (User's logic)
  const barData = React.useMemo(() => {
    const map: Record<
      string,
      { date: string; logins: number; logouts: number }
    > = {};
    users.forEach((u) => {
      if (u.logindate) {
        const k = getDateKey(new Date(u.logindate));
        map[k] = map[k] || { date: k, logins: 0, logouts: 0 };
        map[k].logins += 1;
      }
      if (u.logoutTime) {
        const k = getDateKey(new Date(u.logoutTime));
        map[k] = map[k] || { date: k, logins: 0, logouts: 0 };
        map[k].logouts += 1;
      }
    });
    return Object.values(map).sort((a, b) => (a.date < b.date ? -1 : 1));
  }, [users]);

  return (
    // 1. Main Container: Slightly off-white background for depth
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900  caret-transparent">
      <SiteHeadder />
      <div className="mx-auto p-4 md:p-0 max-w-7xl">
        {/* Prominent Header */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {t("adminDashboard.title")}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          {t("adminDashboard.subtitle")}
        </p>

        {/* 2. Stats Section: Vibrant, Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title={t("adminDashboard.stats.totalRegistered")}
            value={total.toLocaleString()}
            color="bg-gradient-to-r from-blue-500 to-indigo-600"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18H4a2 2 0 01-2-2v-1A7 7 0 0115 8v12h-2zm-2 0V9a1 1 0 00-1-1H7a1 1 0 00-1 1v9z" />
              </svg>
            }
          />
          <StatCard
            title={t("adminDashboard.stats.activeLast30")}
            value={activeCount.toLocaleString()}
            color="bg-gradient-to-r from-teal-500 to-cyan-600"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <StatCard
            title={t("adminDashboard.stats.inactiveCount")}
            value={Math.max(0, total - activeCount).toLocaleString()}
            color="bg-gradient-to-r from-pink-500 to-red-600"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            }
          />
        </div>

        {/* 3. Charts Section: Clean Cards with High Shadow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-[400px]">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t("adminDashboard.charts.pieTitle")}
            </h2>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  labelLine={false}
                  // Custom label for better readability
                  label={({ name, percent }: any) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-[400px]">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t("adminDashboard.charts.barTitle")}
            </h2>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={barData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                />
                <YAxis tick={{ fill: "#6b7280" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="logins"
                  fill="#10b981"
                  name={t("adminDashboard.charts.logins")}
                />
                <Bar
                  dataKey="logouts"
                  fill="#ef4444"
                  name={t("adminDashboard.charts.logouts")}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4. User Table Section: Clean Table in a Card with Alternating Rows */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t("adminDashboard.table.title")}
          </h2>

          {/* Responsive Container for Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {t("adminDashboard.table.columns.name")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {t("adminDashboard.table.columns.email")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {t("adminDashboard.table.columns.registered")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {t("adminDashboard.table.columns.lastLogin")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {t("adminDashboard.table.columns.logoutTime")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                {users.map((u, idx) => (
                  <tr
                    key={idx}
                    className={`
                      text-gray-800 dark:text-gray-300
                      hover:bg-gray-100 dark:hover:bg-gray-700
                      ${
                        idx % 2 === 0
                          ? "bg-white dark:bg-gray-800"
                          : "bg-gray-50 dark:bg-gray-800"
                      }
                      transition duration-150
                    `}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {u.firstName || ""} {u.lastName || ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {u.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatShort(u.registerdate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatShort(u.logindate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatShort(u.logoutTime)}
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-6 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      {t("adminDashboard.table.noUsers")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
