import ContactMeInfo from "../../_components/ContactMeInfo";
import Form from "../../_components/Form";
import styles from "../page.module.css";

function Contact() {
  return (
    <div className={styles.contactInfoContainer}>
      <ContactMeInfo />
      <Form />
    </div>
  );
}

export default Contact;
