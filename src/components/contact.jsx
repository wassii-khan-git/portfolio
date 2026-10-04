import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomField from "./fields";
import { SendMail } from "../services/mailService";
import { profile } from "../data/profile";
import { Eyebrow, Reveal, Shell } from "./primitives";
import { EASE } from "../lib/motion";

const schema = Yup.object({
  fullName: Yup.string().trim().required("Your name, please"),
  email: Yup.string().trim().email("That email does not look right").required("An email so I can reply"),
  subject: Yup.string().trim().required("A subject line helps"),
  message: Yup.string().trim().min(10, "A little more detail").required("Tell me what you need"),
});

const directLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "LinkedIn", value: "waseem-khan", href: profile.linkedin },
  { label: "GitHub", value: "wassii-khan-git", href: profile.github },
];

const Contact = () => {
  const [status, setStatus] = useState(null);

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid edge-fade absolute inset-0 opacity-40" />
        <div
          className="absolute -bottom-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: "var(--glow)" }}
        />
      </div>

      <Shell className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ------------------------------------------------------ pitch */}
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
                Looking for a remote full-stack role.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted">
                Healthcare, AI product work, or anything where the system has to
                stay up and stay compliant. Send a role description or a problem
                you are stuck on — I reply to everything.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {directLinks.map((item) => (
                  <div key={item.label} className="bg-surface">
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block p-5 transition-colors hover:bg-surface-2"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                        {item.label}
                      </dt>
                      <dd className="mt-2 flex items-center gap-2 text-sm text-ink transition-colors group-hover:text-accent">
                        <span className="truncate">{item.value}</span>
                        <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </dd>
                    </a>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.26}>
              {/* Same static marker as the hero badge, not a pulsing dot. */}
              <p className="mt-6 inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                <span className="h-[11px] w-[2px] shrink-0 bg-accent" />
                {profile.availability}
              </p>
            </Reveal>
          </div>

          {/* ------------------------------------------------------- form */}
          <Reveal delay={0.12} className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div
                    role="status"
                    className={`flex items-start justify-between gap-4 rounded-lg border p-4 text-sm ${
                      status.success
                        ? "border-line bg-bg text-ink"
                        : "border-accent-line bg-accent-soft text-ink"
                    }`}
                  >
                    <span className="leading-relaxed">{status.msg}</span>
                    <button
                      type="button"
                      aria-label="Dismiss"
                      onClick={() => setStatus(null)}
                      className="shrink-0 text-dim transition-colors hover:text-ink"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Formik
              initialValues={{ fullName: "", email: "", subject: "", message: "" }}
              validationSchema={schema}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                  await SendMail(
                    values.fullName,
                    values.email,
                    values.subject,
                    values.message,
                  );
                  setStatus({
                    success: true,
                    msg: "Message sent. I will get back to you shortly.",
                  });
                  resetForm();
                } catch (error) {
                  setStatus({
                    success: false,
                    msg:
                      error?.message ||
                      `Something went wrong sending that. Email me directly at ${profile.email}.`,
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <CustomField
                      errors={errors.fullName}
                      touched={touched.fullName}
                      fieldKey="fullName"
                      fieldName="Name"
                      placeholder="Jane Doe"
                    />
                    <CustomField
                      errors={errors.email}
                      touched={touched.email}
                      fieldKey="email"
                      fieldName="Email"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <CustomField
                    errors={errors.subject}
                    touched={touched.subject}
                    fieldKey="subject"
                    fieldName="Subject"
                    placeholder="Full-stack role / project enquiry"
                  />

                  <CustomField
                    errors={errors.message}
                    touched={touched.message}
                    fieldKey="message"
                    fieldName="Message"
                    placeholder="A few lines about the team and the work."
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg font-medium disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </Formik>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
};

export default Contact;
