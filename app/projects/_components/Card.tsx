"use client";

interface Props {
  data: ProjectShape;
  index: number;
  validScreenshots: string[];
  setOpen: ()=> void
}

import { ProjectShape } from "@/app/_lib/projects";
import Image, { StaticImageData } from "next/image";
import {
    RiCss3Fill,
    RiHtml5Fill,
    RiNextjsFill,
    RiNodejsFill,
    RiReactjsFill,
} from "react-icons/ri";
import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { SiExpress, SiMysql, SiPrisma, SiReactquery, SiTypescript } from "react-icons/si";
import "yet-another-react-lightbox/styles.css";
import {
    ECommerce,
    IssueTracker,
    MyPortfolio,
    OurCompany,
    Quiz,
    ShenwariFood,
    gameHub,
    tripAfghanistan,
    wild1,
    peshgam1
} from "./indexForImages";
import styles from "./Projects.module.css";
function Card({ data, index,validScreenshots,setOpen }: Props) {
  const { image, title, description, technologies } = data;

  const imgMap: { [key: string]: StaticImageData } = {
    issueTracker: IssueTracker,
    ECommerce: ECommerce,
    ShenwariPortfolio: OurCompany,
    ShenwariRestaurant: ShenwariFood,
    shoukrullah: MyPortfolio,
    Quiz: Quiz,
    tripAfghanistan,
    gameHub,
    wildOasis: wild1,
    peshgam: peshgam1
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
    nodejs: <RiNodejsFill />,
    expressjs: <SiExpress />
  };
  return (
    <>
      <div className={styles.imgContainer}>
        <Image
          src={imgMap[image]}
          alt={title}
          placeholder="blur"
          quality={50}
          className={index === 4 ? styles.lastImg : ""}
        />
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
          <button
            className={styles.viewOnline}
            onClick={() => {
              if (validScreenshots.length > 0) setOpen();
            }}
          >
            Screenshots <RxArrowTopRight />
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
    </>
  );
}

export default Card;
