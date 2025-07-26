import LinkTo from "@/app/_components/LinkTo";
import { RxArrowTopRight } from "react-icons/rx";
import styles from "./Projects.module.css";
import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";

function Footer() {
  return (
    <footer className={styles.footerProjects}>
      <ScrollFadeIn>
        <h2>Ready to start creating a standard website?</h2>
        <p className="paragraph-color--2">
          I&apos;m open to freelance and full-time opportunities. Let&apos;s
          build something great together!
        </p>
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.2} stiffness={70} >
        <LinkTo href="/contact">
          Contact Me <RxArrowTopRight />
        </LinkTo>
      </ScrollFadeIn>
    </footer>
  );
}

export default Footer;
