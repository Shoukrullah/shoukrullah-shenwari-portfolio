import EachServices from "../_components/EachServices";
import Heading from "../_components/Heading";
import TakeOurServices from "../_components/TakeOurServices";
import styles from './page.module.css'

function page() {
  return (
    <div className={`${styles.servicesPageContainer} max-width`}>
      <Heading
        textTransform="uppercase"
        textAlign="center"
        letterSpacing="0.1rem"
        fontSize="3rem"
      >
        What we offer
      </Heading>
      <p>
        We use Web latest technologies to build fast and clean websites. Whether
        you need a personal portfolio or a landing page for your product, I can
        help bring your vision to life.
      </p>
      <EachServices />
      <TakeOurServices />
    </div>
  );
}

export default page;
