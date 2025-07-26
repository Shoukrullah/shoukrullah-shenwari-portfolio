import EachServices from "../_components/EachServices";
import TakeOurServices from "../_components/TakeOurServices";
import ServicesHeader from "./_components/ServicesHeader";
import styles from "./page.module.css";

function page() {
  return (
    <section className={`${styles.servicesPageContainer} max-width`}>
      <ServicesHeader />
      <EachServices />
      <TakeOurServices />
    </section>
  );
}

export default page;
