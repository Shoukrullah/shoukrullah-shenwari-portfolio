import myWorkPattern from "../_lib/myWorkPattern";
import EachWork from "./EachWork";
import EachWorkIcon from "./EachWorkIcon";
import Heading from "./Heading";
import styles from "./HowDoIWork.module.css";
import LinkTo from "./LinkTo";

function HowDoIWork() {
  return (
    <div className={styles.HowWorkGeneralContainer}>
      <Heading fontSize="2.8rem">How Do I Work</Heading>
      <p>
        In order to build professional websites we follow a specific pattern
        which help us to create beautiful, powerful and clean websites.
      </p>

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
        <p className={styles.lastParagraph}>
          All that I have learned-and continue to learn-is by the grace and
          blessings of Almighty God. Without his mercy, I would not be where I
          am today.{" "}
        </p>
        <LinkTo href="/contact">Contact Me</LinkTo>
      </div>
    </div>
  );
}

export default HowDoIWork;
