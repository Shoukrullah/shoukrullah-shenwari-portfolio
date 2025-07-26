import pic from "@/public/pictures/my new photo.webp";
import Image from "next/image";
import FadeIn from "../_animations/FadeInContainer";

function Photo() {
  return (
    <FadeIn y={40} stiffness={40}>
      <Image
        src={pic}
        alt="Shoukrullah Shenwari"
        quality={100}
        placeholder="blur"
      />
    </FadeIn>
  );
}

export default Photo;
