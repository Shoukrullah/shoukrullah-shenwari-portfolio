// 'use client'
import SliderButton from "./SliderButton";
import styles from "./DarkMode.module.css";

function DarkMode() {
  return (
    <div className={styles.container}>
      <SliderButton />
    </div>
  );
}

export default DarkMode;
