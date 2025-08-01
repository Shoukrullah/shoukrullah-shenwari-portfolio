"use client";
import { useEffect, useState } from "react";
import styles from "./SliderButton.module.css";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

function SliderButton() {
  const [isDark, setDark] = useState<boolean>(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
      document.body.setAttribute("data-theme", "dark");
    } else {
      setDark(false);
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <div className={styles.container} onClick={() => setDark((prev) => !prev)}>
      <div
        className={`${styles.darkModeContainer} ${
          isDark ? styles.buttonContainer : ""
        }`}
      >
        {isDark && <CiLight className={styles.svgLight} />}
        {!isDark && <MdOutlineNightlight className={styles.svgNight} />}
        <button
          className={`${styles.btn} ${isDark ? styles.btnDark : ""}`}
        ></button>
      </div>
    </div>
  );
}

export default SliderButton;
