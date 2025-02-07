import SectionHeader from "../../../Components/SectionHeader";

const About = () => {
  return (
    <div>
      <div className="md:my-10 my-5">
        <SectionHeader title={"About Me"}></SectionHeader>
      </div>
      <div className="flex items-center justify-center ">
        <div className="text-center md:p-5 p-2 bg-gray-200/10 dark:bg-gray-500/20 backdrop-blur-lg rounded-3xl shadow-2xl border dark:border-gray-400 !z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 gap-2">
            {/* About Me Section */}
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-12 lg:col-span-9">
              <h3 className="text-xl font-bold text-blue-400 mb-2">About Me</h3>
              <p className="dark:text-gray-200">
                I’m Abdullah, a passionate
                <span className="text-blue-400 font-semibold mx-1">
                  MERN Stack Developer
                </span>
                with a strong interest in building dynamic and responsive web
                applications. My journey in technology began with a desire to
                create impactful solutions that enhance user experiences. I
                thrive on challenges and enjoy collaborating with teams to bring
                innovative ideas to life.
              </p>
              <p className="dark:text-gray-200 mt-2">
                Outside of coding, I am always eager to learn about new
                technologies and trends in the industry. I believe that
                continuous learning is key to personal and professional growth,
                and I actively seek opportunities to expand my skill set.
              </p>
            </div>
            {/* Programming Journey Section */}
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Programming Journey
              </h3>
              <p className="dark:text-gray-200">
                I started my journey with a web development course from
                <span className="text-blue-400 font-semibold">
                  {" "}
                  Programming Hero, batch ten
                </span>
                . This sparked my passion for coding and led me to learn{" "}
                <span className="text-blue-400 font-semibold">
                  React.js, Next.js, and MongoDB
                </span>
                .
              </p>
            </div>

            {/* My Work Section */}
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-xl font-bold text-blue-400 mb-2">My Work</h3>
              <p className="dark:text-gray-200">
                I enjoy solving complex problems and developing full-stack
                applications, leveraging my skills in both frontend and backend
                development.
              </p>
            </div>

            {/* Hobbies & Interests Section */}
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-3">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Hobbies & Interests
              </h3>
              <p className="dark:text-gray-200">
                I love to travel, paint, and stay active through sports. I
                especially like playing online games like Free Fire, but since I
                started web development, it&apos;s not a good game anymore..
              </p>
            </div>

            {/* My Personality Section */}
            <div className="dark:bg-white/10 bg-white/50 p-6 rounded-xl shadow-lg border dark:border-gray-400 text-left md:col-span-6 lg:col-span-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                My Personality
              </h3>
              <p className="dark:text-gray-200">
                I’m approachable and enthusiastic, valuing collaboration and a
                positive mindset in all my endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
