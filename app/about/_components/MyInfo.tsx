import Heading from "@/app/_components/Heading";
import InfoList from "@/app/_components/InfoList";
import { RxDrawingPin } from "react-icons/rx";
import styles from "../page.module.css";
import FadeInContainer from "@/app/_animations/FadeInContainer";

function MyInfo() {
  return (
    <div>
      <FadeInContainer stiffness={90} delay={0.1}>
        <Heading fontSize="3rem" margin="0 0 .5rem 0">
          About Me
        </Heading>
        <p className="paragraph-color--2">
          I&apos;m a <strong>Full-Stack Web Developer</strong> who loves turning
          ideas into clean, fast, responsive and user-friendly web applications.
        </p>
      </FadeInContainer>
      <div className={styles.infoAndUlContainer}>
        <FadeInContainer y={0} x={30} stiffness={50} delay={0.2}>
          <ul>
            <InfoList />
          </ul>
        </FadeInContainer>
        <FadeInContainer y={5} delay={0.4} x={5} stiffness={60}>
          <div className={styles.goal}>
            <span>
              <RxDrawingPin />
            </span>
            <p className={styles.justify}>
              I&apos;m committed to continuous learning through real-world
              projects and enhancing user experience with modern web
              technologies.
            </p>
          </div>
        </FadeInContainer>
      </div>
    </div>
  );
}

export default MyInfo;
