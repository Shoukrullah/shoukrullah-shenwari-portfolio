"use client";
import FadeInContainer from "@/app/_animations/FadeInContainer";
import Heading from "@/app/_components/Heading";

function ContactPageHeader() {
  return (
    <FadeInContainer>
      <div>
        <Heading
          fontSize="3rem"
          margin="2rem 0 .5rem 0"
          letterSpacing={"0.1rem"}
          textTransform="uppercase"
          textAlign="center"
        >
          Contact Me
        </Heading>
        <p className="text-center paragraph-color--1">
          Have a project or a question in mind?
        </p>
        <p className="text-center paragraph-color--2">
          Let&apos;s talk! I&apos;m always open to collaboration, freelance
          work, or just chatting about cool ideas.
        </p>
      </div>
    </FadeInContainer>
  );
}

export default ContactPageHeader;
