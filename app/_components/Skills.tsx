"use client";
import Heading from "./Heading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Skills.module.css";
import skills from "../_lib/skills";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <Heading fontSize="3rem" textAlign="center" margin="1rem 0 0 0">
        My Skills
      </Heading>
      <p>
        I Really love to build modern Web Applications with
        <strong>React</strong> and <strong>Nextjs</strong>. I began learning Web
        Development in 2023 through online courses and projects. Since then,
        I&apos;ve learned and still learning the modern web technologies.
      </p>
      <div>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <p>{skill.skill}</p>
              <CircularProgressbar
                strokeWidth={2}
                value={skill.percentage}
                styles={buildStyles({
                  pathColor: "#4c51bd",
                  trailColor: "#bee3f8",
                  textSize: "1.3rem",
                  textColor: "#2d3748",
                  pathTransitionDuration: 0.5,
                  //   strokeLinecap: "butt",
                })}
                text={`${skill.percentage}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
