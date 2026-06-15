import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  CloudServerOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { useScroll } from "../hook";
import { profile } from "../data/profile";
import { textVariants } from "./styles";
import heroImage from "../assets/profile.png";

const Hero = () => {
  const { scrollToSection, contactRef, portfolioRef } = useScroll();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#f6f8fb] dark:bg-[#0b1120]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 dark:opacity-20" />
      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          className="min-w-0 max-w-3xl"
        >
          <motion.div
            variants={textVariants}
            className="mb-6 flex max-w-full items-start gap-2 rounded-md border border-[#d8dee9] bg-white px-3 py-2 text-sm font-medium text-[#334155] shadow-sm dark:border-[#273449] dark:bg-[#111827] dark:text-[#cbd5e1] sm:inline-flex"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#10b981]" />
            <span className="min-w-0 flex-1 whitespace-normal">
              {profile.availability}
            </span>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="mb-3 text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="max-w-3xl text-4xl font-bold leading-[1.08] text-[#0f172a] dark:text-white"
          >
            {profile.name} builds reliable healthcare, cloud, and product
            systems.
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#475569] dark:text-[#cbd5e1]"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-7 flex flex-wrap gap-2"
          >
            {profile.heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#d8dee9] bg-white px-3 py-2 text-sm font-semibold text-[#334155] dark:border-[#273449] dark:bg-[#111827] dark:text-[#dbeafe]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection(contactRef)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#be123c] px-5 py-3 font-semibold text-white shadow-lg shadow-rose-900/10 transition hover:bg-[#9f1239]"
            >
              Contact Me
              <ArrowRightOutlined />
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#cbd5e1] bg-white px-5 py-3 font-semibold text-[#0f172a] transition hover:border-[#94a3b8] hover:bg-[#f8fafc] dark:border-[#334155] dark:bg-[#111827] dark:text-white dark:hover:bg-[#1f2937]"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#d8dee9] bg-white p-4 shadow-sm dark:border-[#273449] dark:bg-[#111827]"
              >
                <div className="text-2xl font-bold text-[#0f172a] dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm leading-5 text-[#64748b] dark:text-[#94a3b8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="overflow-hidden rounded-lg border border-[#d8dee9] bg-white shadow-2xl shadow-slate-900/10 dark:border-[#273449] dark:bg-[#111827]">
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-[0.88fr_1.12fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#e5e7eb] sm:min-h-[420px]">
                <img
                  src={heroImage}
                  alt="Waseem Khan"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#64748b] dark:text-[#94a3b8]">
                      Profile Snapshot
                    </span>
                    <span className="rounded-md bg-[#ecfdf5] px-2 py-1 text-xs font-bold text-[#047857] dark:bg-[#063a31] dark:text-[#6ee7b7]">
                      Open
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-[#0f172a] dark:text-white">
                    {profile.headline}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#64748b] dark:text-[#94a3b8]">
                    {profile.summary}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] p-3 dark:border-[#273449]">
                    <MedicineBoxOutlined className="mt-1 text-lg text-[#be123c]" />
                    <div>
                      <p className="font-semibold text-[#0f172a] dark:text-white">
                        Medical systems
                      </p>
                      <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                        Neuro ICU, FHIR, DICOM, custom viewer workflows
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] p-3 dark:border-[#273449]">
                    <CloudServerOutlined className="mt-1 text-lg text-[#2563eb]" />
                    <div>
                      <p className="font-semibold text-[#0f172a] dark:text-white">
                        Cloud delivery
                      </p>
                      <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                        Azure App Service, VMs, containers, SSL, slots
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] p-3 dark:border-[#273449]">
                    <CheckCircleOutlined className="mt-1 text-lg text-[#0f766e]" />
                    <div>
                      <p className="font-semibold text-[#0f172a] dark:text-white">
                        Production mindset
                      </p>
                      <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                        Practical, documented, and deployment-aware
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
