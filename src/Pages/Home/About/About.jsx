import SectionHeader from "../../../Components/SectionHeader";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="md:my-10 my-5">
        <SectionHeader title={"about"}></SectionHeader>
      </div>

      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:p-5 bg-gray-200/10 dark:bg-gray-800 rounded-3xl shadow-2xl border dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark:bg-white/10 bg-white p-6 rounded-xl shadow-lg border dark:border-gray-600 text-left md:col-span-9"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Who I Am
              </h3>
              <p className=" dark:text-gray-300">
                I am a passionate{" "}
                <span className="text-blue-400 text-lg font-semibold">
                  MERN Stack Developer
                </span>{" "}
                specializing in high-performance web applications with{" "}
                <span className="text-blue-400 text-lg font-semibold">
                  React.js, Next.js, Tailwind CSS, Firebase, and MongoDB
                </span>
                .
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark:bg-white/10 bg-white p-6 rounded-xl shadow-lg border dark:border-gray-600 text-left md:col-span-3"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Passion
              </h3>
              <p className=" dark:text-gray-300">
                I love learning new technologies, solving challenging problems,
                and continuously improving my skills. Traveling and gaming are
                my favorite hobbies.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark:bg-white/10 bg-white p-6 rounded-xl shadow-lg border dark:border-gray-600 text-left md:col-span-3"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Future Goals
              </h3>
              <p className=" dark:text-gray-300">
                My goal is to become a highly skilled software engineer, working
                on cutting-edge technologies and contributing to innovative
                projects that make a difference.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark:bg-white/10 bg-white p-6 rounded-xl shadow-lg border dark:border-gray-600 text-left md:col-span-3"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Skills
              </h3>
              <p className=" dark:text-gray-300">
                I have strong expertise in JavaScript, React.js, Next.js,
                Node.js, Express.js, MongoDB, and Firebase. I enjoy working with
                modern UI frameworks like Tailwind CSS to build seamless and
                responsive web applications.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark:bg-white/10 bg-white p-6 rounded-xl shadow-lg border dark:border-gray-600 text-left md:col-span-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Experience
              </h3>
              <p className=" dark:text-gray-300">
                I have worked on various projects, developing full-stack web
                applications with modern technologies. My expertise includes
                frontend and backend development, database management, and cloud
                integrations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
