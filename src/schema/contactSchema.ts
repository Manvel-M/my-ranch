import { z } from "astro/zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter first name." }),
  lastName: z.string().min(1, { message: "Please enter last name." }),
  email: z.string().email({ message: "Please enter your email." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number." })
    .max(14, { message: "Please enter a valid phone number." }),
  guestCount: z
    .string()
    .min(1, { message: "Please enter approximate number of guests." })
    .max(3, { message: "Please enter approximate number of guests." }),
  dateOfEvent: z.coerce.date({ message: "Select a date for your event." }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
