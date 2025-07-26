import { RxBorderSolid } from "react-icons/rx";
import FadeIn from "../_animations/FadeInContainer";
import Heading from "./Heading";
import LinkTo from "./LinkTo";
import styles from "@/app/page.module.css";

function WhoImI() {
  return (
    <div className={styles.whoAmI}>
      <FadeIn y={15} stiffness={80} delay={0.1}>
        <Heading fontSize="12rem" margin="6rem 0 0 0">
          Hello!
        </Heading>
        <div className={styles.myContainer}>
          <span>
            <RxBorderSolid />
          </span>
          <p>It&apos;s Shoukrullah Shenwari a Front-End Web Developer.</p>
        </div>
      </FadeIn>
      <FadeIn className={styles.linkContainer} y={0} x={-50} delay={0.3}>
        <LinkTo bgColor="var(--primary--color)" href="/about">
          About me
        </LinkTo>
      </FadeIn>
    </div>
  );
}

export default WhoImI;
