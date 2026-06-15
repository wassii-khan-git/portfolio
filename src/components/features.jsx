import { motion } from "framer-motion";
import {
  CloudServerOutlined,
  MedicineBoxOutlined,
  SafetyCertificateOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { capabilities, timeline } from "../data/profile";
import { containerVariants, itemVariants } from "./styles";

const iconMap = {
  CloudServerOutlined,
  MedicineBoxOutlined,
  SafetyCertificateOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  ThunderboltOutlined,
};

const Features = () => {
  return (
    <section className="w-full bg-white py-20 transition-colors duration-300 dark:bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
            Experience
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0f172a] dark:text-white">
            Real systems, not template projects.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#475569] dark:text-[#cbd5e1]">
            My work sits where product UI, healthcare data, cloud deployment,
            and operational workflows meet.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-[#d8dee9] bg-[#f8fafc] p-6 shadow-sm transition dark:border-[#273449] dark:bg-[#111827]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl text-[#be123c] shadow-sm dark:bg-[#0b1120] dark:text-[#fb7185]">
                    <Icon />
                  </div>
                  <span className="rounded-md bg-[#eef2ff] px-2 py-1 text-xs font-bold text-[#3730a3] dark:bg-[#1e1b4b] dark:text-[#c4b5fd]">
                    {item.signal}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569] dark:text-[#cbd5e1]">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {timeline.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="rounded-lg border-l-4 border-[#be123c] bg-[#f8fafc] p-6 dark:bg-[#111827]"
            >
              <p className="text-sm font-semibold uppercase text-[#64748b] dark:text-[#94a3b8]">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#0f172a] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#475569] dark:text-[#cbd5e1]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
