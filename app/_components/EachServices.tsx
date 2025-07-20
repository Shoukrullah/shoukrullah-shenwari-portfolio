import servicesList, { ServicesShape } from "../_lib/servicesList";
import styles from "./EachServices.module.css";
import { RxGear } from "react-icons/rx";
import { CiMap } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { BsGlobe2 } from "react-icons/bs";
import { RxImage } from "react-icons/rx";
import { ReactNode } from "react";

function EachServices() {
  return (
    <ul className={styles.eachServicesContainer}>
      {servicesList.map((ser) => (
        <EachService key={ser.id} info={ser} />
      ))}
    </ul>
  );
}

export default EachServices;

function EachService({ info }: { info: ServicesShape }) {
  const iconMap: { [key: string]: ReactNode } = {
    website: <RxGear />,
    webDevelopment: <BsGlobe2 />,
    ui: <CiMap />,
    mobile: <CiMobile3 />,
    SEO: <RxDashboard />,
    redesign: <RxImage />,
  };
  return (
    <li>
      <div className={styles.iconContainer}>{iconMap[info.icon!] || null}</div>
      <div className={styles.infoContainer}>
        <strong>{info.label}</strong>
        <p>{info.description}</p>
      </div>
    </li>
  );
}
