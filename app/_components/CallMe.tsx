"use Client";
import { useEffect, useState } from "react";
import { RiWhatsappLine } from "../../node_modules/react-icons/ri";
import styles from "./CallMe.module.css";
import { RxCheck, RxCopy } from "react-icons/rx";
import { Toaster, toast } from "react-hot-toast";
function CallMe() {
  const [isHover, setHover] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const handelClick = async () => {
    try {
      await navigator.clipboard.writeText("+93728131373");
      setClicked(true);
      if (!isClicked) toast("Phone number is copied.", { duration: 2000 });
    } catch (error) {
      console.log(error);
      setClicked(false);
    }
  };
  useEffect(() => {
    const id = setInterval(() => {
      setClicked(false);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div
        className={styles.callMeContainer}
        onClick={handelClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* (+93) 728131373 */}
        <span>
          {isClicked ? <RxCheck /> : !isHover ? <RiWhatsappLine /> : <RxCopy />}
        </span>
      </div>
      <Toaster />
    </>
  );
}

export default CallMe;
