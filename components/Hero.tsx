export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 py-20">
      <p className="text-sm font-medium text-zinc-500">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Evan Yue Zhang
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">
        Data Analyst based in Singapore. I build data pipelines, dashboards,
        and experimentation frameworks that turn business questions into
        decisions.
      </p>
      <div className="mt-2 flex gap-3">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/[.08] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.04]"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
