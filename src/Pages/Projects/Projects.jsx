import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "motion/react"
const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4545/projects')
            .then(data => {
                setProjects(data.data);
            })
    }, [])

    // const {
    //     _id,
    //     name,
    //     description,
    //     image,
    //     technologies,
    //     liveLink,
    //     githubLink,
    //     duration,
    //     role,
    //     challenges,
    //     features,
    //     tools,
    //     creationDate
    // } = project;
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-[#60f318] my-10">
                My Projects
            </h2>
            <div className="grid grid-cols-6 gap-3">
                <div className="border col-span-1 rounded-2xl"></div>
                <div className="grid grid-cols-4 gap-3 col-span-5 transition duration-300">
                    {
                        projects?.map(project =>
                            <div key={project._id} className="group card dark:bg-gray-900 dark:shadow-green-500 hover:shadow-md bg-base-100 dark:border-gray-700 transition duration-300 border overflow-hidden">
                                <figure className="group-hover:scale-110 transform duration-300">
                                    <img
                                        className="w-full h-[120px] object-cover"
                                        src={project?.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="p-2">
                                    <h2 className="font-bold text-xl">{project?.name.slice(0, 20)}</h2>
                                    <motion.h1 animate={{ y: [5, 0, 5], transition: { duration: 3, repeat: Infinity } }} className="flex items-center gap-2 justify-center my-2 font-bold text-[#4bb8f2]">Use Technologies <span className=""><FaLongArrowAltDown className=" dark:text-black  dark:bg-white"></FaLongArrowAltDown ></span></motion.h1>
                                    <div className="flex-wrap flex gap-2 my-2">{project.technologies.map((tec, idx) =>
                                        <p
                                            className={`badge text-white 
                                            ${tec == 'Html' ? 'bg-[#e34f26]' : ''}
                                            ${tec == 'Css' ? 'bg-[#204ed8]' : ''}
                                            ${tec == 'Tailwind Css' ? 'bg-[#0eb8d5]' : ''}
                                            ${tec == 'JavaScript' ? 'bg-[#f7e025]' : ''}
                                            ${tec == 'React' ? 'bg-[#08d9ff]' : ''}
                                            ${tec == 'Firebase' ? 'bg-[#de3308]' : ''}
                                            ${tec == 'MongoDB' ? 'bg-[e34f26]' : ''}
                                            ${tec == 'React Router' ? 'bg-[#d10a22]' : ''}
                                            ${tec == 'Html' ? 'bg-[e34f26]' : ''}
                                        `}
                                            key={idx}
                                        >{tec}</p>)}
                                    </div>
                                    <p>{project?.desciption}</p>
                                    {/* <div className="card-actions justify-end text-[#60f318]">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div> */}
                                </div>
                                <div className="hidden  absolute inset-0 bg-black/30 group-hover:flex items-center justify-center ">
                                    <button className="btn btn-accent">Full Details</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;