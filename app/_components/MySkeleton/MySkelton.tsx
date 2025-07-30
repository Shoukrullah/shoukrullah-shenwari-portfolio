import { CSSProperties } from "react";
import styles from "./MySkelton.module.css";
interface Props {
  width?: string;
  height?: string;
  color?: string;
  count?: number;
  borderRadius?: number;
  marginBottom?: number;
  marginTop?:number
  marginRight?: string;
  display?: CSSProperties['display'] ,
}

function MySkelton({
  color = "rgba(211, 211, 211, 0.558)",
  height = "1rem",
  width = "1.5rem",
  count = 1,
  borderRadius = 0,
  marginBottom = 0,
  marginTop = 0,
  marginRight,
  display = 'block',
}: Props) {
  const skeletonCount = Array.from({ length: count }, (_, i) => i + 1);

  const myStyles: CSSProperties = {
    backgroundColor: color,
    height,
    width,
    borderRadius: borderRadius + "px",
    marginBottom,
    marginTop,
    marginRight,
    display,
    
  };
  return (
    <>
      {skeletonCount.map((_, i) => (
        <div
          key={i}
          style={myStyles}
          className={styles.MySkeltonContainer}
        ></div>
      ))}
    </>
  );
}

export default MySkelton;
