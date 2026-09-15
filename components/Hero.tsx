import Link from "next/link";


export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 py-20">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        — About
      </p>
      <h1 className="text-3xl tracking-tight sm:text-3xl">
        Evan Yue Zhang
      </h1>
      <p className="max-w-xl text-lg text-zinc-900">
        Data Analyst based in Singapore.
      </p>
      <p className="max-w-xl text-lg text-zinc-500">
        I build data pipelines, dashboards, and experimentation frameworks
        that turn business questions into decisions.
      </p>
      <div className="mt-2 flex gap-3">
        <Link
          href="/projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838]"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-black/[.08] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.04]"
        >
          Contact Me
        </Link>
      </div>

    </section>
  );
}
