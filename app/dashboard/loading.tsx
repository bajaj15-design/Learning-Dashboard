export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <section className="grid gap-6 lg:grid-cols-4">
        {[...Array(6)].map((_, index) => (
          <section
            key={index}
            className="
            h-56
            animate-pulse
            rounded-3xl
            bg-zinc-900
            "
          />
        ))}
      </section>
    </main>
  );
}