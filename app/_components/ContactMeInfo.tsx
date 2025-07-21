"use client";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { RxEnvelopeClosed } from "react-icons/rx";
import { ServicesShape } from "../_lib/servicesList";
import styles from "./ContactMeInfo.module.css";
import { motion } from "framer-motion";

const myInfo: ServicesShape[] = [
  {
    id: 1,
    label: "Address",
    description: "Kabul, Afghanistan",
    icon: "address",
  },
  {
    id: 2,
    label: "Call Me",
    description: "+93 728131373",
    icon: "phone",
  },
  {
    id: 3,
    label: "Email Me",
    description: "shockrullahshenwari@gmail.com",
    icon: "email",
  },
];

function ContactMeInfo() {
  return (
    <motion.div
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x:0, opacity: 1}}
      transition={{ type: "spring", stiffness: 120,delay:.2 }}
    >
      <ul className={styles.myInfoContainer}>
        {myInfo.map((info) => (
          <EachContactInfo key={info.id} info={info} />
        ))}
      </ul>
    </motion.div>
  );
}

export default ContactMeInfo;

function EachContactInfo({ info }: { info: ServicesShape }) {
  const iconMap: { [key: string]: React.ReactNode } = {
    address: <CiLocationOn />,
    phone: <BsTelephone />,
    email: <RxEnvelopeClosed />,
  };
  return (
    <li>
      <div>
        <span>{iconMap[info.icon!]}</span>
      </div>
      <div>
        <strong>{info.label}</strong>
        <p>{info.description}</p>
      </div>
    </li>
  );
}
