import Link from "next/link";
import styles from "./samples.module.css";

type SampleLogoProps = {
  href?: string;
  compact?: boolean;
};

export function SampleLogo({ href = "/samples", compact = false }: SampleLogoProps) {
  return (
    <Link
      className={`${styles.logo} ${compact ? styles.logoCompact : ""}`}
      href={href}
      aria-label="Ghanshyam Machine Tools design samples"
    >
      <span className={styles.logoMark}>
        <img src="/gmt-logo-reference.png" alt="" width="1454" height="1082" />
      </span>
      <span className={styles.logoWords}>
        <strong>Ghanshyam</strong>
        <span>Machine Tools</span>
      </span>
    </Link>
  );
}

