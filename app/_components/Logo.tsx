import Link from "next/link";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <MdOutlineTipsAndUpdates fill="var(--primary--color)" /> Shenwari
      </Link>
    </div>
  );
}

export default Logo;
