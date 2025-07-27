import { RxArrowTopRight, RxBorderSolid } from "react-icons/rx";
import Heading from "./Heading";
import LinkTo from "./LinkTo";
import styles from "@/app/page.module.css";
import FadeInContainer from "../_animations/FadeInContainer";

function WhoImI() {
  return (
    <div className={styles.whoAmI}>
      <FadeInContainer y={15} stiffness={80} delay={0.1}>
        <Heading fontSize="12rem" margin="6rem 0 0 0">
          Hello!
        </Heading>
        <div className={styles.myContainer}>
          <span>
            <RxBorderSolid />
          </span>
          <p>It&apos;s Shoukrullah Shenwari a Front-End Web Developer.</p>
        </div>
      </FadeInContainer>
      <FadeInContainer className={styles.linkContainer} y={0} x={-50} delay={0.3}>
        <LinkTo bgColor="var(--primary--color)" href="/about">
          About Me
        </LinkTo>
        <LinkTo bgColor="var(--dark--brand--2)" href="/about">
          My Resume <RxArrowTopRight />
        </LinkTo>
      </FadeInContainer>
    </div>
  );
}

export default WhoImI;
