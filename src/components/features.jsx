import { useState } from "react";
import { motion } from "framer-motion";
import {
  MenuOutlined,
  ArrowRightOutlined,
  MailOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useDarkMode } from "../hook";
import { containerVariants, itemVariants } from "./styles";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { isDarkMode } = useDarkMode();

  const features = [
    {
      icon: <MenuOutlined />,
      title: "Full Stack Development",
      text: "End-to-end solutions from database design to frontend implementation.",
    },
    {
      icon: <MailOutlined />,
      title: "API Integration",
      text: "Seamless third-party service integration and microservices architecture.",
    },
    {
      icon: <BookOutlined />,
      title: "Responsive Design",
      text: "Mobile-first approach with cross-browser compatibility.",
    },
    {
      icon: <MenuOutlined />,
      title: "Cloud Solutions",
      text: "AWS & Azure cloud deployment and serverless architecture.",
    },
    {
      icon: <MailOutlined />,
      title: "UI/UX Design",
      text: "User-centered interfaces with modern design principles.",
    },
    {
      icon: <BookOutlined />,
      title: "DevOps & CI/CD",
      text: "Automated pipelines and containerized deployments.",
    },
  ];

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
            Expertise
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Technical Capabilities
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              whileTap="tap"
              variants={itemVariants}
              className={`group p-8 rounded-2xl transition-all duration-300 
                ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-redish/20"
                    : "bg-white hover:bg-redish/5"
                }
                shadow-lg hover:shadow-xl border ${
                  isDarkMode
                    ? "border-gray-700 hover:border-redish/30"
                    : "border-gray-100 hover:border-redish/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div className="space-y-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl 
                    ${
                      isDarkMode
                        ? "bg-gray-700 text-redish"
                        : "bg-redish/10 text-redish"
                    }
                    transition-colors duration-300`}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`text-xl font-semibold 
                      ${isDarkMode ? "text-white" : "text-gray-900"}
                      transition-colors duration-300`}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`text-base leading-relaxed 
                      ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      } transition-colors duration-300`}
                  >
                    {item.text}
                  </motion.p>
                </div>

                {/* Animated Arrow */}
                <motion.div
                  className="relative h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <ArrowRightOutlined
                    className={`absolute text-xl transition-all duration-300 
                      ${
                        hoveredIndex === index
                          ? "text-redish"
                          : "text-transparent"
                      }`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
