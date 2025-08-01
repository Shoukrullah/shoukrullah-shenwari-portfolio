import Loader from "./_components/Loader/Loader";
import styles from "./page.module.css";

function loading() {
  return (
    <div className={`${styles.SkeletonContainer} max-width`}><Loader  /></div>
  );
}

export default loading;
