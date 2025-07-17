import pic from "@/public/pictures/my new photo.webp";
import Image from "next/image";

function Photo() {
  return (
    <Image
      src={pic}
      alt="Shoukrullah Shenwari"
      quality={100}
      placeholder="blur"
    />
  );
}

export default Photo;
