import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  CloseCircleOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomField from "./fields";
import { SendMail } from "../services/mailService";
import { profile } from "../data/profile";
import { contactContainerVariants, itemVariants } from "./styles";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailOutlined,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: PhoneOutlined,
  },
  {
    label: "LinkedIn",
    value: "Waseem Khan",
    href: profile.linkedin,
    icon: LinkedinOutlined,
  },
  {
    label: "GitHub",
    value: "wassii-khan-git",
    href: profile.github,
    icon: GithubOutlined,
  },
];

const Contact = () => {
  const [message, setMessage] = useState({ success: false, msg: "" });

  return (
    <section className="w-full bg-[#f6f8fb] py-20 transition-colors duration-300 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0f172a] dark:text-white">
            Open to international full-stack opportunities.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#475569] dark:text-[#cbd5e1]">
            I am looking for teams where healthcare, cloud deployment, product
            ownership, and practical frontend engineering matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.aside
            className="rounded-lg border border-[#d8dee9] bg-white p-6 shadow-sm dark:border-[#273449] dark:bg-[#111827]"
            variants={itemVariants}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#fff1f2] text-2xl text-[#be123c] dark:bg-[#3f1220] dark:text-[#fb7185]">
              <MailOutlined />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[#0f172a] dark:text-white">
              {profile.name}
            </h3>
            <p className="mt-2 font-semibold text-[#475569] dark:text-[#cbd5e1]">
              {profile.headline}
            </p>
            <p className="mt-5 leading-8 text-[#475569] dark:text-[#cbd5e1]">
              Send me a role description, project brief, or interview request. I
              can discuss React/Next.js work, Azure deployment ownership,
              healthcare integrations, and workflow automation.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 dark:border-[#273449] dark:bg-[#0b1120]">
              <EnvironmentOutlined className="mt-1 text-[#0f766e]" />
              <span className="text-[#475569] dark:text-[#cbd5e1]">
                {profile.location}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-lg border border-[#e2e8f0] p-3 text-[#334155] transition hover:border-[#be123c] hover:text-[#be123c] dark:border-[#273449] dark:text-[#cbd5e1] dark:hover:text-[#fb7185]"
                  >
                    <Icon className="text-lg" />
                    <div>
                      <div className="text-xs font-bold uppercase text-[#64748b] dark:text-[#94a3b8]">
                        {item.label}
                      </div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.aside>

          <motion.div
            className="rounded-lg border border-[#d8dee9] bg-white p-6 shadow-sm dark:border-[#273449] dark:bg-[#111827]"
            variants={itemVariants}
          >
            {message.msg && (
              <div
                className={`mb-6 flex items-center justify-between gap-4 rounded-md px-4 py-3 font-semibold ${
                  message.success
                    ? "bg-[#ecfdf5] text-[#047857]"
                    : "bg-[#fff1f2] text-[#be123c]"
                }`}
              >
                <span>{message.msg}</span>
                <button
                  type="button"
                  aria-label="Dismiss message"
                  onClick={() => setMessage({ success: false, msg: "" })}
                >
                  <CloseCircleOutlined className="text-xl" />
                </button>
              </div>
            )}

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object({
                fullName: Yup.string().required("Full name is required"),
                email: Yup.string()
                  .email("Invalid email format")
                  .required("Email is required"),
                subject: Yup.string().required("Subject is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                  await SendMail(
                    values.fullName,
                    values.email,
                    values.subject,
                    values.message,
                  );
                  setMessage({
                    success: true,
                    msg: "Your message has been sent successfully.",
                  });
                  resetForm();
                } catch (error) {
                  setMessage({
                    success: false,
                    msg:
                      error?.message ||
                      "Message could not be sent. Please email me directly.",
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <CustomField
                    errors={errors.fullName}
                    touched={touched.fullName}
                    fieldKey="fullName"
                    fieldName="Full Name"
                  />
                  <CustomField
                    errors={errors.email}
                    touched={touched.email}
                    fieldKey="email"
                    fieldName="Email"
                  />
                  <CustomField
                    errors={errors.subject}
                    touched={touched.subject}
                    fieldKey="subject"
                    fieldName="Subject"
                  />
                  <CustomField
                    errors={errors.message}
                    touched={touched.message}
                    fieldKey="message"
                    fieldName="Message"
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#be123c] px-5 py-3 font-semibold text-white transition hover:bg-[#9f1239] disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRightOutlined />
                  </motion.button>
                </form>
              )}
            </Formik>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
