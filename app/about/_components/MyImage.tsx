import FadeInContainer from "@/app/_animations/FadeInContainer";
import styles from "@/app/about/page.module.css";
import logo from "@/public/pictures/Polish_20250714_055114106_result.webp";
import Image from "next/image";
function MyImage() {
  return (
    <div className={styles.photoContainer}>
      <FadeInContainer y={0} x={-50} stiffness={90}>
        <Image src={logo} alt="Shoukrullah Shenwari" quality={60} />
      </FadeInContainer>
    </div>
  );
}

export default MyImage;
