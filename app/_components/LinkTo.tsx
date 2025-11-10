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
  target?: boolean;
  download?: boolean;
}

function LinkTo({
  children,
  href,
  marginTop,
  width,
  bgColor,
  fontSize,
  target = false,
  download = false,
}: Props) {
  const newStyles: CSSProperties = {
    marginTop: marginTop + "px",
    width,
    backgroundColor: bgColor,
    fontSize,
  };
  return (
    <Link
      href={href}
      className={styles.Link}
      download={download}
      rel="oopener noreferrer"
      target={target ? "_blank" : ""}
      style={newStyles}
    >
      {children}
    </Link>
  );
}

export default LinkTo;
