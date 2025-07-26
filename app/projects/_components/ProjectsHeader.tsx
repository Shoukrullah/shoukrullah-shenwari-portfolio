import Heading from "@/app/_components/Heading";
import styles from "./Projects.module.css";
import FadeInContainer from "@/app/_animations/FadeInContainer";

function ProjectsHeader() {
  return (
    <FadeInContainer>
      <div className={styles.pageHeader}>
        <Heading
          textTransform="uppercase"
          textAlign="center"
          letterSpacing="0.1rem"
          fontSize="3rem"
          margin="4rem 0 0 0"
        >
          My Projects
        </Heading>
        <p className="paragraph-color--2">
          Here are some of my
          <strong className="paragraph-color--1"> Front-End</strong> projects
          I&apos;ve built using Next.js, React, Vanilla JavaScript and other
          modern technologies.
        </p>
      </div>
    </FadeInContainer>
  );
}

export default ProjectsHeader;
