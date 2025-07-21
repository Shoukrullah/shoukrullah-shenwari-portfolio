import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, "Full name is required."),
  email: z.string().min(3,'Email is required.').email("Invalid email address"),
  subject: z.string().nullable().optional(),
  message: z.string().min(3, "Message is required."),
});

export default formSchema