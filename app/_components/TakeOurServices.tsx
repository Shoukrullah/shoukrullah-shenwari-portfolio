import ScrollFadeIn from "../_animations/ScrollFadeIn";
import LinkTo from "./LinkTo";
import styles from "./TakeOurServices.module.css";
import { RxArrowTopRight } from "react-icons/rx";
import { SiReact } from "react-icons/si";

function TakeOurServices() {
  return (
    <div className={styles.takeServicesContainer}>
      <ScrollFadeIn delay={0.2}>
        <div>
          <h3>Ready to bring your dream website to life?</h3>
          <p>
            Let&apos;s make your website with latest technologies. We grantee
            best performance and clean design.
          </p>
          <LinkTo href="/contact" marginTop={10}>
            Contact Me <RxArrowTopRight />
          </LinkTo>
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.3} stiffness={60}>
        <SiReact  />
      </ScrollFadeIn>
    </div>
  );
}

export default TakeOurServices;
