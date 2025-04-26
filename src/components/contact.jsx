import { motion } from "framer-motion";
import { ArrowRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDarkMode } from "../hook";
import { contactContainerVariants, itemVariants } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import CustomField from "./fields";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [message, setMessage] = useState({ success: false, msg: "" });
  return (
    <section className="w-full py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-redish dark:text-redish/80 text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Let&apos;s Work Together
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side */}
          <motion.div
            className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } transition-all duration-300`}
            variants={itemVariants}
          >
            <div className="space-y-8">
              <img
                src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                alt="Contact"
                className="w-full rounded-2xl object-cover transform hover:scale-105 transition-transform duration-300"
              />

              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Waseem Khan
                  </h3>
                  <p
                    className={`mt-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Full Stack Developer
                  </p>
                </div>

                <div
                  className={`space-y-4 text-lg ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <p>
                    Available for new projects. Let&apos;s create something
                    amazing!
                  </p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Phone:</span> +92 336
                      3701019
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      wassiikhan933@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } transition-all duration-300`}
            variants={itemVariants}
          >
            {message.msg && (
              <h4 className="bg-emerald-500 font-poppins font-[500] text-halfwhite mb-8 px-5 py-4 rounded-lg ">
                {message.msg}
                <span className="float-right">
                  <CloseCircleOutlined
                    style={{ fontSize: "1.3rem" }}
                    onClick={() => setMessage({ success: false, msg: "" })}
                  />
                </span>
              </h4>
            )}
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object({
                fullName: Yup.string().required("Full Name field is required"),
                email: Yup.string()
                  .email("Invalid email format")
                  .required("Email field is required"),
                subject: Yup.string().required("Subject field is required"),
                message: Yup.string().required("Message field is required"),
              })}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <CustomField
                      errors={errors.fullName}
                      touched={touched.fullName}
                      fieldKey="fullName"
                      fieldName="Full Name"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <CustomField
                      errors={errors.email}
                      touched={touched.email}
                      fieldKey="email"
                      fieldName="Email"
                    />
                  </div>
                  {/* Subject */}
                  <div className="space-y-2">
                    <CustomField
                      errors={errors.subject}
                      touched={touched.subject}
                      fieldKey="subject"
                      fieldName="Subject"
                    />
                  </div>
                  {/* Message */}
                  <div className="space-y-2">
                    <CustomField
                      errors={errors.message}
                      touched={touched.message}
                      fieldKey="message"
                      fieldName="Message"
                    />
                  </div>
                  {/* Submit */}
                  <div className="space-y-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isDarkMode
                          ? "bg-redish/90 hover:bg-redish text-white"
                          : "bg-redish hover:bg-redish/90 text-white"
                      }`}
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRightOutlined className="ml-2" />
                    </motion.button>
                  </div>
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
