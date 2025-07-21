"use client";
import Heading from "@/app/_components/Heading";
import { motion } from "framer-motion";

function ContactPageHeader() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 130, damping: 10 }}
    >
      <Heading fontSize="3rem" margin="2rem 0 .5rem 0" textAlign="center">
        Contact Me
      </Heading>
      <p className="text-center paragraph-color--1">
        Have a project or a question in mind?
      </p>
      <p className="text-center paragraph-color--2">
        Let&apos;s talk! I&apos;m always open to collaboration, freelance work,
        or just chatting about cool ideas.
      </p>
    </motion.div>
  );
}

export default ContactPageHeader;
