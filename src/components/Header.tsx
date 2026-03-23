"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Corporate & Nonprofit", href: "/corporate-nonprofit" },
      { label: "Wine Pairing", href: "/wine-pairing" },
      { label: "Design & Staging", href: "/design-staging" },
    ],
  },
  {
    label: "Locations",
    href: "#",
    children: [{ label: "Pacific Northwest", href: "/pacific-northwest" }],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="flex justify-center py-6 md:py-8">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Chisa Blair | Design & Events"
            width={400}
            height={205}
            className="h-24 md:h-40 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center items-center pb-4 gap-8">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() =>
              item.children && setOpenDropdown(item.label)
            }
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.children ? (
              <button className="text-xs tracking-[2px] uppercase font-light text-black hover:opacity-60 transition-opacity">
                {item.label}
              </button>
            ) : (
              <Link
                href={item.href}
                className="text-xs tracking-[2px] uppercase font-light text-black hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            )}
            {item.children && openDropdown === item.label && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-md py-2 min-w-[200px] z-50">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-6 py-2 text-xs tracking-[1.5px] uppercase font-light text-black hover:opacity-60 transition-opacity"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end px-6 pb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className="block w-full text-left py-3 text-xs tracking-[2px] uppercase font-light text-black"
                  >
                    {item.label}
                  </button>
                  {openDropdown === item.label &&
                    item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 pl-4 text-xs tracking-[1.5px] uppercase font-light text-black"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 text-xs tracking-[2px] uppercase font-light text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
