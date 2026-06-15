import { motion } from "framer-motion";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { profile } from "../data/profile";
import { containerVariants, itemVariants } from "./styles";

const Footer = () => {
  const socialLinks = [
    {
      label: "GitHub",
      icon: GithubOutlined,
      link: profile.github,
    },
    {
      label: "LinkedIn",
      icon: LinkedinOutlined,
      link: profile.linkedin,
    },
    {
      label: "Email",
      icon: MailOutlined,
      link: `mailto:${profile.email}`,
    },
  ];

  return (
    <footer className="w-full border-t border-[#d8dee9] bg-white py-10 transition-colors duration-300 dark:border-[#273449] dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col justify-between gap-8 md:flex-row md:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f172a] text-sm font-bold text-white dark:bg-white dark:text-[#0f172a]">
                {profile.initials}
              </span>
              <div>
                <p className="font-bold text-[#0f172a] dark:text-white">
                  {profile.name}
                </p>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                  {profile.headline}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cbd5e1] text-[#475569] transition hover:border-[#be123c] hover:text-[#be123c] dark:border-[#334155] dark:text-[#cbd5e1] dark:hover:text-[#fb7185]"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#e2e8f0] pt-6 text-sm text-[#64748b] dark:border-[#273449] dark:text-[#94a3b8] md:flex-row">
          <span>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React, Vite, Tailwind CSS, and Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
