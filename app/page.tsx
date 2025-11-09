import { Metadata } from "next";
import Home from "./_components/Home";
import styles from "./page.module.css";
function HomePage() {

  return (
    <div className={`${styles.HomePageContainer} max-width`}>
      <Home />
    </div>
  );
}

export default HomePage;
export const metadata:Metadata = {
 title: 'Homepage - Shenwari',
 description: 'Homepage of Shoukrullah Shenwari is portfolio.',
 icons: {
  icon: '/pictures/favicon.png'
 }
}
