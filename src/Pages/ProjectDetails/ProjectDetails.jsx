import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
    const projectInfo = useLoaderData()
    console.log(projectInfo)
    const { name, description, image, technologies, liveDemo, github, duration, role, challenges, features, tools, creationDate } = projectInfo || {}
    console.log(github, liveDemo);
    return (
        <div>
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
                {/* Image Section */}
                <img
                    src={image}
                    alt={name}
                    className="w-full object-cover"
                />

                {/* Content Section */}
                <div className="p-6">
                    {/* Project Title */}
                    <h2 className="text-xl font-bold mb-2">
                        {challenges}
                    </h2>

                    {/* Description */}
                    <p className="text-sm mb-4">
                        {description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Features:</h3>
                        <ul className="list-disc list-inside text-sm">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Technologies:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-xs font-medium px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* tools*/}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold">Tools:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-xs font-medium px-2 py-1 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-sm mb-4">
                        <p><strong>Role:</strong> {role}</p>
                        <p><strong>Duration:</strong> {duration}</p>
                        <p><strong>Creation Date:</strong> {creationDate}</p>
                    </div>

                    {/* Links */}
                    <div className="flex justify-between mt-4">
                        <Link
                            to={liveDemo}
                            target="_blank"
                            className="bg-[#60f318] text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition duration-200"
                        >
                            Live Demo
                        </Link>
                        <Link
                            to={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:bg-gray-700 transition duration-200"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;