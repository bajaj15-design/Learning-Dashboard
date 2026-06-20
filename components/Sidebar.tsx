"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Menu,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] =
    useState("Dashboard");

  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <>
      {/* Desktop Sidebar */}

      <nav
        className={`
        hidden md:flex
        flex-col
        border-r
        border-zinc-800
        bg-black
        transition-all
        duration-300
        ${
          collapsed
            ? "w-20"
            : "w-64"
        }
      `}
      >
        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          className="p-5"
        >
          <Menu />
        </button>

        <section className="flex flex-col gap-2 px-3">
          {navItems.map((item) => {
            const Icon =
              item.icon;

            return (
              <button
                key={item.name}
                onClick={() =>
                  setActive(
                    item.name
                  )
                }
                className="
                relative
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-left
                "
              >
                {active ===
                  item.name && (
                  <motion.div
                    layoutId="active-tab"
                    className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-zinc-800
                    "
                  />
                )}

                <Icon
                  size={20}
                  className="relative z-10"
                />

                {!collapsed && (
                  <span className="relative z-10">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </section>
      </nav>

      {/* Mobile Bottom Nav */}

      <nav
        className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        justify-around
        border-t
        border-zinc-800
        bg-black
        py-3
        md:hidden
      "
      >
        {navItems.map((item) => {
          const Icon =
            item.icon;

          return (
            <button
              key={item.name}
              onClick={() =>
                setActive(
                  item.name
                )
              }
            >
              <Icon size={22} />
            </button>
          );
        })}
      </nav>
    </>
  );
}