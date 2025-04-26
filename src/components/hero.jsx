// Framer Motion
import { motion } from "framer-motion";
// Typing animations
import TypingAnimator from "react-typing-animator";
// Hooks
import { useDarkMode } from "../hook";
import { imageVariants, staggerVariants, textVariants } from "./styles";

import heroImage from "../assets/hero-1.jpg";

const Hero = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  return (
    <section className="min-h-screen flex items-center bg-halfwhite dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-redish/10 dark:bg-redish/20 blur-3xl"></div>
      <div className="absolute -right-64 -bottom-64 w-[800px] h-[800px] rounded-full bg-redish/5 dark:bg-redish/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerVariants}
            className="order-2 lg:order-1 relative z-10"
          >
            <motion.div
              variants={textVariants}
              className="relative inline-block mb-8"
            >
              <span className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                👋 Hello, I&apos;m Waseem Khan
              </span>
              <div className="absolute -bottom-1 left-8 w-3/4 h-2 bg-redish/20 dark:bg-redish/30 -z-10"></div>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              <span className="relative">
                Full Stack
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-redish/30 dark:bg-redish/40 transform -skew-y-2"></span>
              </span>
              <br />
              <span className="text-redish">Developer</span> &<br />
              Tech Enthusiast
            </motion.h1>

            <motion.div
              variants={textVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              <span className="mr-2">I transform</span>
              <span className="font-medium text-redish inline-block">
                <TypingAnimator
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: isDarkMode ? "#ffffff" : "#1e293b", // Dynamic color based on dark mode
                    display: "inline-block",
                  }}
                  textArray={[
                    "ideas into digital reality",
                    "concepts into scalable solutions",
                    "designs into functional apps",
                    "problems into innovations",
                  ]}
                  cursorColor="#ff014f"
                  fontSize="1.25rem"
                  height="1rem"
                  typingSpeed={50}
                  delaySpeed={1500}
                  backspace
                />
              </span>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="flex gap-4 flex-wrap"
            >
              <button className="bg-redish text-white px-8 py-4 rounded-lg font-semibold hover:bg-redish/90 transition-all duration-300 shadow-lg hover:shadow-redish/20 relative group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                Get In Touch
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={textVariants}
              className="mt-12 flex gap-8 flex-wrap"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-redish">1+</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-redish">10+</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="order-1 lg:order-2 relative w-full max-w-xl"
          >
            <div className="w-full rounded-[3rem] shadow-2xl overflow-hidden bg-gradient-to-br from-redish/5 dark:from-redish/10 to-white dark:to-gray-800 border-8 border-white dark:border-gray-800">
              <img
                src={heroImage}
                alt="Waseem Khan - Full Stack Developer"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-redish rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-redish/10 dark:bg-redish/20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-redish/5 dark:bg-redish/10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
