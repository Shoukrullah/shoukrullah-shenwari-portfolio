import Heading from "../_components/Heading";
import InfoList from "../_components/InfoList";
import styles from "./page.module.css";
import Image from "next/image";
import { RxDrawingPin } from "react-icons/rx";
import logo from "@/public/pictures/Polish_20250714_055114106_result.webp";
import Skills from "../_components/Skills";
import LinkTo from "../_components/LinkTo";
function page() {
  return (
    <div className={`${styles.aboutContainer} max-width`}>
      <div className={styles.underAboutContainer}>
        <div className={styles.photoContainer}>
          <div>
            <Image src={logo} alt="Shoukrullah Shenwari" quality={80} />
          </div>
        </div>
        <div>
          <Heading fontSize="3rem" margin="0 0 .5rem 0">
            About Me
          </Heading>
          <p>
            I&apos;m a <strong>Front-End Developer</strong> who loves turning
            ideas into clean, fast, responsive and user-friendly websites.
          </p>
          <div className={styles.infoAndUlContainer}>
            <ul>
              <InfoList />
            </ul>
            <div className={styles.goal}>
              <span>
                <RxDrawingPin />
              </span>
              <p>
                My goal is to keep learning and growing as a developer by
                building amazing websites and working on real-world projects
                that helps people. i&apos;m especially interested in performance
                optimization, animation and improving user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
      <div className={styles.servicesParent}>
        <LinkTo href="/services" marginTop={10}>
          Services
        </LinkTo>
      </div>
    </div>
  );
}

export default page;
