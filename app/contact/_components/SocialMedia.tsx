"use client";
import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import styles from "../page.module.css";

function SocialMedia() {
  return (
    <ScrollFadeIn
      y={"100%"}
      delay={0.1}
      stiffness={90}
      className={styles.socialMediaContainer}
    >
      <span>
        <a
          href="https://www.linkedin.com/in/shoukrullah-shenwari-abb83a2b9/"
          target="_blank"
        >
          <RxLinkedinLogo />
        </a>
      </span>
      <span>
        <a href="https://github.com/Shoukrullah" target="_blank">
          <RxGithubLogo />
        </a>
      </span>
    </ScrollFadeIn>
  );
}

export default SocialMedia;
