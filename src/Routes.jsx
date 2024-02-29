
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import EduviCoursesDetails from "./pages/EduviCoursesDetails";
import EduviShop from "./pages/EduviShop";
import EduviCourses from "./pages/EduviCourses";
import EduviCoursesPricing from "./pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "./pages/EduviJoinAsTeacher";
import Allmentors from "./pages/Allmentors";
import Singlementordetails from "./pages/Singlementordetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <EduviCoursesDetails />,
    },
    {
      path: "eduvishop",
      element: <EduviShop />,
    },
    {
      path: "eduvicourses",
      element: <EduviCourses />,
    },
    {
      path: "eduvicoursespricing",
      element: <EduviCoursesPricing />,
    },
    {
      path: "eduvijoinasteacher",
      element: <EduviJoinAsTeacher />,
    },
    {
      path: "allmentors",
      element: <Allmentors />,
    },
    {
      path: "singlementordetails",
      element: <Singlementordetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
