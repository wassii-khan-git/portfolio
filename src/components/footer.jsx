import { motion } from "framer-motion";
import { logo } from "./navbar";
import { useDarkMode } from "../hook";
import { containerVariants, itemVariants } from "./styles";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  const socialLinks = [
    {
      icon: GithubOutlined,
      link: "https://github.com/wassii-khan",
    },
    {
      icon: LinkedinOutlined,
      link: "https://www.linkedin.com/in/waseem-khan-5a9393214/",
    },
    {
      icon: MailOutlined,
      link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    },
  ];

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <footer
      className={`w-full py-12 mt-24 ${
        isDarkMode ? "bg-gray-900" : "bg-halfwhite"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Branding */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <img src={logo} className="h-10 w-10" alt="Portfolio Logo" />
            <span
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Waseem<span className="text-redish">.</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.ul
            className="flex flex-wrap gap-6 md:gap-10"
            variants={containerVariants}
          >
            {navItems.map((item, index = 1) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  href={`${item.link}`}
                  className={`text-lg font-medium hover:text-redish transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className={`my-12 ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={itemVariants}
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.span>

          <motion.div variants={itemVariants} className="flex gap-6">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={`${item.link}`}
                target={`${item.link}`}
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{ y: -2 }}
              >
                <item.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>

          <motion.span
            variants={itemVariants}
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Made with <span className="text-redish">♥</span> By Wassii Khan
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
