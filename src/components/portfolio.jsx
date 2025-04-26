import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal/modal";
import { useDarkMode } from "../hook";
import { containerVariants, imageVariants, itemVariants } from "./styles";

const Portfolio = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image:
        "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      price: 600,
      description: "A scalable e-commerce solution",
      details:
        "Developed a full-featured e-commerce platform with real-time inventory management, payment gateway integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      image:
        "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
      title: "Mobile Fitness App",
      category: "Cross-Platform Development",
      price: 750,
      description: "Health and fitness tracking application",
      details:
        "Created a cross-platform mobile app with workout tracking, nutrition planning, and social features using React Native.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
    },
    {
      image:
        "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
      title: "Dashboard Analytics",
      category: "Data Visualization",
      price: 508,
      description: "Real-time business analytics dashboard",
      details:
        "Designed and implemented an interactive dashboard with real-time data visualization using D3.js and WebSocket integration.",
      tech: ["React", "D3.js", "WebSocket", "Express"],
    },
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="w-full py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-redish dark:text-redish/80 text-sm font-semibold uppercase tracking-widest">
            My Work
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Recent Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 
                ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl cursor-pointer`}
              onClick={() => handleOpen(project)}
            >
              {/* Image */}
              <motion.div className="overflow-hidden" variants={imageVariants}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <motion.span
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-redish text-sm font-medium uppercase"
                  >
                    {project.category}
                  </motion.span>
                  <motion.span
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    ${project.price}
                  </motion.span>
                </div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className={`mt-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <Modal
            close={() => setSelectedProject(null)}
            data={selectedProject}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
