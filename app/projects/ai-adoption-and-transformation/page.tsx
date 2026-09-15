import ProjectPageShell from "@/components/ProjectPageShell";

export default function Page(){
  return (
    <ProjectPageShell
        name="AI Adoption and Tranformation (PAZZION)"
        tags={["AI"]}
    >
      <h2 className="mt-8 text-2xl font-medium tracking-wide">AI ready data architecture</h2>
      <img src="/projects/ai-adoption-and-transformation/data-architecture.png"/>
      <img src="/projects/data-pipeline-tracker.png"/>

      <h2 className="mt-8 text-2xl font-medium tracking-wide">Explore Skills</h2>

    </ProjectPageShell>
  );
}