import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Projects — Evan Yue Zhang",
  description: "Side projects and experiments by Evan Yue Zhang.",
};

type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "ai-adoption-and-transformation",
    name: "AI Adoption and Transformation",
    summary:
      "Led AI adoption and transformation efforts at PAZZION, spanning both the technical foundation and the human side of change: helping the team adapt how they work with AI.",
    tags: ["AI", "Data Architecture", "Data Engineering", "For 0 to 1"]
  },
  {
    slug: "ai-product-image-generator",
    name: "AI Product Image Generator",
    summary:
      "A tool that generates on-brand product imagery for retail sellers using AI, cutting down the need for traditional photoshoots. (placeholder — refine with real details)",
    tags: ["AI", "Image Generation"],
  },
  {
    slug: "shopify-merchant-chatbot",
    name: "Shopify Merchant Chatbot",
    summary:
      "An AI shopping assistant for Shopify storefronts, built on Claude and Shopify's Storefront MCP, with a merchant-friendly admin dashboard.",
    tags: ["Shopify", "Claude", "MCP", "React Router"],
  },
  {
    slug: "eda-and-baseline-models-in-kaggle",
    name: "EDA & Baseline Models (Kaggle)",
    summary:
      "Exploratory data analysis and baseline models for Kaggle's Predict Student Performance from Game Play competition — earned a Silver Notebook Medal.",
    tags: ["Kaggle", "EDA", "Machine Learning"],
  },
  {
    slug: "dashboard-with-streamlit",
    name: "Dashboard with Streamlit",
    summary:
      "A simple dashboard built with Streamlit to visualize data and insights.",
    tags: ["Streamlit", "Data Visualization"],
  },
  {
    slug: "analysis-framework-for-paid-ads",
    name: "Analysis Framework",
    summary:
      "A simple dashboard built with Streamlit to visualize data and insights.",
    tags: ["Streamlit", "Data Visualization"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.03]"
    >
      <h3 className="font-medium group-hover:underline">{project.name}</h3>
      <p className="mt-2 text-sm text-zinc-600">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default function ProjectPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <h1 className="text-3xl tracking-tight sm:text-3xl">
            Projects
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-500">
            A few things I&apos;ve built inside or outside of work.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
