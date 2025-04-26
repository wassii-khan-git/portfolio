import { motion } from "framer-motion";
import { useDarkMode } from "../hook";
import { containerVariants, skillVariants } from "./styles";
const Skills = () => {
  const { isDarkMode } = useDarkMode();

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Jquery", level: 65 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Material UI", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "React JS", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 70 },
  ];

  return (
    <section className="w-full py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-redish dark:text-redish/80 text-sm font-semibold uppercase tracking-widest">
            Technical Expertise
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Development Skills
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
              variants={skillVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <h3
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </h3>
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className={`h-3 rounded-full overflow-hidden ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-full rounded-full bg-gradient-to-r ${
                    isDarkMode
                      ? "from-redish/80 to-redish"
                      : "from-redish to-redish/80"
                  } shadow-progress-glow`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
