import styles from "@/app/about/page.module.css";
import MyInfo from "../about/_components/MyInfo";
import MyImage from "../about/_components/MyImage";

function AboutMe() {
  return (
    <div className={styles.underAboutContainer}>
      <MyImage />
      <MyInfo />
    </div>
  );
}

export default AboutMe;
