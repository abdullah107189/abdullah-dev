import SectionHeader from "../../../Components/SectionHeader";
const About = () => {
  return (
    <div>
      <div className="md:my-10 my-5">
        <SectionHeader title={"about"}></SectionHeader>
      </div>
      <div className="flex items-center justify-center ">
        <div className="text-center md:p-5 p-2 bg-gray-200/10 dark:bg-gray-500/20 backdrop-blur-lg rounded-3xl shadow-2xl border dark:border-gray-400 !z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 gap-2">
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-12 lg:col-span-9">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Who I Am
              </h3>
              <p className=" dark:text-gray-200">
                I am a passionate
                <span className="text-blue-400 text-lg font-semibold">
                  MERN Stack Developer
                </span>
                specializing in high-performance web applications with{" "}
                <span className="text-blue-400 text-lg font-semibold">
                  React.js, Next.js, Tailwind CSS, Firebase, and MongoDB
                </span>
                .
              </p>
            </div>
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Passion
              </h3>
              <p className=" dark:text-gray-200">
                I love learning new technologies, solving challenging problems,
                and continuously improving my skills. Traveling and gaming are
                my favorite hobbies.
              </p>
            </div>
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Future Goals
              </h3>
              <p className=" dark:text-gray-200">
                My goal is to become a highly skilled software engineer, working
                on cutting-edge technologies and contributing to innovative
                projects that make a difference.
              </p>
            </div>
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Skills
              </h3>
              <p className=" dark:text-gray-200">
                I have strong expertise in JavaScript, React.js, Next.js,
                Node.js, Express.js, MongoDB, and Firebase. I enjoy working with
                modern UI frameworks like Tailwind CSS to build seamless and
                responsive web applications.
              </p>
            </div>
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                My Experience
              </h3>
              <p className=" dark:text-gray-200">
                I have worked on various projects, developing full-stack web
                applications with modern technologies. My expertise includes
                frontend and backend development, database management, and cloud
                integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
