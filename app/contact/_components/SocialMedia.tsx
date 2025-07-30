"use client";
import { BsYoutube } from "react-icons/bs";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiX } from "react-icons/si";
import styles from "../page.module.css";
import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";

function SocialMedia() {
  return (
    <ScrollFadeIn
      y={"100%"}
      delay={0.1}
      stiffness={90}
      className={styles.socialMediaContainer}
    >
      <span>
        <RxLinkedinLogo />
      </span>
      <span>
        <RxGithubLogo />
      </span>
      <span>
        <SiX />
      </span>
      <span>
        <BsYoutube />
      </span>
    </ScrollFadeIn>
  );
}

export default SocialMedia;
