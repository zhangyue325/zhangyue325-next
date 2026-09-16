import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";

export const metadata: Metadata = {
  title: "Paid Ads Budget Optimization — Evan Yue Zhang",
  description:
    "Experimentation and decision models for paid-ads budget allocation, raising ROAS from 4.4x to 11.6x.",
};

export default function Page() {
  return (
    <ProjectPageShell
      name="Paid Ads Budget Optimization"
      role="Data Analyst"
      year="2023 — Present"
      tags={["A/B Testing", "Causal Inference", "Python"]}
    >
      <p>
        Built experimentation and decision models for paid-ads budget
        allocation, raising ROAS from 4.4x to 11.6x, and ran controlled A/B
        tests that lifted conversion rate by 10.5%. (placeholder — refine
        with real details)
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
