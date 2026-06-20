"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <section
      className="
      relative
      h-full
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
      "
    >
      {/* Blue Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        right-0
        top-0
        h-56
        w-56
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-0
        left-0
        h-40
        w-40
        rounded-full
        bg-purple-500/10
        blur-3xl
        "
      />

      <section className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div>
          <p className="text-sm text-zinc-400">
            Welcome Back 👋
          </p>

          <h1
            className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Saloni
          </h1>

          <p className="mt-4 text-zinc-400">
            🔥 15 Day Learning Streak
          </p>
        </div>

        {/* Stats */}
        <section className="mt-10 grid grid-cols-2 gap-4">
          <article
            className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-800/40
            p-5
            backdrop-blur-md
            "
          >
            <p className="text-sm text-zinc-400">
              Active Courses
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              4
            </h3>
          </article>

          <article
            className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-800/40
            p-5
            backdrop-blur-md
            "
          >
            <p className="text-sm text-zinc-400">
              Completion
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              75%
            </h3>
          </article>
        </section>

        {/* Progress */}
        <section className="mt-auto">
          <div
            className="
            h-2
            overflow-hidden
            rounded-full
            bg-zinc-800
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "75%",
              }}
              transition={{
                duration: 1.5,
              }}
              className="
              h-full
              rounded-full
              bg-linear-to-r
              from-blue-500
              via-cyan-400
              to-purple-500
              "
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            You&apos;re ahead of 78% of learners this week 🚀
          </p>
        </section>
      </section>
    </section>
  );
}