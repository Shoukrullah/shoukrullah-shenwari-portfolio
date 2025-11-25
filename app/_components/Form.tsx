"use client";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import formSchema from "../_lib/formSchema";
import { toast, Toaster } from "react-hot-toast";
import ScrollFadeIn from "../_animations/ScrollFadeIn";

function Form() {
  const {
    register,
    handleSubmit,
    
    // reset,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<FormShape>({ resolver: zodResolver(formSchema) });
  type FormShape = z.infer<typeof formSchema>;

  const onSubmit = (data: FormShape) => {
    console.log(data);
    toast.error("We can't send your message, Please try another way!", {
      style: { textAlign: "center" },
    });
    // reset();
  };
  return (
    <>
      <ScrollFadeIn y={0} x={50} stiffness={60} delay={0.2}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.personalInfo}>
            <div className="relative">
              <input
                type="text"
                placeholder="Full name"
                {...register("name")}
                className={`${errors.name ? styles.borderRed : dirtyFields.name ? styles.green : ""}`}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                className={`${errors.email ? styles.borderRed : dirtyFields.name ? styles.green : ""}`}
                type="text"
                placeholder="Your email"
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className={styles.subjectContainer}>
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              autoComplete="off"
            />
          </div>
          <div className="relative">
            <textarea
              className={`${errors.message ? styles.borderRed : dirtyFields.name ? styles.green : ""}`}
              placeholder="Your message"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}
          </div>
          <div className={styles.submit}>
            <button type="submit">
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </ScrollFadeIn>
      <Toaster />
    </>
  );
}

export default Form;
