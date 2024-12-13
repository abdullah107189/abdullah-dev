import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
    const projectInfo = useLoaderData()
    console.log(projectInfo)
    return (
        <div>

        </div>
    );
};

export default ProjectDetails;