import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal/modal";
import ProjectVisual from "./projectVisual";
import { projects } from "../data/profile";
import { containerVariants, itemVariants } from "./styles";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-full bg-[#f6f8fb] py-20 transition-colors duration-300 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
              Selected Work
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0f172a] dark:text-white">
              Projects that show the roles I can win.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569] dark:text-[#cbd5e1]">
              A focused set of healthcare, cloud, workflow, and product systems
              based on work I have actually shipped or supported.
            </p>
          </div>
          <div className="rounded-lg border border-[#d8dee9] bg-white px-4 py-3 text-sm font-semibold text-[#334155] dark:border-[#273449] dark:bg-[#111827] dark:text-[#cbd5e1]">
            Case-study style summaries for recruiters and engineering teams
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group cursor-pointer overflow-hidden rounded-lg border border-[#d8dee9] bg-white shadow-sm transition dark:border-[#273449] dark:bg-[#111827]"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectVisual project={project} compact />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0f172a] dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569] dark:text-[#cbd5e1]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#f1f5f9] px-2 py-1 text-xs font-semibold text-[#334155] dark:bg-[#1f2937] dark:text-[#cbd5e1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {selectedProject && (
          <Modal
            close={() => setSelectedProject(null)}
            data={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
