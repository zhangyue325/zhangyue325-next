import TimelineList, { TimelineItem } from "./TimelineList";

const education: TimelineItem[] = [
  {
    title: "Nanyang Technological University",
    subtitle: "Singapore",
    label: "Master's, Business Analytics",
    period: "2021 — 2023",
    logo: "/logo/ntu-logo.png",
  },
  {
    title: "Jilin University",
    subtitle: "China",
    label: "Bachelor's, Finance",
    period: "2013 — 2017",
    logo: "/logo/jlu-logo.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-black/[.08] py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Education
      </h2>
      <TimelineList items={education} />
    </section>
  );
}
