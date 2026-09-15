import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";

export const metadata: Metadata = {
  title: "Shopify Merchant Chatbot — Evan Yue Zhang",
  description:
    "A chatbot that helps Shopify merchants automatically answer common customer questions and handle store queries.",
};

export default function Page() {
  return (
    <ProjectPageShell
      name="Shopify Merchant Chatbot"
      role="Placeholder role"
      year="Placeholder year"
      tags={["Chatbot", "Shopify API", "LLM"]}
    >
      <p>
        A chatbot that helps Shopify merchants automatically answer common
        customer questions and handle store queries. (placeholder — refine
        with real details)
      </p>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Highlights
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
        <li>Placeholder highlight — key feature or result</li>
        <li>Placeholder highlight — key feature or result</li>
      </ul>

      {/* Optional: link out to a live demo or repo
      <div className="mt-10">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Visit project &rarr;
        </a>
      </div>
      */}
    </ProjectPageShell>
  );
}
