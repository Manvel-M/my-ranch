import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { contactSchema } from "@/schema/contactSchema";
import {
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL,
} from "astro:env/server";
import { emailTemplate } from "@/emails/emailTemplate";

const resend = new Resend(RESEND_API_KEY);
const to = RESEND_TO_EMAIL;
const from = RESEND_FROM_EMAIL;

export const server = {
  send: defineAction({
    accept: "json",
    input: contactSchema,
    handler: async (input) => {
      const html = emailTemplate(input);
      const { data, error } = await resend.emails.send({
        from: `My Ranch <${from}>`,
        to: [to],
        subject: "New Inquiry",
        html,
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }
      return data;
    },
  }),
};
