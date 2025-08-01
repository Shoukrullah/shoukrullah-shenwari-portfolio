import { Metadata } from "next";
import Contact from "./_components/Contact";
import ContactPageHeader from "./_components/ContactPageHeader";
import Footer from "./_components/Footer";
import SocialMedia from "./_components/SocialMedia";

function page() {
  return (
    <section className="max-width relative ">
      <ContactPageHeader />
      <Contact />
      <SocialMedia />
      <Footer />
    </section>
  );
}

export default page;
export const metadata: Metadata = {
  title: "Contact Me - Shenwari",
  description: 'Contact page of Shoukrullah Shenwari\' portfolio.',
};