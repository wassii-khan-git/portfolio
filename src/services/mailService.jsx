import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const apiKey = import.meta.env.VITE_EMAIL_API;

// Send Mail Service
export const SendMail = async (fullName, email, subject, message) => {
  try {
    const response = emailjs.send(
      serviceId,
      templateId,
      {
        fullName,
        email,
        subject,
        message,
      },
      apiKey
    );
    console.log("email response", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};
