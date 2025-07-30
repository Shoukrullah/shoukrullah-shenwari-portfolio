import ScrollFadeIn from "../_animations/ScrollFadeIn";
import NextJsSVG from "./NextJsSVG";

function EachWorkIcon() {
  return (
    <ScrollFadeIn y={0} x={100} delay={0.2} stiffness={60}>
      <NextJsSVG  />
    </ScrollFadeIn>
  );
}

export default EachWorkIcon;
