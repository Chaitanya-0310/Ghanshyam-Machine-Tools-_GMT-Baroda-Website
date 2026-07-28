const navigation = [
  { label: "Product Range", href: "#products" },
  { label: "About GMT", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function GmtHeader() {
  return (
    <header className="gmt-header">
      <a className="gmt-header__brand" href="#main" aria-label="Ghanshyam Machine Tools home">
        <svg viewBox="245 108 1070 812" role="img" aria-label="GMT logo">
          <image href="/gmt-logo-reference.png" width="1454" height="1082" />
        </svg>
      </a>

      <nav className="gmt-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="gmt-header__cta" href="#enquire">
        Request a quote
      </a>
    </header>
  );
}
