import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Side Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-semibold tracking-tight">
          Evan Yue Zhang
        </Link>
        <ul className="flex gap-6 text-sm text-zinc-600">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
