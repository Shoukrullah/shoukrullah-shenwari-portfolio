"use client";

import Heading from "./Heading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Skills.module.css";
import skills, { SkillsShape } from "../_lib/skills";
import ScrollFadeIn from "../_animations/ScrollFadeIn";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <ScrollFadeIn y={30} stiffness={59}>
        <Heading fontSize="3rem" textAlign="center" margin="1rem 0 0 0">
          My Skills
        </Heading>
        <p className="paragraph-color--2 ">
          I really love to build modern Web Applications with{" "}
          <strong>Modern Full-Stack technologies</strong>. I began learning
          Web Development in 2023 through online courses and projects. Since
          then, I&apos;ve learned and am still learning modern web technologies.
        </p>
      </ScrollFadeIn>

      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <ScrollFadeIn key={skill.id} y={50} delay={0.2}>
            <AnimatedSkillProgress skill={skill} />
          </ScrollFadeIn>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

interface AnimatedSkillProgressProps {
  skill: SkillsShape;
}

function AnimatedSkillProgress({ skill }: AnimatedSkillProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    const duration = 2000;
    const target = skill.percentage;

    const animateProgress = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progressValue = Math.min((elapsed / duration) * target, target);
      setProgress(progressValue);

      if (progressValue < target) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [isInView, skill.percentage]);

  return (
    <li ref={ref} className={styles.skillItem}>
      <p className={styles.skillName}>{skill.skill}</p>
      <CircularProgressbar
        strokeWidth={2}
        value={progress}
        text={`${Math.round(progress)}`}
        styles={buildStyles({
          pathColor: "var(--primary--color)",
          trailColor: "#bee3f8",
          textSize: "1.1rem",
          textColor: "var(--dark--brand--2)",
          pathTransition: "none",
        })}
      />
    </li>
  );
}
