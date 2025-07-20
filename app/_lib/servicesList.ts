export interface ServicesShape {
  id: number;
  label: string;
  description: string;
  icon?: string;
}

const servicesList: ServicesShape[] = [
  {
    id: 1,
    label: "Website Development",
    description:
      "We offer you websites with modern, responsive built with React and Next.js.",
    icon: "website",
  },
  {
    id: 2,
    label: "Web App Development",
    description:
      "Full-featured, dynamic web applications with API integration and clean UI.",
    icon: "webDevelopment",
  },
  {
    id: 3,
    label: "UI/UX Design.",
    description:
      "Simple and clean UI design using CSS, Tailwind and Framer motion.",
    icon: "ui",
  },
  {
    id: 4,
    label: "Mobile Friendly Conversions",
    description:
      "Make your existing site mobile-first and responsive on all screen sizes.",
    icon: "mobile",
  },
  {
    id: 5,
    label: "Website Optimization.",
    description:
      "Improve speed, SEO, and accessibility for better performance and ranking.",
    icon: "SEO",
  },
  {
    id: 6,
    label: "Website Redesign",
    description:
      "We can rebuild your old or slow website using latest tools like Next.js and React with modern best practices.",
    icon: "redesign",
  },
];
export default servicesList;
