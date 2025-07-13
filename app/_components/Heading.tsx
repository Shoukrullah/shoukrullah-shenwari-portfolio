import { CSSProperties } from "react";

interface Props {
    fontSize?: string;
    margin?: string
    children: string;
    textAlign?: CSSProperties['textAlign'];
    display?: CSSProperties['display']
}
function Heading({fontSize,margin,children,textAlign,display}:Props) {
    const styles:CSSProperties = {
        fontSize,
        margin,
        textAlign,
        display
    }
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default Heading
