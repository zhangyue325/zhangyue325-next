import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Projects — Evan Yue Zhang",
  description: "Side projects and experiments by Evan Yue Zhang.",
};

type Project = {
  name: string;
  description: string;
  href?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "AI Product Image Generator",
    description:
      "A tool that generates on-brand product imagery for retail sellers using AI, cutting down the need for traditional photoshoots. (placeholder — refine with real details)",
    tags: ["AI", "Image Generation"],
  },
  {
    name: "Shopify Merchant Chatbot",
    description:
      "A chatbot that helps Shopify merchants automatically answer common customer questions and handle store queries. (placeholder — refine with real details)",
    tags: ["Chatbot", "Shopify API", "LLM"],
  },
  {
    name: "Singapore Promotions Aggregator",
    description:
      "A website that uses AI to collect and summarize ongoing promotions across Singapore onto a single page. (placeholder — refine with real details)",
    tags: ["AI", "Web Scraping", "Next.js"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardClassName =
    "group rounded-xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.03]";
  const content = (
    <>
      <h3 className="font-medium group-hover:underline">{project.name}</h3>
      <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
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
    </>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {content}
    </a>
  ) : (
    <div className={cardClassName}>{content}</div>
  );
}

export default function ProjectPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">
            Projects
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-500">
            A few things I&apos;ve built outside of work.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
