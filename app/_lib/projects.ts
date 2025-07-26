export interface ProjectShape {
  id: number;
  image: string;
  title: string;
  description: string;
  date: Date;
  technologies: string[];
  github?: string;
  visitLink?: string ;
  type?: string;
}

const projects: ProjectShape[] = [
  {
    id: 1,
    title: "Issue Tracker",
    description: "A full stack application for tracking issues.",
    image: "issueTracker",
    date: new Date("2025/6/23"),
    technologies: [
      "nextjs",
      "react",
      "typeScript",
      "prisma",
      "reactQuery",
      "mySql",
      "css",
      "html",
    ],
    type: "Error Tracking",
    visitLink:'jjfgj'
  },
  {
    id: 2,
    title: "Shenwari Digital Products",
    description: "An E-Commerce application with Afghani brands.",
    image: "ECommerce",
    date: new Date("2025/4/5"),
    technologies: ["react", "css", "html"],
    type: "Portfolio",
  },
  {
    id: 3,
    title: "Shenwari Company ",
    description: "A portfolio website for Shenwari company.",
    image: "ShenwariPortfolio",
    date: new Date("2023/4/12"),
    technologies: ["css", "html"],
    type: "Portfolio",
  },
  {
    id: 4,
    title: "Shenwari Restaurant ",
    description: "A portfolio website for Shenwari Restaurant.",
    image: "ShenwariRestaurant",
    date: new Date("2024/1/20"),
    technologies: ["react", "css", "html"],
    type: "Portfolio",
  },
  {
    id: 5,
    title: "Shoukrullah Shenwari",
    description: "A portfolio website for Myself.",
    image: "shoukrullah",
    date: new Date("2025/7/19"),
    technologies: ["nextjs", "react", "typeScript", "css", "html"],
    type: "Portfolio",
  },
  {
    id: 6,
    title: "Digital Products",
    description: "An E-Commerce application with Afghani brands.",
    image: "ECommerce",
    date: new Date("2025/4/5"),
    technologies: ["react", "css", "html"],
    type: "Portfolio",
  },
];

export default projects;
