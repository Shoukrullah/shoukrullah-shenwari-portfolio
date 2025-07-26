"use client";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { RxEnvelopeClosed } from "react-icons/rx";
import { ServicesShape } from "../_lib/servicesList";
import styles from "./ContactMeInfo.module.css";
import FadeInContainer from "../_animations/FadeInContainer";

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
    <FadeInContainer x={"-50%"} delay={0.2} y={0}>
      <ul className={styles.myInfoContainer}>
        {myInfo.map((info) => (
          <EachContactInfo key={info.id} info={info} />
        ))}
      </ul>
    </FadeInContainer>
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
