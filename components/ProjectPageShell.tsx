import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";

type ProjectPageShellProps = {
  name: string;
  role?: string;
  year?: string;
  tags: string[];
  children: ReactNode;
};

export default function ProjectPageShell({
  name,
  role,
  year,
  tags,
  children,
}: ProjectPageShellProps) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-foreground"
          >
            &larr; Back to projects
          </Link>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {name}
          </h1>

          {(role || year) && (
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
              {role && <span>{role}</span>}
              {year && <span>{year}</span>}
            </div>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-2xl text-lg text-zinc-600">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
