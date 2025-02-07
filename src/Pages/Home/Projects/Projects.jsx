import axios from "axios";
import { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/SectionHeader";
const Projects = () => {
  const [limit, setLimit] = useState(true);
  const { data: projects = [] } = useQuery({
    queryKey: ["projects", limit],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://abdullah-dev-server-side.vercel.app/projects?limit=${limit}`
      );
      return data;
    },
  });

  return (
    <div className="maxW  sticky top-20 ">
      <SectionHeader title={"Project"}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-12 lg:col-span-9 gap-5 transition duration-300 h-full">
        {projects?.map((project, idx) => (
          <div
            key={idx}
            className="group card backdrop-blur-lg bg-gray-200/10 dark:bg-gray-500/20  shadow-lg dark:shadow-custom border dark:border-gray-400 dark:shadow-green-500/50 hover:shadow-custom flex  transition duration-300 overflow-hidden"
          >
            <figure className="  group-hover:scale-110 transform duration-300">
              <img
                referrerPolicy="no-referrer"
                className="w-full lg:h-[130px]  md:h-[200px] object-cover"
                src={project?.image}
                alt={project?.name}
              />
            </figure>
            <div className="p-2 flex card-body">
              <h2 className="font-bold text-xl">
                {`${
                  project?.name.length > 15
                    ? project?.name.slice(0, 15)
                    : project?.name
                }`}
                <span>{`${project?.name.length > 20 ? "..." : ""}`}</span>
              </h2>
              <motion.h1
                animate={{
                  y: [5, 0, 5],
                  transition: { duration: 3, repeat: Infinity },
                }}
                className="flex items-center gap-2 mb-3 mt-1 font-bold text-[#4bb8f2]"
              >
                Use Technologies{" "}
                <span className="">
                  <FaLongArrowAltDown className=" dark:text-black  dark:bg-white flex-grow"></FaLongArrowAltDown>
                </span>
              </motion.h1>

              <div className="flex-wrap  flex gap-2 my-2">
                {project.technologies.slice(0, 3).map((tec, idx) => (
                  <p
                    className={`badge font-bold p-3 pb-4
                                            ${
                                              tec == "Html"
                                                ? "bg-[#e34f26]/20 text-[#e34f26]"
                                                : ""
                                            }
                                            ${
                                              tec == "Css"
                                                ? "bg-[#204ed8]/20 text-[#204ed8]"
                                                : ""
                                            }
                                            ${
                                              tec == "Tailwind Css"
                                                ? "bg-[#0eb8d5]/20 text-[#0eb8d5]"
                                                : ""
                                            }
                                            ${
                                              tec == "JavaScript"
                                                ? "bg-[#f7e025]/20 text-[#f7e025]"
                                                : ""
                                            }
                                            ${
                                              tec == "React"
                                                ? "bg-[#08d9ff]/20 text-[#08d9ff]"
                                                : ""
                                            }
                                            ${
                                              tec == "Firebase"
                                                ? "bg-[#de3308]/20 text-[#de3308]"
                                                : ""
                                            }
                                            ${
                                              tec == "MongoDB"
                                                ? "bg-[#e3fcf7] text-[#00684a] font-bold p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "React Router"
                                                ? "bg-[#d10a22]/20 text-[#d10a22]"
                                                : ""
                                            }
                                            ${
                                              tec == "Express"
                                                ? "bg-[white] text-gray-700 font-bold p-4"
                                                : ""
                                            }
                                        `}
                    key={idx}
                  >
                    {tec}
                  </p>
                ))}
                {project.technologies.length > 3 && (
                  <span className="badge bg-neutral p-3 pb-4 text-white text-center">
                    + More
                  </span>
                )}
              </div>
            </div>

            {/* when hover then show this part  */}
            <div className="opacity-0 group-hover:opacity-100 transform duration-500  absolute inset-0 bg-black/50 ">
              <div className="flex flex-col  gap-3 items-end justify-center h-full  text-white">
                {/* live link btn */}
                <Link
                  to={project?.liveDemo}
                  target="_blank"
                  className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-0"
                >
                  <button className=" hover:actionBtn border-none !font-normal px-5 py-2 rounded-full transform duration-300 !text-white !bg-gray-700">
                    Live Link
                  </button>
                </Link>

                {/* github btn  */}
                {!Array.isArray(project?.github) ? (
                  <Link
                    to={project?.github}
                    target="_blank"
                    className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-100"
                  >
                    <button className=" hover:actionBtn border-none !font-normal px-5 py-2 rounded-full transform duration-300 !text-white !bg-gray-700">
                      Github Link
                    </button>
                  </Link>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      to={project?.github[0]?.["client-side"]}
                      target="_blank"
                      className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-100"
                    >
                      <button className=" hover:actionBtn border-none !font-normal px-5 py-2 rounded-full transform duration-300 !text-white !bg-gray-700">
                        Client Side
                      </button>
                    </Link>
                    <Link
                      to={project?.github?.[1]["server-side"]}
                      target="_blank"
                      className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-100"
                    >
                      <button className=" hover:actionBtn border-none !font-normal px-5 py-2 rounded-full transform duration-300 !text-white !bg-gray-700">
                        Server Side
                      </button>
                    </Link>
                  </div>
                )}
                {/* details btn  */}
                <Link
                  to={`/projects/${project?._id}`}
                  className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-200"
                >
                  <button className=" hover:actionBtn border-none !font-normal px-5 py-2 rounded-full transform duration-100  !text-white !bg-gray-700">
                    Full Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {limit ? (
        <div className="mx-auto w-full flex items-center justify-center">
          <button
            onClick={() => setLimit(false)}
            className="md:w-1/4 w-1/2 black px-5 rounded-full py-2 border border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold  hover:black transition duration-200 md:mt-10 mt-5"
          >
            Show All
          </button>
        </div>
      ) : (
        <div className="mx-auto w-full flex items-center justify-center">
          <a
            href="/#projects"
            onClick={() => setLimit(true)}
            className="text-center md:w-1/4 w-1/2 px-5 py-2 hover:text-[#60f318] hover:border-[#60f318] transform duration-300 border rounded-full md:mt-10 mt-5"
          >
            Show Less
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
