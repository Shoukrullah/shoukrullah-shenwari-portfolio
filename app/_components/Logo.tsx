import Link from "next/link";
import { CiBarcode } from "react-icons/ci";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <CiBarcode fill="var(--primary--color)" /> Shenwari
      </Link>
    </div>
  );
}

export default Logo;
