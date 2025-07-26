// import styles from './HowDoIWork.module.css'

import { ServicesShape } from "../_lib/servicesList";
import ScrollFadeIn from "../_animations/ScrollFadeIn";

function EachWork({ work }: { work: ServicesShape }) {
  return (
    <li>
      <span>{`${work.id < 10 ? `0` + work.id : work.id}`}</span>
      <ScrollFadeIn y={10} delay={0.2} duration={0.6} type="tween">
        <strong>{work.label}</strong>
        <p>{work.description}</p>
      </ScrollFadeIn>
    </li>
  );
}

export default EachWork;
