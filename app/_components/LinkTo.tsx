import Link from "next/link";
import styles from "./LinkTo.module.css";
import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  marginTop?: number;
  width?: string;
  bgColor?: string;
  fontSize?: string;
}

function LinkTo({ children, href, marginTop, width, bgColor,fontSize }: Props) {
  const newStyles: CSSProperties = {
    marginTop: marginTop + "px",
    width,
    backgroundColor: bgColor,
    fontSize
  };
  return (
    <Link href={href} className={styles.Link} style={newStyles}>
      {children}
    </Link>
  );
}

export default LinkTo;
