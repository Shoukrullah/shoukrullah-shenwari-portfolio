import Contact from "./_components/Contact";
import ContactPageHeader from "./_components/ContactPageHeader";
import Footer from "./_components/Footer";
import SocialMedia from "./_components/SocialMedia";

function page() {
  return (
    <div className="max-width relative">
      <ContactPageHeader />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default page;
