import HomePageInfoArea from "./HomePageInfoArea";
import Photo from "./Photo";
import styles from "../page.module.css";

function Home() {
  return (
    <div className={styles.homeInfoGridContainer}>
      <HomePageInfoArea />
      {/* <LeftLine /> */}
      <div className={styles.photoContainer}>
        <Photo />
      </div>
    </div>
  );
}

export default Home;
