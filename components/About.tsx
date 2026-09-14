const skills = [
  "Python",
  "SQL",
  "Apache Spark",
  "BigQuery",
  "GCP",
  "Tableau",
  "Data Studio",
  "Causal Inference",
  "A/B Testing",
  "XGBoost",
];

export default function About() {
  return (
    <section id="about" className="border-t border-black/[.08] py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        About
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-zinc-700">
        I&apos;m a Data Analyst based in Singapore with a Master&apos;s in Business
        Analytics from NTU. I build data platforms and pipelines on GCP, design
        experiments and causal models to guide business decisions, and partner
        with marketing, UI/UX, and engineering teams to turn ambiguous problems
        into measurable outcomes.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
