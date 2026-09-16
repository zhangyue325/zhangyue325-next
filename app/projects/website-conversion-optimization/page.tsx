import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Website Conversion Optimization Via A/B Testing — Evan Yue Zhang",
  description:
    "Established an A/B testing methodology to evaluate website design and feature changes based on measurable user behavior and business outcomes.",
};

const ab_testing_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/website-conversion-optimization/test1.png",
    width: 713,
    height: 400,
    caption: "Compare the add-to-cart button in the comfortable zone or not.",
  },
  {
    src: "/projects/website-conversion-optimization/test2.png",
    width: 1608,
    height: 690,
    caption: "Compare a clear add-to-cart button and add-to-cart button with secondary buttons.",
  },
  {
    src: "/projects/website-conversion-optimization/test3.png",
    width: 1608,
    height: 690,
    caption: "Compare product image in different positions.",
  },
];

export default function Page() {
  return (
    <ProjectPageShell
      name="Website Conversion Optimization Via A/B Testing"
      tags={["A/B Testing", "Statistical Analysis", "HTML/CSS/JS"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">Pain Points</h2>
      <p className="mt-3">
        The UI/UX team often couldn&apos;t tell which design performed
        better, and once a new feature or design shipped, there was no
        reliable way to measure its actual business impact.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Solution</h2>
      <p className="mt-3">
        I established an A/B testing methodology to evaluate website design
        and feature changes based on measurable user behavior and business
        outcomes.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Defined the hypothesis, primary metric, and success criteria before
          each experiment.
        </li>
        <li>Randomly assigned users to control and treatment groups.</li>
        <li>
          Collected and analyzed data to determine the statistical
          significance and impact of the changes.
        </li>
        <li>
          Turned the results into concrete design decisions for the UI/UX
          team.
        </li>
      </ul>
      <div className="mt-3">
        <ImageCarousel slides={ab_testing_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Impact</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Gave the UI/UX team a repeatable way to resolve design
          disagreements with data instead of opinion.
        </li>
        <li>
          Made it possible to quantify the business impact of a new feature
          or design before rolling it out fully.
        </li>
        <li>
          Introduced a more structured, evidence-based decision-making
          process for website optimization.
        </li>
      </ul>
    </ProjectPageShell>
  );
}
