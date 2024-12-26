import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
const Projects = () => {
    const [projects, setProjects] = useState([])
    const [zoomIn, setZoomIn] = useState(false)
    const [selectAll, setSelectAll] = useState(true)
    const [selectedTechnologies, setSelectedTechnologies] = useState([])
    const [filterProject, setFilterProject] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4545/projects')
        axios.get('/projects.json')
            .then(data => {
                setProjects(data.data);
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4545/filter-projects', { params: { technologies: selectedTechnologies } })
            .then(res => {
                setFilterProject(res.data)
            })
    }, [selectedTechnologies])

    // font end functonality 
    const allTechnologies = []
    for (const project of projects) {
        for (const tec of project.technologies) {
            if (!allTechnologies.includes(tec)) {
                allTechnologies.push(tec)
            }
        }
    }
    const handleSelection = (selTec) => {
        if (selectedTechnologies.includes(selTec)) {
            // const deleteOne = selectedTechnologies.filter(s => (s !== selTec))
            // setSelectedTechnologies(deleteOne)
        }
        else {
            const newSelete = [...selectedTechnologies, selTec]
            setSelectedTechnologies(newSelete)
        }
    }
    const handleDelete = (delTec) => {
        const deleteOne = selectedTechnologies.filter(s => (s !== delTec))
        setSelectedTechnologies(deleteOne)
    }
    const handleZome = () => {
        setZoomIn(true)

        setTimeout(() => {
            setZoomIn(false)
        }, 300);
    }

    const handleAllSelect = () => {
        setSelectAll(!selectAll)
        if (selectAll) {
            setSelectedTechnologies(allTechnologies)
        }
        else {
            setSelectedTechnologies([])
        }
    }
    useEffect(() => {
        if (selectedTechnologies.length === allTechnologies?.length) {
            setSelectAll(false)
        }
        else {
            setSelectAll(true)
        }
    }, [selectedTechnologies])



    // server/filter side functonality 
    const [newProjects, setNewProjects] = useState([])

    const handleFilter = () => {
        if (selectedTechnologies.length > 0) {
            for (const project of projects) {
                for (const tec of selectedTechnologies) {
                    if (project.technologies.includes(tec)) {
                        const remainning = newProjects.filter(proj => proj !== project)
                        setNewProjects(remainning)
                        // console.log(project);
                        // if (newProjects.includes(project)) {
                        // }
                    }
                }
            }
        }
        console.log(newProjects);
    }

    return (
        <div className="maxW px-4 sticky top-20 ">
            <h2 className="text-3xl font-bold text-center text-[#60f318] my-10">
                My Projects
            </h2>
            <div className="grid grid-cols-12 gap-3">
                <div className=" col-span-12 lg:col-span-3 w-full">
                    <div className="sticky top-20">
                        {/* delete show  */}
                        <div className="flex border flex-wrap p-3 gap-1 rounded-2xl mb-3">
                            {
                                selectedTechnologies.length === 0 ?
                                    <button onClick={handleZome} className="border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black w-full  border transition duration-200 py-2 rounded-full">Select Technologies</button>
                                    :
                                    selectedTechnologies.map((tec, idx) => <div key={idx}>
                                        <button
                                            onClick={() => handleDelete(tec)}
                                            className={`badge  relative
                                                ${selectedTechnologies.includes(tec) ? '' : ''}   
                                ${tec == 'Html' ? 'bg-[#e34f26]/20 text-[#e34f26] font-bold p-4' : ''}
                                ${tec == 'Css' ? 'bg-[#204ed8]/20 text-[#204ed8] font-bold p-4' : ''}
                                ${tec == 'Tailwind Css' ? 'bg-[#0eb8d5]/20 text-[#0eb8d5] font-bold p-4' : ''}
                                ${tec == 'JavaScript' ? 'bg-[#f7e025]/20 text-[#f7e025] font-bold p-4' : ''}
                                ${tec == 'React' ? 'bg-[#08d9ff]/20 text-[#08d9ff] font-bold p-4' : ''}
                                ${tec == 'Firebase' ? 'bg-[#de3308]/20 text-[#de3308] font-bold p-4' : ''}
                                ${tec == 'MongoDB' ? 'bg-[#e3fcf7] text-[#00684a] font-bold p-4' : ''}
                                ${tec == 'React Router' ? 'bg-[#d10a22]/20 text-[#d10a22] font-bold p-4' : ''}
                                ${tec == 'Express' ? 'bg-[white] text-gray-700 font-bold p-4' : ''}
                            `}>
                                            {tec}
                                            {selectedTechnologies.includes(tec) && <div className="absolute  w-full h-full opacity-0 group hover:opacity-100 hover:bg-black/50 rounded-full  transform duration-300">
                                                <IoCloseCircle className="-top-1 -right-1 absolute w-4 h-4" />
                                            </div>}
                                        </button>
                                    </div>)
                            }

                            <button
                                onClick={handleFilter}
                                className={` ${selectedTechnologies.length === 0 ? 'disabled cursor-not-allowed border-gray-600' : 'border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black '} w-full mt-5 border transition duration-200 py-2 rounded-full `}>
                                Filter
                            </button>
                        </div>

                        {/* select show  */}
                        <div className={`${zoomIn ? 'scale-105' : 'scale-100'} transform duration-300 flex border flex-wrap p-3 gap-2 rounded-2xl`}>
                            {
                                allTechnologies.map((tec, idx) => <div key={idx}>
                                    <button
                                        onClick={() => { handleSelection(tec) }}

                                        className={`badge relative
                                        
                                ${tec == 'Html' ? 'text-[#e34f26] bg-[#e34f26]/20  font-bold p-5' : ''}
                                ${tec == 'Css' ? 'bg-[#204ed8]/20 text-[#204ed8] font-bold p-5' : ''}
                                ${tec == 'Tailwind Css' ? 'bg-[#0eb8d5]/20 text-[#0eb8d5] font-bold p-5' : ''}
                                ${tec == 'JavaScript' ? 'bg-[#f7e025]/20 text-[#f7e025] font-bold p-5' : ''}
                                ${tec == 'React' ? 'bg-[#08d9ff]/20 text-[#08d9ff] font-bold p-5' : ''}
                                ${tec == 'Firebase' ? 'bg-[#de3308]/20 text-[#de3308] font-bold p-5' : ''}
                                ${tec == 'MongoDB' ? 'bg-[#e3fcf7] text-[#00684a] font-bold p-4' : ''}
                                ${tec == 'React Router' ? 'bg-[#d10a22]/20 text-[#d10a22] font-bold p-5' : ''}
                                ${tec == 'Express' ? 'bg-[white] text-gray-700 font-bold p-5' : ''}
                                `}
                                    >
                                        {tec}
                                        {selectedTechnologies.includes(tec) && <div className="cursor-not-allowed absolute inset-0 w-full h-full opacity-100 bg-black/50 rounded-full flex items-center justify-center">
                                            <IoMdCheckmarkCircleOutline className="text-[#60f318] -top-1 -right-1 absolute w-4 h-4" />
                                        </div>}
                                    </button>
                                </div>)
                            }
                            <button
                                onClick={handleAllSelect}
                                className={`  border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black w-full mt-5 border transition duration-200 py-2 rounded-full`}>
                                {selectAll ? '   Select All' : 'Remove All'}
                            </button>
                        </div>
                    </div>

                </div>

                {/* -----------cards-----------  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-12 lg:col-span-9 gap-3  gap-3transition duration-300 h-full">
                    {
                        filterProject?.map((project, idx) =>

                            <div key={idx} className="group card shadow-lg dark:shadow-green-500 hover:shadow-md flex  transition duration-300 overflow-hidden">
                                <figure className="  group-hover:scale-110 transform duration-300">
                                    <img
                                        referrerPolicy="no-referrer"
                                        className="w-full lg:h-[130px]  md:h-[200px] object-cover"
                                        src={project?.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="p-2 flex card-body">
                                    <h2 className="font-bold text-xl">{`${project?.name.length > 15 ? project?.name.slice(0, 15) : project?.name}`}
                                        <span>{`${project?.name.length > 20 ? '...' : ''}`}</span>
                                    </h2>
                                    <motion.h1 animate={{ y: [5, 0, 5], transition: { duration: 3, repeat: Infinity } }} className="flex items-center gap-2 mb-3 mt-1 font-bold text-[#4bb8f2]">Use Technologies <span className=""><FaLongArrowAltDown className=" dark:text-black  dark:bg-white flex-grow"></FaLongArrowAltDown ></span></motion.h1>

                                    <div className="flex-wrap  flex gap-2 my-2">
                                        {project.technologies.slice(0, 3).map((tec, idx) =>
                                            <p
                                                className={`badge font-bold p-3 pb-4
                                            ${tec == 'Html' ? 'bg-[#e34f26]/20 text-[#e34f26]' : ''}
                                            ${tec == 'Css' ? 'bg-[#204ed8]/20 text-[#204ed8]' : ''}
                                            ${tec == 'Tailwind Css' ? 'bg-[#0eb8d5]/20 text-[#0eb8d5]' : ''}
                                            ${tec == 'JavaScript' ? 'bg-[#f7e025]/20 text-[#f7e025]' : ''}
                                            ${tec == 'React' ? 'bg-[#08d9ff]/20 text-[#08d9ff]' : ''}
                                            ${tec == 'Firebase' ? 'bg-[#de3308]/20 text-[#de3308]' : ''}
                                            ${tec == 'MongoDB' ? 'bg-[#e3fcf7] text-[#00684a] font-bold p-4' : ''}
                                            ${tec == 'React Router' ? 'bg-[#d10a22]/20 text-[#d10a22]' : ''}
                                            ${tec == 'Express' ? 'bg-[white] text-gray-700 font-bold p-5' : ''}
                                        `}
                                                key={idx}
                                            >
                                                {tec}
                                            </p>)}
                                        {project.technologies.length > 3 && <span className="badge bg-neutral p-3 pb-4 text-white text-center">+ More</span>}
                                    </div>
                                    {/* <p>{project?.desciption}</p> */}
                                    {/* <div className="card-actions justify-end text-[#60f318]">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div> */}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transform duration-500  absolute inset-0 bg-black/50 ">
                                    <div className="flex flex-col  gap-3 items-end justify-center h-full border text-white">
                                        <Link to={project?.liveLink} target="_blank" className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-0">
                                            <button className=" hover:border-b-4 px-5 py-2 rounded-full border-[#60f318] transform duration-300 bg-[#60f318]/10">Live Link</button>
                                        </Link>
                                        <Link to={project?.githubLink} target="_blank" className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-100">
                                            <button className=" hover:border-b-4 px-5 py-2 rounded-full border-[#60f318] transform duration-300 bg-[#60f318]/10">Github Link</button>
                                        </Link>
                                        <Link to={`/projects/${project?._id}`} className=" -right-32 relative transition-all duration-300 group-hover:right-2 delay-200">
                                            <button className=" hover:border-b-4 px-5 py-2 rounded-full border-[#60f318] transform duration-100  bg-[#60f318]/10">Full Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Projects;