import { Metadata } from "next";
import Footer from "./_components/Footer";
import Projects from "./_components/Projects";
import ProjectsHeader from "./_components/ProjectsHeader";

function page() {
  return (
    <section className="max-width">
      <ProjectsHeader />
      <Projects />
      <Footer />
    </section>
  );
}

export default page;
export const metadata: Metadata = {
  title: "My Projects - Shenwari",
  description: 'Projects page of Shoukrullah Shenwari\' portfolio.',
};