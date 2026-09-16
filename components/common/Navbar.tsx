"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-foreground">
          SpaceTech
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Auth button */}
        <Link
          href="/login"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Login / Sign up
        </Link>
      </div>
    </nav>
  );
}
