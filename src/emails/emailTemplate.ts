import type { ContactFormData } from "@/schema/contactSchema";

export const emailTemplate = (data: ContactFormData) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f8f9fa; color: #333333; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center;">
        <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">New Message</h1>
        <p style="font-size: 16px; opacity: 0.9; margin: 0;">You have received a new inquiry</p>
      </div>

      <!-- Content -->
      <div style="padding: 30px 20px;">
        <!-- Contact Information -->
        <div style="margin-bottom: 30px;">
          <h2 style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e9ecef;">Contact Information</h2>
          ${renderRow("First Name:", data.firstName)}
          ${renderRow("Last Name:", data.lastName)}
          ${renderRow("Email:", data.email)}
          ${renderRow("Phone:", data.phone)}
        </div>

        <!-- Event Details -->
        <div style="margin-bottom: 30px;">
          <h2 style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e9ecef;">Event Details</h2>
          ${renderRow("Guest Count:", data.guestCount)}
          ${renderRow("Event Date:", data.dateOfEvent.toDateString())}
        </div>

        <!-- Message -->
        <div style="margin-bottom: 30px;">
          <h2 style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e9ecef;">Message</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
        <p style="font-size: 12px; color: #6c757d; margin: 0 0 5px;">This email was sent from your website contact form.</p>
        <p style="font-size: 12px; color: #868e96; font-style: italic; margin: 0;">Received on ${new Date().toDateString()}</p>
      </div>
    </div>
  </body>
</html>`;

function renderRow(label: string, value: string | number): string {
  return `
    <div style="display: flex; flex-wrap: wrap; margin-bottom: 15px; border-bottom: 1px solid #f1f3f4; padding-bottom: 15px;">
      <div style="flex: 0 0 140px; font-weight: 600; color: #495057; font-size: 14px; padding-right: 20px;">${label}</div>
      <div style="flex: 1; font-size: 14px; color: #333333; word-wrap: break-word;">${value}</div>
    </div>
  `;
}
