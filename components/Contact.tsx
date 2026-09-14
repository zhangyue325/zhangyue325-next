const links = [
  { label: "Email", href: "mailto:zhangyue325@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yue-zhang-798856190" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/[.08] py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Contact
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-medium underline underline-offset-4 hover:text-zinc-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
