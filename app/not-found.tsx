import Link from "next/link";
import styles from "./notFound.module.css";

function notFound() {
  return (
    <div className={styles.notFoundContainer}>
      <p>This page does not exist.</p>
      <div>
        <Link href="/">Home-Page </Link>
      </div>
    </div>
  );
}

export default notFound;
