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
  fontWeight?: CSSProperties['fontWeight'] | string ;
}
function Heading({
  fontSize,
  fontWeight = 'normal',
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
    fontWeight
  };
  return <h1 style={styles}>{children}</h1>;
}

export default Heading;
