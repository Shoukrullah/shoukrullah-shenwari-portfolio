"use client";
import styles from "../page.module.css";
import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";

function Footer() {
  return (
    <ScrollFadeIn delay={0.3} y={10} type="tween" ease={"easeInOut"}>
      <footer className={`${styles.footerContainer}`}>
        <p>&copy; 2025, All Rights Reserved.</p>
        <p>
          Designed by <em>Shoukrullah Shenwari</em>
        </p>
      </footer>
    </ScrollFadeIn>
  );
}

export default Footer;
