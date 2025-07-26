import Heading from "@/app/_components/Heading";
import styles from "../page.module.css";
import FadeInContainer from "@/app/_animations/FadeInContainer";

function ServicesHeader() {
  return (
    <FadeInContainer>
      <Heading
        textTransform="uppercase"
        textAlign="center"
        letterSpacing="0.1rem"
        fontSize="3rem"
        margin="2rem 0 0 0"
      >
        What we offer
      </Heading>
      <p className={styles.paragraph}>
        We use Web latest technologies to build fast and clean websites. Whether
        you need a personal portfolio or a landing page for your product, I can
        help bring your vision to life.
      </p>
    </FadeInContainer>
  );
}

export default ServicesHeader;
