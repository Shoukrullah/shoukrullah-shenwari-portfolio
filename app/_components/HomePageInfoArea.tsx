import Heading from "./Heading";
import LinkTo from "./LinkTo";
import WorkDone from "./WorkDone";
import styles from "@/app/page.module.css";
import { RxBorderSolid } from "../../node_modules/react-icons/rx";

function HomePageInfoArea() {
  return (
    <div>
      <div className={styles.workDoneArea}>
        <WorkDone count={30} label="Projects Completed" />
        <WorkDone count={2} label="Years of Experience" />
      </div>
      <div className={styles.whoAmI}>
        <Heading fontSize="12rem" margin="6rem 0 0 0">
          Hello!
        </Heading>

        <div className={styles.myContainer}>
          <span>
            <RxBorderSolid />
          </span>
          <p>It&apos;s Shoukrullah Shenwari a Front-End Web Developer.</p>
        </div>

        <div className={styles.linkContainer}>
          <LinkTo bgColor="var(--primary--color)" href="/about">
            About me
          </LinkTo>
        </div>
      </div>
    </div>
  );
}

export default HomePageInfoArea;
