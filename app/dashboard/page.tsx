import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";
import { supabase } from "@/app/lib/supabase";
import { Course } from "@/app/types/courses";

export default async function DashboardPage() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-400 flex items-center justify-center">
        Failed to load courses
      </main>
    );
  }

  const courses: Course[] = data ?? [];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex">
        <Sidebar />

        <main
          className="
          flex-1
          p-5
          md:p-6
          lg:p-8
          "
        >
          <BentoGrid courses={courses} />
        </main>
      </section>
    </main>
  );
}