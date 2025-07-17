import HomePageInfoArea from "./_components/HomePageInfoArea";
// import LeftLine from "./_components/LeftLine";
import Photo from "./_components/Photo";
import styles from "./page.module.css";
function HomePage() {
  return (
    <div className={`${styles.HomePageContainer} max-width`}>
      <div className={styles.homeInfoGridContainer}>
        <HomePageInfoArea />
        {/* <LeftLine /> */}
        <div className={styles.photoContainer}>
          <Photo />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
