import styles from "@/app/page.module.css";
import WorkDone from "./WorkDone";
import WhoImI from "./WhoImI";
import FadeInContainer from "../_animations/FadeInContainer";
function HomePageInfoArea() {
  return (
    <div>
      <FadeInContainer className={styles.workDoneArea} y={-15} stiffness={80}>
        <WorkDone count={30} label="Projects Completed" />
        <WorkDone count={2} label="Years of Experience" />
      </FadeInContainer>
      <WhoImI />
    </div>
  );
}

export default HomePageInfoArea;
