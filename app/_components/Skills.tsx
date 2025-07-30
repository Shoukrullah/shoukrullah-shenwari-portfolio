"use client";

import Heading from "./Heading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Skills.module.css";
import skills, { SkillsShape } from "../_lib/skills";
import ScrollFadeIn from "../_animations/ScrollFadeIn";

import { useRef, useState, useEffect } from "react";
import { useInView, animate, useMotionValue } from "framer-motion";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <ScrollFadeIn y={30} stiffness={59}>
        <Heading fontSize="3rem" textAlign="center" margin="1rem 0 0 0">
          My Skills
        </Heading>
        <p className="paragraph-color--2 ">
          I really love to build modern Web Applications with{" "}
          <strong>React</strong> and <strong>Next.js</strong>. I began learning
          Web Development in 2023 through online courses and projects. Since
          then, I&apos;ve learned and am still learning modern web technologies.
        </p>
      </ScrollFadeIn>

      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <ScrollFadeIn key={skill.id} y={50} delay={0.2} isList>
            <AnimatedSkillProgress skill={skill} />
          </ScrollFadeIn>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

// ✅ Improved AnimatedSkillProgress component
function AnimatedSkillProgress({ skill }: { skill: SkillsShape }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const progress = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(progress, skill.percentage, {
        duration: 1.5,
        ease: "easeInOut",
        onUpdate: (value) => setDisplayProgress(value),
      });
      return () => animation.stop();
    }
  }, [isInView, skill.percentage, progress]);

  return (
    <div ref={ref} className={styles.skillItem}>
      <p className={styles.skillName}>{skill.skill}</p>
      <CircularProgressbar
        strokeWidth={2}
        value={displayProgress}
        text={`${Math.round(displayProgress)}`}
        styles={buildStyles({
          pathColor: "var(--primary--color)",
          trailColor: "#bee3f8",
          textSize: "1.1rem",
          textColor: "var(--dark--brand--2)",
        })}
      />
    </div>
  );
}
