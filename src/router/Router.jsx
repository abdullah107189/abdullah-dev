import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`http://localhost:4545/projects/${params.id}`)
            }
        ]

    },
]);
export default Router;