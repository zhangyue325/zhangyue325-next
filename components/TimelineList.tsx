"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type TimelineProject = {
  name: string;
  description: string;
  tags: string[];
  slug?: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  label: string;
  period: string;
  logo?: string;
  description?: string;
  projects?: TimelineProject[];
};

type TimelineListProps = {
  items: TimelineItem[];
  defaultOpenIndex?: number | null;
};

export default function TimelineList({ items, defaultOpenIndex = null }: TimelineListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <ul className="mt-4 flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isExpandable = Boolean(item.description);

        return (
          <li key={`${item.title}-${item.period}`} className="border-b border-black/[.08]">
            <button
              type="button"
              onClick={() => isExpandable && setOpenIndex(isOpen ? null : index)}
              aria-expanded={isExpandable ? isOpen : undefined}
              className={`flex w-full flex-wrap items-center gap-4 py-5 text-left ${
                isExpandable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <span className="w-full shrink-0 text-sm text-zinc-500 sm:w-32">
                {item.period}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-black/[.08] bg-white">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={36}
                    height={36}
                    className="h-full w-full object-contain p-1"
                  />
                ) : (
                  <span className="text-xs font-medium text-zinc-400">
                    {item.title.charAt(0)}
                  </span>
                )}
              </span>
              <h3 className="min-w-0 flex-1 font-medium">
                {item.title}, {item.subtitle}
              </h3>
              <span className="ml-auto shrink-0 whitespace-nowrap font-medium">
                {item.label}
              </span>
              {isExpandable && (
                <span className="text-zinc-400">{isOpen ? "–" : "+"}</span>
              )}
            </button>

            {isExpandable && isOpen && (
              <div className="pb-6">
                <p className="max-w-2xl text-zinc-600">{item.description}</p>

                {item.projects && (
                  <ul className="mt-4 flex flex-col gap-3 border-l border-black/[.08] pl-4">
                    {item.projects.map((project) => (
                      <li key={project.name}>
                        {project.slug ? (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="text-sm font-medium hover:underline"
                          >
                            {project.name}
                          </Link>
                        ) : (
                          <h4 className="text-sm font-medium">{project.name}</h4>
                        )}
                        <p className="mt-0.5 text-sm text-zinc-600">
                          {project.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
