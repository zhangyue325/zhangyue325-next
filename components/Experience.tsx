"use client";

import { useState } from "react";

type RelatedProject = {
  name: string;
  description: string;
  tags: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  projects?: RelatedProject[];
};

const experience: ExperienceItem[] = [
  {
    role: "Data Analyst",
    company: "Pazzion",
    location: "Singapore",
    period: "Apr 2023 — Present",
    description:
      "Built the company's single source of truth on GCP (BigQuery) and a standardized campaign dashboard across 5 markets, cutting reporting turnaround by 2 days. Partnered with marketing to raise paid-ads ROAS from 4.4x to 11.6x and ran A/B tests that lifted conversion rate by 10.5%.",
    projects: [
      {
        name: "AI Transformation Initiative",
        description:
          "Led a cross-functional program across 6 teams to establish the data and integration foundation for enterprise AI use cases, and ran hands-on adoption sessions for 20+ employees.",
        tags: ["GCP", "AI Strategy", "Change Management"],
      },
      {
        name: "Cross-Market Campaign Analytics",
        description:
          "Designed a standardized analysis framework and dashboard for e-commerce campaigns across 5 markets, cutting reporting turnaround time by 2 days.",
        tags: ["BigQuery", "SQL", "Dashboarding"],
      },
      {
        name: "Paid Ads Budget Optimization",
        description:
          "Built experimentation and decision models for paid-ads budget allocation, raising ROAS from 4.4x to 11.6x, and ran controlled A/B tests that lifted conversion rate by 10.5%.",
        tags: ["A/B Testing", "Causal Inference", "Python"],
      },
    ],
  },
  {
    role: "Data Analyst, Intern",
    company: "Shopee",
    location: "Singapore",
    period: "May 2022 — Dec 2022",
    description:
      "Built brand-mismatch detection rules across 150M+ products in Python and answered cross-team reporting questions in Spark SQL. Diagnostic analysis on inspection workflows saved 80+ agents 2 hours daily, backed by a daily dashboard.",
  },
  {
    role: "Data Engineer, Intern",
    company: "Pureland",
    location: "Singapore",
    period: "Dec 2021 — May 2022",
    description:
      "Built and optimized ETL pipelines ingesting stocks and futures market data from multiple sources for trading-strategy backtesting, introducing parallel processing to cut runtimes and improve reliability.",
  },
  {
    role: "Business Analyst",
    company: "CCOOP",
    location: "Hainan, China",
    period: "Jul 2017 — Jun 2021",
    description:
      "Led competitive intelligence and market research shaping growth strategy for retail and e-commerce subsidiaries. Distilled due diligence into executive-ready briefs supporting 4 go/no-go investment decisions.",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <ul className="mt-4 flex flex-col">
        {experience.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={`${item.company}-${item.period}`} className="border-b border-black/[.08]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full flex-wrap items-baseline justify-between gap-2 py-5 text-left"
              >
                <h3 className="font-medium">
                  {item.role} · {item.company}, {item.location}
                </h3>
                <span className="flex items-center gap-3 text-sm text-zinc-500">
                  {item.period}
                  <span className="text-zinc-400">{isOpen ? "–" : "+"}</span>
                </span>
              </button>

              {isOpen && (
                <div className="pb-6">
                  <p className="max-w-2xl text-zinc-600">{item.description}</p>

                  {item.projects && (
                    <ul className="mt-4 flex flex-col gap-3 border-l border-black/[.08] pl-4">
                      {item.projects.map((project) => (
                        <li key={project.name}>
                          <h4 className="text-sm font-medium">{project.name}</h4>
                          <p className="mt-0.5 text-sm text-zinc-600">
                            {project.description}
                          </p>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <li
                                key={tag}
                                className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
