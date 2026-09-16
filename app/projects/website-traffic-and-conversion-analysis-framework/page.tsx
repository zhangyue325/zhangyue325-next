import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Website Traffic and Conversion Analysis Framework — Evan Yue Zhang",
  description:
    "A standardized UTM and reporting framework, plus a centralized dashboard, for comparing website traffic and conversion across marketing channels.",
};

const utm_rules_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/website-traffic-and-conversion-analysis-framework/utm_rules.png",
    width: 2876,
    height: 780,
    caption: "UTM parameter rules defined for the marketing team to follow.",
  },
];

const dashboard_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/website-traffic-and-conversion-analysis-framework/traffic_and_conversion_breakdown.png",
    width: 2608,
    height: 1378,
    caption: "Centralized dashboard comparing traffic and conversion across channels.",
  },
];

export default function Page() {
  return (
    <ProjectPageShell
      name="Website Traffic and Conversion Analysis Framework"
      tags={["Marketing Analytics", "Traffic Attribution", "Data Visualization"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">Overview</h2>
      <p className="mt-3">
        Built a standardized attribution methodology and 
        a centralized dashboard to compare website traffic, conversions, and channel performance.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Pain Points</h2>
      <p className="mt-3">
        Different traffic acquisition channels followed different reporting
        standards and attribution methodologies, making it difficult to compare
        performance across channels.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Standardizing UTM Parameters
      </h2>
      <p className="mt-3">
        I started by defining a set of UTM parameter rules for the marketing
        team to follow.
      </p>
      <div className="mt-3">
        <ImageCarousel slides={utm_rules_gallery} />
      </div>
      <p className="mt-3">
        In practice, the rules weren&apos;t followed consistently — for
        example, uppercase instead of lowercase, or &quot;-&quot; instead of
        &quot;_&quot; — which left the data messy. 
      </p>
      <p>
        To fix this, I built a 
        URL generation tool with Streamlit: the marketing team can simply picks
        their channel, and the tool generates a correctly formatted URL with UTM parameters
        automatically.
      </p>
      <video
        src="/projects/website-traffic-and-conversion-analysis-framework/utm_url_generation.mov"
        controls
        playsInline
        className="mt-3 w-full rounded-xl border border-black/[.08]"
      >
        Your browser does not support the video tag.
      </video>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Dashboard</h2>
      <p className="mt-3">
        Using the same standardized attribution, I built a centralized
        dashboard to compare website traffic and conversion data across
        channels.
      </p>
      <div className="mt-3">
        <ImageCarousel slides={dashboard_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Impact</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Established a consistent UTM and attribution standard, enabling marketing teams to use a common reporting language across channels.
        </li>
        <li>
          Centralized traffic and conversion reporting, making channel performance easier to compare and monitor.
        </li>
      </ul>
    </ProjectPageShell>
  );
}
