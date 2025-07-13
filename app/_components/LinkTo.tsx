import Link from "next/link";
import styles from "./LinkTo.module.css";
import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  marginTop?: number;
  width?: string;
  bgColor?: string;
}

function LinkTo({ children, href, marginTop, width, bgColor }: Props) {
  const newStyles: CSSProperties = {
    marginTop: marginTop + "px",
    width,
    backgroundColor: bgColor,
  };
  return (
    <Link href={href} className={styles.Link} style={newStyles}>
      {children}
    </Link>
  );
}

export default LinkTo;
