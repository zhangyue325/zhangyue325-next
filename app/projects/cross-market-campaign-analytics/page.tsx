import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";

export const metadata: Metadata = {
  title: "Cross-Market Campaign Analytics — Evan Yue Zhang",
  description:
    "A standardized analysis framework and dashboard for e-commerce campaigns across 5 markets.",
};

export default function Page() {
  return (
    <ProjectPageShell
      name="Cross-Market Campaign Analytics"
      role="Data Analyst"
      year="2023 — Present"
      tags={["BigQuery", "SQL", "Dashboarding"]}
    >
      <p>
        Designed a standardized analysis framework and dashboard for
        e-commerce campaigns across 5 markets, cutting reporting turnaround
        time by 2 days. (placeholder — refine with real details)
      </p>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Highlights
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
        <li>Placeholder highlight — key feature or result</li>
        <li>Placeholder highlight — key feature or result</li>
      </ul>
    </ProjectPageShell>
  );
}
