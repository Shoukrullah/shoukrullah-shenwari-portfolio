export interface SkillsShape {
  id: number;
  skill: string;
  percentage: number;
}

const skills: SkillsShape[] = [
  {
    id: 1,
    skill: "HTML",
    percentage: 99,
  },
  {
    id: 2,
    skill: "CSS",
    percentage: 95,
  },
  {
    id: 3,
    skill: "JavaScript",
    percentage: 85,
  },
  {
    id: 4,
    skill: "TypeScript",
    percentage: 85,
  },
  {
    id: 5,
    skill: "TailwindCSS",
    percentage: 80,
  },
  {
    id: 6,
    skill: "React",
    percentage: 90,
  },
  {
    id: 11,
    skill: "Node.js",
    percentage: 80,
  },
  {
    id: 7,
    skill: "Next.js",
    percentage: 90,
  },
  {
    id: 8,
    skill: "MySQL",
    percentage: 50,
  },
  {
    id: 9,
    skill: "MongoDB",
    percentage: 80,
  },
  {
    id: 10,
    skill: "Mongoose",
    percentage: 80,
  },
  {
    id: 12,
    skill: "Prisma",
    percentage: 90,
  },

];
export default skills;
