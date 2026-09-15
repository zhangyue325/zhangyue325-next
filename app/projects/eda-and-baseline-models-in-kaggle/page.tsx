import type { Metadata } from "next";
import ProjectPageShell from "@/components/ProjectPageShell";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "EDA & Baseline Models (Kaggle) — Evan Yue Zhang",
  description:
    "Exploratory data analysis and XGBoost/LGBM baseline models for Kaggle's Predict Student Performance from Game Play competition — Silver Notebook Medal.",
};

const eda_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/share_of_missing_data.png",
    width: 876,
    height: 473,
    caption: "Sharing of missing values in train data",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/examine_session_id_column.png",
    width: 876,
    height: 473,
    caption: "Events per session — right-skewed, averaging 1,116.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/examine_elapsed_time_column.png",
    width: 775,
    height: 425,
    caption: "Event timing decays fast after the first ~20 minutes.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/examine_level_property.png",
    width: 533,
    height: 571,
    caption: "Levels 0–22, grouped into the three scored checkpoints.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/correlation_in_train_dataset.png",
    width: 750,
    height: 677,
    caption: "Correlation matrix used to spot redundant features.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/examine_geo_location_properties1.png",
    width: 849,
    height: 360,
    caption: "Click-density heatmap — the closet room.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/examine_geo_location_properties2.png",
    width: 741,
    height: 366,
    caption: "Click-density heatmap — the entry room.",
  },
];

const feature_and_model_gallery: {
  src: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/aggragate_statistics_for_numeric_variables.png",
    width: 856,
    height: 352,
    caption: "Per-session numeric aggregates (elapsed time, hover duration) are heavily right-skewed, with outlier sessions far above the median.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/aggregate_statistics_for_categorical_varaibles.png",
    width: 868,
    height: 360,
    caption: "Per-session event counts by page and level — count and spread both grow through level 3, the busiest checkpoint.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/percentage_for_each _event_name.png",
    width: 857,
    height: 354,
    caption: "Share of event types per session — navigate_click and object_click dominate, together making up over half of all events.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/game_config_features.png",
    width: 863,
    height: 363,
    caption: "Game settings (fullscreen, HQ, music) are binary and mostly left off — low-variance features kept mainly for completeness.",
  },
  {
    src: "/projects/eda-and-baseline-models-in-kaggle/xgb_model.png",
    width: 927,
    height: 764,
    caption: "One XGBoost classifier per question (18 total), grid-searched over max_depth on the feature set matching its checkpoint group.",
  },
];

export default function Page() {
  return (
    <ProjectPageShell
      name="EDA & Baseline XGBoost Model (Kaggle)"
      tags={["Kaggle", "EDA", "Machine Learning", "XGBoost"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Overview
      </h2>
      <p className="mt-3">
        EDA and XGBoost baseline models for Kaggle&apos;s{" "}
        <a
          href="https://www.kaggle.com/competitions/predict-student-performance-from-game-play"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          Predict Student Performance from Game Play
        </a>{" "}
        competition — predicting correctness of in-game questions from player
        clickstream data.
      </p>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        EDA
      </h2>
      <div className="mt-3">
        <ImageCarousel slides={eda_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Feature Engineering and Model Building
      </h2>
      <div className="mt-3">
        <ImageCarousel slides={feature_and_model_gallery} />
      </div>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">
        Results
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>100+ upvotes on Kaggle 👍</li>
        <li>Silver Notebook Medal 🥈</li>
      </ul>

      <div className="mt-10">
        <a
          href="https://www.kaggle.com/code/zhangyue325/eda-xgboost-and-lgbm-baseline"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          View the Kaggle notebook &rarr;
        </a>
      </div>
    </ProjectPageShell>
  );
}
