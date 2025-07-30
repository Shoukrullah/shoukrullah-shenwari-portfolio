import Home from "./_components/Home";
import styles from "./page.module.css";
async function HomePage() {
  return (
    <div className={`${styles.HomePageContainer} max-width`}>
      <Home />
    </div>
  );
}

export default HomePage;
