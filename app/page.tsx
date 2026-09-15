import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <About />
        <Experience />
        <Education />
      </main>
    </div>
  );
}
