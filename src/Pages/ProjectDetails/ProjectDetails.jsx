import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const projectInfo = useLoaderData();
  const {
    name,
    description,
    image,
    technologies,
    liveDemo,
    github,
    duration,
    role,
    challenges,
    features,
    tools,
    creationDate,
  } = projectInfo || {};
  return (
    <div className="min-h-screen md:mb-10 my-5">
      <div className=" mx-auto md:p-8">
        <div className="rounded-3xl md:shadow-2xl shadow-xl overflow-hidden dark:text-gray-50">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full md:h-[450px] h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black text-white bg-opacity-50 flex items-center justify-center">
              <h2 className="md:text-6xl text-4xl font-extrabold  drop-shadow-xl tracking-wide">
                {name}
              </h2>
            </div>
          </div>
          <div className="md:p-8 p-3 space-y-8">
            {/* duration, role, created  */}
            <p className=" text-lg leading-relaxed">{description}</p>
            <div className="flex flex-wrap md:mt-4 mt-2">
              <div className="mr-4 mb-2">
                <span className=" badge shadow-md dark:shadow-gray-600 text-lg dark:bg-gray-900 p-3 rounded-full  font-medium">
                  Duration: {duration}
                </span>
              </div>
              <div className="mr-4 mb-2">
                <span className="badge shadow-md dark:shadow-gray-600 text-lg dark:bg-gray-900 p-3 rounded-full font-medium">
                  Role: {role}
                </span>
              </div>
              <div className="mr-4 mb-2">
                <span className="badge shadow-md dark:shadow-gray-600 text-lg dark:bg-gray-900 p-3 rounded-full font-medium">
                  Created: {creationDate}
                </span>
              </div>
            </div>

            {/* technologies  */}
            <div>
              <h3 className="text-2xl font-semibold">Technologies</h3>
              <ul className=" mt-3 ">
                {technologies.map((tec, idx) => (
                  <p
                    className={`badge font-bold p-3 m-1 pb-4
                                            ${
                                              tec == "Html"
                                                ? "bg-[#e34f26]/10 text-[#e34f26] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "Css"
                                                ? "bg-[#204ed8]/10 text-[#204ed8] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "Tailwind Css"
                                                ? "bg-[#0eb8d5]/10 text-[#0eb8d5] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "JavaScript"
                                                ? "bg-[#f7e025]/10 text-[#f7e025] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "React"
                                                ? "bg-[#08d9ff]/10 text-[#08d9ff] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "Firebase"
                                                ? "bg-[#de3308]/10 text-[#de3308] p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "MongoDB"
                                                ? "bg-[#e3fcf7] text-[#00684a] font-bold p-4"
                                                : ""
                                            }
                                            ${
                                              tec == "React Router"
                                                ? "bg-[#d10a22]/10 text-[#d10a22] p-4"
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
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-6 mt-3">
              <div className="bg-white dark:bg-transparent md:p-6 p-3 rounded-lg shadow-md dark:shadow-gray-700 ">
                <h3 className="text-2xl font-semibold ">Live Demo</h3>
                <a
                  href={liveDemo}
                  className="underline mt-2 block text-xl text-blue-500 hover:text-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {liveDemo || "null"}
                </a>
              </div>

              <div className="bg-white dark:bg-transparent md:p-6 p-3  rounded-lg shadow-md dark:shadow-gray-700  ">
                {!Array.isArray(github) ? (
                  <>
                    <h3 className="text-2xl font-semibold">
                      GitHub Repository
                    </h3>
                    <a
                      href={github}
                      className="underline mt-2 cursor-pointer overflow-hidden block text-xl text-blue-500 hover:text-blue-700 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {github || "null"}
                    </a>
                  </>
                ) : (
                  <div>
                    <h3 className="text-2xl font-semibold">
                      GitHub Client Side
                    </h3>
                    <a
                      href={github?.[0]?.["client-side"]}
                      className="underline mt-2 cursor-pointer overflow-hidden block text-xl text-blue-500 hover:text-blue-700 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {github?.[0]?.["client-side"] || "null"}
                    </a>{" "}
                    <h3 className="text-2xl font-semibold">
                      GitHub Server Side
                    </h3>
                    <a
                      href={github?.[1]?.["client-side"]}
                      className="underline cursor-pointer mt-2 overflow-hidden block text-xl text-blue-500 hover:text-blue-700 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {github?.[0]?.["client-side"] || "null"}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-transparent p-6 rounded-lg shadow-md dark:shadow-gray-700  mt-6">
              <h3 className="text-2xl font-semibold">Challenges</h3>
              <p className="mt-2 text-lg leading-relaxed">{challenges}</p>
            </div>

            <div className="bg-white dark:bg-transparent p-6 rounded-lg shadow-md dark:shadow-gray-700  mt-6">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 mt-3">
                {features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-transparent p-6 rounded-lg shadow-md dark:shadow-gray-700  mt-6">
              <h3 className="text-2xl font-semibold">Tools Used</h3>
              <ul className="list-disc list-inside space-x-2 mt-3">
                {tools?.map((tool, index) => (
                  <li
                    key={index}
                    className="badge p-3 dark:bg-transparent dark:shadow-md dark:shadow-gray-700 bg-blue-100 dark:text-[#4bb8f2] text-blue-600 rounded-full"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
