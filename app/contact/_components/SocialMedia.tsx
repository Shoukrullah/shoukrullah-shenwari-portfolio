"use client";
import { BsYoutube } from "react-icons/bs";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiX } from "react-icons/si";
import styles from "../page.module.css";
import { motion } from "framer-motion";

function SocialMedia() {
  return (
    <motion.div
      className={styles.socialMediaContainer}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 90 }}
    >
      <span>
        <RxLinkedinLogo />{" "}
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
    </motion.div>
  );
}

export default SocialMedia;
