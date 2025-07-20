// import styles from './HowDoIWork.module.css'

import { ServicesShape } from "../_lib/servicesList";

function EachWork({ work }: { work: ServicesShape }) {
  return (
    <li>
      <span>{`${work.id < 10 ? `0` + work.id : work.id}`}</span>
      <strong>{work.label}</strong>
      <p>{work.description}</p>
    </li>
  );
}

export default EachWork;
