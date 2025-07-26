import { ProjectShape } from "@/app/_lib/projects";
import Image, { StaticImageData } from "next/image";
import styles from "./Projects.module.css";

import {
  ECommerce,
  IssueTracker,
  MyPortfolio,
  OurCompany,
  ShenwariFood,
} from "./indexForImages";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiReactjsFill,
} from "react-icons/ri";
import { SiMysql, SiPrisma, SiReactquery, SiTypescript } from "react-icons/si";
import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";
interface Props {
  data: ProjectShape;
  index: number;
}
function EachProject({ data, index }: Props) {
  const { image, title, description, technologies } = data;
  const imgMap: { [key: string]: StaticImageData } = {
    issueTracker: IssueTracker,
    ECommerce: ECommerce,
    ShenwariPortfolio: OurCompany,
    ShenwariRestaurant: ShenwariFood,
    shoukrullah: MyPortfolio,
  };
  const iconMap: { [key: string]: React.ReactNode } = {
    nextjs: <RiNextjsFill />,
    react: <RiReactjsFill />,
    typeScript: <SiTypescript />,
    prisma: <SiPrisma />,
    reactQuery: <SiReactquery />,
    mySql: <SiMysql />,
    css: <RiCss3Fill />,
    html: <RiHtml5Fill />,
  };
  return (
    <ScrollFadeIn
      className={`${styles.parentContainer}}`}
      isList={true}
      delay={0.2}
      stiffness={90}
    >
      <div className={styles.imgContainer}>
        <Image
          src={imgMap[image]}
          alt={title}
          placeholder="blur"
          quality={50}
          className={index === 4 ? styles.lastImg : ""}
        />
        {/* <p className={styles.dataType}>{data.type || null}</p> */}
      </div>
      <div className={styles.contentContainer}>
        <h4>{title}</h4>
        <ul className={styles.iconUL}>
          {technologies.map((icon, index) => (
            <li key={index}>
              <span>{iconMap[icon]}</span>
            </li>
          ))}
        </ul>
        <p className="paragraph-color--2">{description}</p>
        <div className={styles.anchorsContainer}>
          <button className={styles.viewOnline}>
            View <RxArrowTopRight />
          </button>
          <a
            href="#"
            target="_blank"
            className={styles.github}
            rel="noopener noreferrer"
          >
            <RxGithubLogo />
          </a>
        </div>
      </div>
    </ScrollFadeIn>
  );
}

export default EachProject;
