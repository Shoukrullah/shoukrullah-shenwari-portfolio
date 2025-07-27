import pic from "@/public/pictures/my new photo.webp";
import Image from "next/image";
import FadeInContainer from "../_animations/FadeInContainer";

function Photo() {
  return (
    <FadeInContainer y={40} stiffness={40}>
      <Image
        src={pic}
        alt="Shoukrullah Shenwari"
        quality={100}
        placeholder="blur"
      />
    </FadeInContainer>
  );
}

export default Photo;
