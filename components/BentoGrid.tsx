"use client";

import { motion } from "framer-motion";
import HeroCard from "./HeroCard";
import CourseCard from "./CourseCard";
import ActivityCard from "./ActivityCard";
import { Course } from "@/app/types/courses";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function BentoGrid({
  courses,
}: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
      h-full
      grid
      gap-6
      xl:gap-7

      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4

      xl:auto-rows-[220px]
      "
    >
      {/* Hero */}
      <motion.section
        variants={itemVariants}
        className="
        md:col-span-2
        xl:col-span-2
        xl:row-span-3
        "
      >
        <HeroCard />
      </motion.section>

      {/* Course 1 */}
      {courses[0] && (
        <motion.article variants={itemVariants}>
          <CourseCard course={courses[0]} />
        </motion.article>
      )}

      {/* Course 2 */}
      {courses[1] && (
        <motion.article variants={itemVariants}>
          <CourseCard course={courses[1]} />
        </motion.article>
      )}

      {/* Activity */}
      <motion.section
        variants={itemVariants}
        className="
        md:col-span-2
        xl:col-span-2
        "
      >
        <ActivityCard />
      </motion.section>

      {/* Course 3 */}
      {courses[2] && (
        <motion.article variants={itemVariants}>
          <CourseCard course={courses[2]} />
        </motion.article>
      )}

      {/* Course 4 */}
      {courses[3] && (
        <motion.article variants={itemVariants}>
          <CourseCard course={courses[3]} />
        </motion.article>
      )}
    </motion.section>
  );
}