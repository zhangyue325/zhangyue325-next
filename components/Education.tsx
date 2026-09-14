type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

const education: EducationItem[] = [
  {
    school: "Nanyang Technological University (NTU)",
    degree: "Master's, Business Analytics",
    period: "Jul 2021 — Jan 2023",
  },
  {
    school: "Jilin University",
    degree: "Bachelor's, Finance",
    period: "Sep 2013 — Jul 2017",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-black/[.08] py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Education
      </h2>
      <ul className="mt-6 flex flex-col gap-4">
        {education.map((item) => (
          <li key={item.school} className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-medium">{item.school}</h3>
              <p className="text-sm text-zinc-600">{item.degree}</p>
            </div>
            <span className="text-sm text-zinc-500">{item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
