import LinkTo from "./LinkTo";
import styles from "./TakeOurServices.module.css";
import { RxArrowTopRight } from "react-icons/rx";
import { SiReact } from "react-icons/si";

function TakeOurServices() {
  return (
    <div className={styles.takeServicesContainer}>
      <div>
        <h3>Ready to bring your dream website to life?</h3>
        <p>
          Let&apos;s make your website with latest technologies. We grantee best
          performance and clean design.
        </p>
        <LinkTo href="/contact" marginTop={10}>
          Contact Me <RxArrowTopRight />
        </LinkTo>
      </div>
      <div>
        <SiReact />
      </div>
    </div>
  );
}

export default TakeOurServices;
