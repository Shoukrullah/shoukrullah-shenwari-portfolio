import styles from "./page.module.css";

function loading() {
  return (
    <div className={`${styles.SkeletonContainer} max-width`}>loading...</div>
  );
}

export default loading;
