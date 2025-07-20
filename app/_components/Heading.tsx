import { CSSProperties } from "react";

interface Props {
  fontSize?: string;
  margin?: string;
  children: string;
  textAlign?: CSSProperties["textAlign"];
  display?: CSSProperties["display"];
  textTransform?: CSSProperties["textTransform"];
  letterSpacing?: CSSProperties["letterSpacing"];
  wordSpacing?: CSSProperties["wordSpacing"];
}
function Heading({
  fontSize,
  margin,
  children,
  textAlign,
  display,
  textTransform,
  letterSpacing,
  wordSpacing,
}: Props) {
  const styles: CSSProperties = {
    fontSize,
    margin,
    textAlign,
    display,
    textTransform,
    letterSpacing,
    wordSpacing,
  };
  return <div style={styles}>{children}</div>;
}

export default Heading;
