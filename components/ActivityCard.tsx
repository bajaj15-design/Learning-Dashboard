"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  const activityData = [
    1, 4, 2, 3, 0, 2, 4,
    2, 1, 3, 4, 1, 2, 0,
    3, 4, 2, 1, 0, 3, 4,
    1, 2, 3, 4, 2, 1, 0,
  ];

  return (
    <article
      className="
      h-full
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
      "
    >
      <section className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Learning Activity
        </h2>

        <span className="text-sm text-zinc-400">
          Last 4 Weeks
        </span>
      </section>

      <section
        className="
        mt-6
        grid
        grid-cols-7
        gap-2
        "
      >
        {activityData.map((level, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.02,
              duration: 0.3,
            }}
            className={`
              h-6
              w-6
              rounded-md
              ${
                level === 0
                  ? "bg-zinc-800"
                  : level === 1
                  ? "bg-green-900"
                  : level === 2
                  ? "bg-green-700"
                  : level === 3
                  ? "bg-green-500"
                  : "bg-green-400"
              }
            `}
          />
        ))}
      </section>

      <p className="mt-6 text-sm text-zinc-400">
        Consistent progress over the last month 🚀
      </p>
    </article>
  );
}