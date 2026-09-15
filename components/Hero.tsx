import Link from "next/link";

const facts = [
  { label: "Currently", value: "Data Analyst · Pazzion" },
  { label: "Experience", value: "3+ in data analytics" },
  { label: "Focus", value: "Data Analysis · Applied AI · Solutions from 0 to 1" },
  { label: "Location", value: "Singapore" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 py-20">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        — About
      </p>
      <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">
        Ev
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

      <dl className="mt-8 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-black/[.08] pt-6 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs uppercase tracking-wide text-zinc-400">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm text-zinc-700">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
