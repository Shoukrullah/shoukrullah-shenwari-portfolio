import EachServices from "../_components/EachServices";
import TakeOurServices from "../_components/TakeOurServices";
import ServicesHeader from "./_components/ServicesHeader";
import styles from "./page.module.css";

function page() {
  return (
    <div className={`${styles.servicesPageContainer} max-width`}>
      <ServicesHeader />
      <EachServices />
      <TakeOurServices />
    </div>
  );
}

export default page;
