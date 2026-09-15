import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";

export const metadata: Metadata = {
  title: "Shopify Merchant Chatbot — Evan Yue Zhang",
  description:
    "An AI shopping assistant for Shopify storefronts, built on Claude and Shopify's Storefront MCP, with a merchant-friendly admin dashboard.",
};

export default function Page() {
  return (
    <ProjectPageShell
      name="Shopify Merchant Chatbot"
      tags={["Shopify", "Claude", "MCP", "React Router"]}
    >
      <p>
        An AI shopping assistant that runs as a chat bubble on Shopify
        storefronts, powered by Claude and Shopify&apos;s Storefront MCP for
        product catalog access. It builds on Shopify&apos;s official
        Storefront MCP template with an admin dashboard aimed at
        non-technical merchants, so store owners can configure the assistant
        without touching code.
      </p>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Highlights
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
        <li>
          Merchant admin dashboard split into four sections — Greetings,
          System, Support Team, and Appearance — covering welcome messaging,
          assistant behavior and brand context, support content, and chat
          bubble placement.
        </li>
        <li>
          Welcome product cards and greeting reply chips to help shoppers
          start a conversation faster.
        </li>
        <li>
          AI-generated suggested reply chips after each assistant response,
          so shoppers can continue the conversation with one tap.
        </li>
        <li>Conversation history tracking for each shopper session.</li>
        <li>
          Product discovery handled through Shopify Storefront MCP catalog
          search rather than a custom-built product index.
        </li>
      </ul>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Tech Stack
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
        <li>React Router for the storefront extension and admin frontend</li>
        <li>Node.js backend integrated with Shopify</li>
        <li>Claude (Anthropic) as the LLM powering the assistant</li>
        <li>Shopify Storefront MCP for live product catalog access</li>
        <li>Prisma ORM (SQLite) for storing merchant configuration</li>
      </ul>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Architecture
      </h2>
      <p className="mt-4 text-zinc-600">
        Merchant-configured settings — prompts, brand context, greeting
        products, support content, and appearance — are stored in a
        Prisma-backed <code>ChatSettings</code> model and read by the
        storefront chat bubble extension at runtime. When a shopper asks
        about products, the assistant queries Shopify&apos;s Storefront MCP
        endpoint for catalog data instead of maintaining a separate product
        database.
      </p>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Roadmap
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
        <li>Adopt Claude&apos;s prompt caching to cut response latency and cost</li>
        <li>
          Security review of conversation data exposure and CORS
          configuration
        </li>
        <li>Migrate from SQLite to a persistent, managed database</li>
        <li>Move from Storefront MCP to Shopify&apos;s newer UCP protocol</li>
        <li>Add an analytics dashboard for session and conversion metrics</li>
      </ul>

      <div className="mt-10">
        <a
          href="https://github.com/zhangyue325/shop-chat-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          View on GitHub &rarr;
        </a>
      </div>
    </ProjectPageShell>
  );
}
