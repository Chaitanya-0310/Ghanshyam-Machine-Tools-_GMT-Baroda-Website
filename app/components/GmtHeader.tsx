"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Machines", href: "/#products" },
  { label: "How GMT helps", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function GmtHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="gmt-header">
      <Link className="gmt-header__brand" href="/" aria-label="Ghanshyam Machine Tools home">
        <svg viewBox="245 108 1070 812" role="img" aria-label="GMT logo">
          <image href="/gmt-logo-reference.png" width="1454" height="1082" />
        </svg>
        <span>
          <strong>Ghanshyam</strong>
          Machine Tools
        </span>
      </Link>

      <p className="gmt-header__location">GIDC Makarpura <span>·</span> Vadodara</p>

      <nav className="gmt-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="gmt-header__menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        <span>{menuOpen ? "Close" : "Menu"}</span>
      </button>

      <Link className="gmt-header__cta" href="/#enquire">
        <span>Start an Enquiry</span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </Link>

      <nav
        id="mobile-navigation"
        className={`gmt-header__mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href="/#enquire" onClick={closeMenu}>Start an Enquiry</Link>
      </nav>
    </header>
  );
}
