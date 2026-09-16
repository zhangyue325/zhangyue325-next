import TimelineList, { TimelineItem } from "./TimelineList";

const experience: TimelineItem[] = [
  {
    title: "Pazzion",
    subtitle: "Singapore",
    label: "Data Analyst",
    period: "2023 — Present",
    logo: "/logo/pazzion-logo.webp",
    projects: [
      {
        name: "AI Transformation and Adoption Initiative",
        description:
          "Made AI has the access to our internal data and systems, and ran hands-on adoption sessions for 100 + employees.",
        tags: ["AI", "Data Architecture", "Data Pipelines", "For 0 to 1"],
        slug: "ai-adoption-and-transformation",
      },
      {
        name: "Website Traffic and Conversion Analysis Framework",
        description:
          "Built a standardized attribution methodology and a centralized dashboard to compare website traffic, conversions, and channel performance.",
        tags: ["Marketing Analytics", "Traffic Attribution", "Data Visualization"],
        slug: "website-traffic-and-conversion-analysis-framework",
      },
      {
        name: "Paid Ads Budget Optimization",
        description:
          "Trained marketing mix models to estimate the incremental return of paid ads spend and recommended budget allocation across channels.",
        tags: ["A/B Testing", "Causal Inference", "Python"],
        slug: "paid-ads-budget-optimization",
      },
      {
        name: "Website Conversion Optimization via A/B Testing",
        description:
          "Introduced A/B testing methodology to evaluate website design and feature changes, Established a structured, evidence-based decision-making process for website optimization.",
        tags: ["A/B Testing", "Statistical Analysis", "HTML/CSS/JS"],
        slug: "website-conversion-optimization",
      },
    ],
  },
  {
    title: "Shopee",
    subtitle: "Singapore",
    label: "Data Analyst, Intern",
    period: "2022",
    logo: "/logo/shopee-logo.png",
    projects: [
      {
        name: "Data Queries for Cross-Functional Teams",
        description:
          "Translated multiple teams' ambiguous requests into well-scoped data questions and answered them in Spark SQL to support their reporting and business decisions.",
        tags: ["SQL", "Python", "Data Analysis"],
      },
      {
        name: "Find and Fix Brand Mismatches in Product Listings",
        description:
          "Built rules to identify potential brand mismatches across 150+ million products using Python, streamlining the listing team's data cleanup process.",
        tags: ["SQL", "Python", "Abnormality Detection", "Data Cleaning"],
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
      "Built and optimized data pipelines ingesting stocks and futures market data from multiple sources for trading-strategy backtesting.",
  },
  {
    title: "CCOOP",
    subtitle: "China",
    label: "Business Analyst",
    period: "2017 — 2021",
    logo: "/logo/ccoop-logo.png",
    description:
      "Conducted research shaping growth strategy for retail and e-commerce subsidiaries.",
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
