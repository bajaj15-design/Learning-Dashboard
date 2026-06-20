"use client";

import { Course } from "@/app/types/courses";
import { motion } from "framer-motion";
import {
  Code,
  BookOpen,
  Monitor,
  FileCode,
} from "lucide-react";

const iconMap = {
  Code,
  BookOpen,
  Monitor,
  FileCode,
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  const Icon =
    iconMap[
      course.icon_name as keyof typeof iconMap
    ] || Code;

  return (
   <motion.article
  whileHover={{
    scale: 1.02,
    y: -4,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
 className="
group
relative
h-full
overflow-hidden
rounded-3xl
border
border-zinc-800
bg-zinc-900/90
p-8
backdrop-blur-xl
"
>
      <section
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-linear-to-br
        from-blue-500/10
        via-transparent
        to-violet-500/10
        "
      />

      <section className="relative z-10">
        <Icon
          size={24}
          className="text-white"
        />

        <h3 className="mt-4 text-lg font-semibold">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          {course.progress}%
        </p>

        <section className="mt-4 h-2 w-full rounded bg-zinc-700">
          <motion.section
            className="
            h-2
            rounded
            bg-linear-to-r
            from-blue-500
            to-violet-500
            "
            initial={{ width: 0 }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
          />
        </section>
      </section>
    </motion.article>
  );
}