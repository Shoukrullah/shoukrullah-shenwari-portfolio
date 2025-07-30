"use client";
import { useEffect, useState } from "react";
import styles from "./SliderButton.module.css";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
function SliderButton() {
  const [isDark, setDark] = useState<boolean>(() => {
    const myTheme = localStorage.getItem("theme") === "light" ? false : true;
    return myTheme || false;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
  }, [isDark]);

  //   [data-theme="dark"] { // css properties must be added.
  // }
  return (
    <div
      className={styles.container}
      onClick={() => {
        setDark((pre) => !pre);
        localStorage.setItem("theme", !isDark ? "dark" : "light");
      }}
    >
      <div
        className={`${styles.darkModeContainer} ${
          isDark ? styles.buttonContainer : ""
        }`}
      >
        {isDark && <CiLight className={`${isDark ? styles.svgLight : ""}`} />}
        {!isDark && (
          <MdOutlineNightlight
            className={`${!isDark ? styles.svgNight : ""}`}
          />
        )}
        <button
          className={`${styles.btn} ${isDark ? styles.btnDark : ""}`}
        ></button>
      </div>
    </div>
  );
}

export default SliderButton;
