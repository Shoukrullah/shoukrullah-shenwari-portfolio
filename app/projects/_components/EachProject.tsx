"use client";
import { ProjectShape } from "@/app/_lib/projects";
import { StaticImageData } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import styles from "./Projects.module.css";

import {
  e1,
  e2,
  game1,
  game2,
  game3,
  issue1,
  issue2,
  issue3,
  issue4,
  map1,
  map2,
  map3,
  map4,
  map5,
  company1,
  wild1,
  wild2,
  wild3,
  wild4,
  wild5,
  wild6,
  wild7,
  peshgam1,
  peshgam2,
  peshgam10,
  peshgam3,
  peshgam4,
  peshgam5,
  peshgam6,
  peshgam7,
  peshgam8,
  peshgam9,
} from "./indexForImages";

import ScrollFadeIn from "@/app/_animations/ScrollFadeIn";
import { useState } from "react";
import Card from "./Card";

interface Props {
  data: ProjectShape;
  index: number;
}

function EachProject({ data, index }: Props) {
  const [open, setOpen] = useState(false);

  const { screenshots } = data;

  const screenshotMap: { [key: string]: StaticImageData } = {
    e1,
    e2,
    game1,
    game2,
    game3,
    issue1,
    issue2,
    issue3,
    issue4,
    map1,
    map2,
    map3,
    map4,
    map5,
    company1,
    wild1,
    wild2,
    wild3,
    wild4,
    wild5,
    wild6,
    wild7,
    peshgam1,
    peshgam2,
    peshgam10,
    peshgam3,
    peshgam4,
    peshgam5,
    peshgam6,
    peshgam7,
    peshgam8,
    peshgam9,
  };

  const validScreenshots =
    screenshots?.filter((key) => screenshotMap[key]) || [];

  const slides = validScreenshots.map((key) => ({
    src: screenshotMap[key].src,
  }));

  return (
    <>
      <ScrollFadeIn
        className={`${styles.parentContainer}`}
        isList={true}
        delay={0.2}
        stiffness={90}
      >
        <Card
          data={data}
          index={index}
          validScreenshots={validScreenshots}
          setOpen={() => setOpen(true)}
        />
      </ScrollFadeIn>

      {validScreenshots.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Zoom]}
          carousel={{ finite: true }}
        />
      )}
    </>
  );
}

export default EachProject;
