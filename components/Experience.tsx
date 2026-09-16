import TimelineList, { TimelineItem } from "./TimelineList";

const experience: TimelineItem[] = [
  {
    title: "Pazzion",
    subtitle: "Singapore",
    label: "Data Analyst",
    period: "2023 — Present",
    logo: "/logo/pazzion-logo.webp",
    description:
      "Built the company's single source of truth on GCP (BigQuery) and a standardized campaign dashboard across 5 markets, cutting reporting turnaround by 2 days. Partnered with marketing to raise paid-ads ROAS from 4.4x to 11.6x and ran A/B tests that lifted conversion rate by 10.5%.",
    projects: [
      {
        name: "AI Transformation and Adoption Initiative",
        description:
          "Led a cross-functional program across 6 teams to establish the data and integration foundation for enterprise AI use cases, and ran hands-on adoption sessions for 20+ employees.",
        tags: ["GCP", "AI Strategy", "Change Management"],
        slug: "ai-adoption-and-transformation",
      },
      {
        name: "Cross-Market Campaign Analytics",
        description:
          "Designed a standardized analysis framework and dashboard for e-commerce campaigns across 5 markets, cutting reporting turnaround time by 2 days.",
        tags: ["BigQuery", "SQL", "Dashboarding"],
        slug: "cross-market-campaign-analytics",
      },
      {
        name: "Paid Ads Budget Optimization",
        description:
          "Built experimentation and decision models for paid-ads budget allocation, raising ROAS from 4.4x to 11.6x, and ran controlled A/B tests that lifted conversion rate by 10.5%.",
        tags: ["A/B Testing", "Causal Inference", "Python"],
        slug: "paid-ads-budget-optimization",
      },
    ],
  },
  {
    title: "Shopee",
    subtitle: "Singapore",
    label: "Data Analyst, Intern",
    period: "2022",
    logo: "/logo/shopee-logo.png",
    description:
      "test",
    projects: [
      {
        name: "AI Transformation and Adoption Initiative",
        description:
          "Led a cross-functional program across 6 teams to establish the data and integration foundation for enterprise AI use cases, and ran hands-on adoption sessions for 20+ employees.",
        tags: ["GCP", "AI Strategy", "Change Management"],
      }
    ],

      
  },
  {
    title: "Pureland",
    subtitle: "Singapore",
    label: "Data Engineer, Intern",
    period: "2022",
    logo: "/logo/pureland-logo.jpeg",
    description:
      "Built and optimized ETL pipelines ingesting stocks and futures market data from multiple sources for trading-strategy backtesting.",
  },
  {
    title: "CCOOP",
    subtitle: "China",
    label: "Business Analyst",
    period: "2017 — 2021",
    logo: "/logo/ccoop-logo.png",
    description:
      "Led competitive intelligence and market research shaping growth strategy for retail and e-commerce subsidiaries.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/[.08] py-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Experience
        </h2>
        <span className="text-xs uppercase tracking-wide text-zinc-400">
          Click to expand
        </span>
      </div>
      <TimelineList items={experience} />
    </section>
  );
}
