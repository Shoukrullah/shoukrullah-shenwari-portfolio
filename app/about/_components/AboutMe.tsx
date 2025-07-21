import Skills from "@/app/_components/Skills";
import styles from "../page.module.css";
import LinkTo from "@/app/_components/LinkTo";

function AboutMe() {
  return (
    <>
      <AboutMe />
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
      <div className={styles.servicesParent}>
        <LinkTo href="/services" marginTop={10}>
          Services
        </LinkTo>
      </div>
    </>
  );
}

export default AboutMe;
