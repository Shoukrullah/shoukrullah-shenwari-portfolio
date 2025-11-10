import { RxArrowTopRight } from "react-icons/rx";
import ScrollFadeIn from "../_animations/ScrollFadeIn";
import myWorkPattern from "../_lib/myWorkPattern";
import EachWork from "./EachWork";
import EachWorkIcon from "./EachWorkIcon";
import Heading from "./Heading";
import styles from "./HowDoIWork.module.css";
import LinkTo from "./LinkTo";

function HowDoIWork() {
  return (
    <div className={styles.HowWorkGeneralContainer}>
      <ScrollFadeIn>
        <Heading fontSize="2.8rem">How Do I Work</Heading>
        <p className="paragraph-color--2">
          In order to build professional websites I follow a specific pattern
          which helps me to create beautiful, powerful and clean websites.
        </p>
      </ScrollFadeIn>
      <div className={styles.HowDoIWorkContainer}>
        <div>
          <ul>
            {myWorkPattern.map((work) => (
              <EachWork key={work.id} work={work} />
            ))}
          </ul>
        </div>
        <div className={styles.EachWorkIconContainer}>
          <EachWorkIcon />
        </div>
      </div>
      <div className={styles.lastChild}>
        <ScrollFadeIn delay={0.3} stiffness={50} >
          <p className={styles.lastParagraph}>
            All that I have learned-and continue to learn-is by the grace and
            blessings of Almighty God. Without his mercy, I would not be where I
            am today.
          </p>
          <LinkTo marginTop={10} href="/services">Our Services <RxArrowTopRight /></LinkTo>
        </ScrollFadeIn>
      </div>
    </div>
  );
}

export default HowDoIWork;
