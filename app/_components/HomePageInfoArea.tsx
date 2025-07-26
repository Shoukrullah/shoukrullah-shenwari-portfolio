import styles from "@/app/page.module.css";
import FadeIn from "../_animations/FadeInContainer";
import WorkDone from "./WorkDone";
import WhoImI from "./WhoImI";
function HomePageInfoArea() {
  return (
    <div>
      <FadeIn className={styles.workDoneArea} y={-15} stiffness={80}>
        <WorkDone count={30} label="Projects Completed" />
        <WorkDone count={2} label="Years of Experience" />
      </FadeIn>
      <WhoImI />
    </div>
  );
}

export default HomePageInfoArea;
