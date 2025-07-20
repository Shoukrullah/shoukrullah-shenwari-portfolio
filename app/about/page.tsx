import styles from "./page.module.css";
import Skills from "../_components/Skills";
import LinkTo from "../_components/LinkTo";
import HowDoIWork from "../_components/HowDoIWork";
import AboutMe from "../_components/AboutMe";
function page() {
  return (
    <div className={`${styles.aboutContainer} max-width`}>
      <AboutMe />
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
      <div className={styles.servicesParent}>
        <LinkTo href="/services" marginTop={10}>
          Services
        </LinkTo>
      </div>
      <HowDoIWork />
    </div>
  );
}

export default page;
