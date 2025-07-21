"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";

function Footer() {
  return (
    <motion.footer
      className={styles.footerContainer}
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: "tween", ease: "easeInOut" }}
    >
      <p>&copy; 2025, All Rights Reserved.</p>
      <p>
        Designed by <em>Shoukrullah Shenwari</em>
      </p>
    </motion.footer>
  );
}

export default Footer;
