import { motion } from "framer-motion";
import { CheckCircleOutlined } from "@ant-design/icons";
import { skillGroups } from "../data/profile";
import { containerVariants, itemVariants } from "./styles";

const proofPoints = [
  "React and Next.js delivery for real production applications",
  "Healthcare integrations with FHIR, DICOM, and custom imaging workflows",
  "Azure deployments across App Service, VMs, containers, slots, and SSL",
  "Workflow automation, e-commerce, education systems, and support tooling",
];

const Skills = () => {
  return (
    <section className="w-full bg-white py-20 transition-colors duration-300 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <span className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
              CV Snapshot
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0f172a] dark:text-white">
              Skills presented for hiring teams.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569] dark:text-[#cbd5e1]">
              Instead of percentage bars, this section shows the areas where I
              can contribute immediately in a full-stack or healthcare product
              team.
            </p>
          </div>

          <div className="rounded-lg border border-[#d8dee9] bg-[#f8fafc] p-6 dark:border-[#273449] dark:bg-[#111827]">
            <h3 className="font-bold text-[#0f172a] dark:text-white">
              Best-fit roles
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Frontend / React Developer",
                "Full-Stack Developer",
                "Healthcare Software Developer",
                "Azure-focused Product Engineer",
              ].map((role) => (
                <div
                  key={role}
                  className="rounded-md border border-[#e2e8f0] bg-white px-3 py-3 text-sm font-semibold text-[#334155] dark:border-[#273449] dark:bg-[#0b1120] dark:text-[#cbd5e1]"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={itemVariants}
              className="rounded-lg border border-[#d8dee9] bg-[#f8fafc] p-6 shadow-sm dark:border-[#273449] dark:bg-[#111827]"
            >
              <h3 className="text-xl font-bold text-[#0f172a] dark:text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#334155] shadow-sm dark:bg-[#0b1120] dark:text-[#cbd5e1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-lg border border-[#d8dee9] bg-[#0f172a] p-6 text-white dark:border-[#273449]"
        >
          <h3 className="text-xl font-bold">Proof that matters in interviews</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-3">
                <CheckCircleOutlined className="mt-1 text-[#34d399]" />
                <span className="leading-7 text-[#e2e8f0]">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
