import type { Metadata } from "next";
import {
  SiGithub,
  SiKaggle,
  SiMedium,
  SiLeetcode,
} from "@icons-pack/react-simple-icons";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact — Evan Yue Zhang",
  description: "Get in touch with Evan Yue Zhang.",
};

const links = [
  {
    label: "Email",
    value: "zhangyue325 [at] gmail [dot] com",
    href: "/#"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yue-zhang-798856190",
    href: "https://linkedin.com/in/yue-zhang-798856190",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/zhangyue325", Icon: SiGithub },
  { label: "Kaggle", href: "https://www.kaggle.com/zhangyue325", Icon: SiKaggle },
  { label: "Medium", href: "https://medium.com/@zhangyue325", Icon: SiMedium },
  {label: "LeetCode", href: "https://leetcode.com/u/q9797666/", Icon: SiLeetcode },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <h2 className="text-6xl font-medium tracking-tight sm:text-7xl">
                Let&apos;s Talk
              </h2>
              <p className="mt-6 max-w-md text-xl leading-snug text-zinc-900 sm:text-2xl">
                Open to conversations about career opportunities, life in Singapore, interesting project, or just a friendly chat. Feel free to reach out :/
              </p>
            </div>

            <dl className="divide-y divide-black/[.08] border-y border-black/[.08] sm:self-center">
              {links.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <dt className="font-medium">{link.label}</dt>
                  <dd>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
                    >
                      {link.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="flex gap-4 sm:col-start-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] transition-colors hover:border-black/[.16]"
                  >
                    <Icon size={18} color="default" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
