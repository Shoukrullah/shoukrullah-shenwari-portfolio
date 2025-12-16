import styles from "@/app/page.module.css";
import { RxBorderSolid, RxDownload } from "react-icons/rx";
import FadeInContainer from "../_animations/FadeInContainer";
import Heading from "./Heading";
import LinkTo from "./LinkTo";

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
          <p>
            It&apos;s Shoukrullah Shenwari a Frontend and Backend Web Developer.
          </p>
        </div>
      </FadeInContainer>
      <div className={styles.linkContainer}>
        <FadeInContainer y={0} x={-50} delay={0.3}>
          <LinkTo bgColor="var(--primary--color)" href="/about">
            About Me
          </LinkTo>
        </FadeInContainer>
        <FadeInContainer type="tween" y={0} x={50}  delay={0.3}>
          <LinkTo
            download
            target
            bgColor="var(--dark--brand--2)"
            href="/Shoukrullah updated CV.pdf"
          >
            My Resume <RxDownload />
          </LinkTo>
        </FadeInContainer>
      </div>
    </div>
  );
}

export default WhoImI;
