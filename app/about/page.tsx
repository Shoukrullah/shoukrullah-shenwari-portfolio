import AboutMe from "../_components/AboutMe";
import HowDoIWork from "../_components/HowDoIWork";
import Skills from "../_components/Skills";
import styles from "./page.module.css";
function page() {
  return (
    <section className={`${styles.aboutContainer} max-width`}>
      <AboutMe />
      <Skills />
      <HowDoIWork />
    </section>
  );
}

export default page;
