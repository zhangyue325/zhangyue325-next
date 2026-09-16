import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Paid Ads Budget Optimization — Evan Yue Zhang",
  description:
    "Experimentation and decision models for paid-ads budget allocation, raising ROAS from 4.4x to 11.6x.",
};

const response_curve_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/paid-ads-budget-optimization/marketing-response-curve.jpeg",
    width: 1000,
    height: 590,
    caption:
      "A marketing response curve: incremental return diminishes as spend approaches its saturation point.",
  },
];

const model_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/paid-ads-budget-optimization/model-fitting.png",
    width: 1808,
    height: 966,
    caption: "Model fit against actual conversions (R² = 0.87).",
  },
  {
    src: "/projects/paid-ads-budget-optimization/channel-contribution.png",
    width: 2604,
    height: 1120,
    caption: "Estimated contribution to conversions by channel.",
  },
  {
    src: "/projects/paid-ads-budget-optimization/our-response-curve.png",
    width: 1288,
    height: 1018,
    caption: "Fitted response curve and saturation point for our paid ads spend.",
  },
];

const budget_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/paid-ads-budget-optimization/budget-allocation.png",
    width: 2702,
    height: 720,
    caption: "Recommended budget allocation, scaled by the team's potential-improvement ratio.",
  },
];

export default function Page() {
  return (
    <ProjectPageShell
      name="Paid Ads Budget Optimization"
      tags={["Marketing Mix Modeling", "Causal Inference", "Python"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">Pain Points</h2>
      <p className="mt-3">
        Paid ads were attributed to most of our conversions, but we had no
        reliable way to decide how much budget to put behind them — more
        spend wasn&apos;t guaranteed to buy more incremental conversions.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Model Building</h2>
      <p className="mt-3">
        To answer that, I needed the marketing response curve — how
        incremental conversions change with spend — and where it saturates,
        i.e. the point past which more spend stops paying off.
      </p>
      <div className="mt-3">
        <ImageCarousel slides={response_curve_gallery} />
      </div>
      <p className="mt-3">
        Marketing mix modeling (MMM) is a well-established way to estimate
        this curve, so I trained one on our historical spend and conversion
        data.
      </p>
      <div className="mt-3">
        <ImageCarousel slides={model_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Model Application</h2>
      <p className="mt-3">
        The model fit well (R² = 0.87), but it recommended cutting our paid
        ads budget — our incremental ROAS was below our breakeven threshold
        of 3x. 
      </p>
      <p>
        The catch: the model was trained on three years of data during
        which our paid ads execution had been underperforming, and we had
        just built a dedicated paid ads team and they believed they could do
        better than that baseline. Therefore, rather than apply the
        model&apos;s recommendation as-is, I introduced 
        a &quot;potential ratio&quot; reflecting how much the new team
        believed they could outperform the historical baseline. The &quot;potential ratio&quot; gave them
        flexibility to have more budget to work with, while still being grounded in the model&apos;s recommendation.
      </p>
      <div className="mt-3">
        <ImageCarousel slides={budget_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Impact</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          Replaced ad-hoc budget decisions with a repeatable,
          data-grounded allocation process the paid ads team could act on.
        </li>
      </ul>
    </ProjectPageShell>
  );
}
