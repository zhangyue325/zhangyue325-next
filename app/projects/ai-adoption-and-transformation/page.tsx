import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "AI Adoption & Transformation (PAZZION) — Evan Yue Zhang",
  description:
    "Driving AI adoption at PAZZION — building an AI-ready data architecture and pipeline tracker, and coaching the team to use AI effectively.",
};

const architecture_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/ai-adoption-and-transformation/data-architecture.png",
    width: 713,
    height: 400,
    caption: "AI-ready data architecture connecting source systems to downstream AI workflows.",
  },
  {
    src: "/projects/ai-adoption-and-transformation/data-pipeline-tracker.png",
    width: 1608,
    height: 690,
    caption: "Data pipeline tracker used to monitor pipeline health and status.",
  },
];

export default function Page() {
  return (
    <ProjectPageShell
      name="AI Adoption & Transformation (PAZZION)"
      role="Initiator"
      year="2026"
      tags={["AI", "Data Architecture", "Data Engineering", "Change Management"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">Overview</h2>
      <p className="mt-3">
        Led AI adoption and transformation efforts at PAZZION, spanning both
        the technical foundation and the human side of change: helping the
        team adapt how they work with AI.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        AI-Ready Data Architecture
      </h2>
      <p className="mt-3">
        Designed a data architecture to consolidate data from source systems
        into a form AI tools and workflows can reliably use.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Mapped source systems and defined a consolidated schema so
          downstream AI workflows read from one consistent source of truth.
        </li>
        <li>
          Set data quality and freshness standards so AI outputs could be
          trusted by the team.
        </li>
      </ul>
      <div className="mt-3">
        <ImageCarousel slides={architecture_gallery.slice(0, 1)} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Data Pipelines
      </h2>
      <p className="mt-3">
        Built a scalable, low-maintenance data pipeline architecture that
        mixes managed and custom ingestion depending on what each source
        needs.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Used Fivetran and BigQuery Data Transfer to extract data from
          standard sources — Google Ads, Meta Ads, Shopify, and more — into
          the data warehouse.
        </li>
        <li>
          For sources not covered by Fivetran, built custom Python extraction
          scripts hosted on Google Cloud Run.
        </li>
        <li>
          For the company&apos;s customized ERP system, collaborated with the
          ERP vendor to build a dedicated pipeline extracting its data into
          the warehouse.
        </li>
      </ul>
      <div className="mt-3">
        <ImageCarousel slides={architecture_gallery.slice(1, 2)} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Team Enablement
      </h2>
      <p className="mt-3">
        The harder part was changing how the team thinks and works, not just
        the technology — I spent more than 60% of my time helping them adopt
        AI effectively 😅
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Educated the team on AI capabilities and limitations, and coached
          them on how to use AI effectively in their work.
        </li>
        <li>
          Hosted a monthly AI knowledge-sharing session to cover use cases
          and best practices, and encourage the team to share their own
          experiences and learnings.
        </li>
        <li>
          Explored ready-to-use plugins and skills for standard workflows to
          speed up adoption, rather than building everything from scratch:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Paid ads — campaign copy drafting and performance summaries.</li>
            <li>SEO — keyword research and content brief generation.</li>
            <li>Image generation — product image generation and editing.</li>
          </ul>
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Impact
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Paid ads: saved about 10 hours per week on manual copy drafting.</li>
        <li>
          SEO: replaced the outsourced SEO agency with AI, saving $4,500 per
          month.
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Next Steps
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Expand pipeline coverage to remaining source systems</li>
        <li>Develop skills for internal users</li>
      </ul>
    </ProjectPageShell>
  );
}
