import Header from "components/Header";
import Login from "modals/LogIn";
import SignUp from "modals/SignUp";
import EduviCoursesDetails from "./pages/EduviCoursesDetails";
import ShopPage from "./pages/Shop";
import EduviCoursesPricing from "./pages/EduviCoursesPricing";
import JoinAsTeacherPage from "./pages/JoinAsTeacher/index.jsx";
import Allmentors from "./pages/Allmentors";
import Singlementordetails from "./pages/Singlementordetails";
import NotFound from "pages/NotFound";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "context";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "modals/ForgetPassword";
import ResetPassword from "modals/ForgetPassword/resetPassword";
import "react-toastify/dist/ReactToastify.css";
import Header2 from "components/Header2";
import LeranopiaMainPage from "pages/LearnopiaMainPage";
import InstructorDashboard from "pages/InstructorDashboard/dashboard";
import CreateCourse from "pages/createCourse";
import CourseView from "pages/createCourse/courseView/slug";
import AllcoursesPage from "pages/AllCourses";


function App() {
  // const navigationElement = <Header1/>
  const Role = localStorage.getItem("Role");
  console.log(Role);

  const HomePage =
    Role === null || (Role !== null && !Role.includes("Instructor")) ? (
      <LeranopiaMainPage />
    ) : (
      <InstructorDashboard />
    );
  const navbar =
    Role === null || (Role !== null && !Role.includes("Instructor")) ? (
      <Header className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100 overflew-hidden" />
    ) : (
      <Header2 className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100 overflew-hidden" />
    );

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/reset-password/:id/:token", element: <ResetPassword /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: (
        <>
          {navbar}
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: HomePage },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/coursedetail",
          element: <EduviCoursesDetails />,
        },
        {
          path: "/coursespricing",
          element: <EduviCoursesPricing />,
        },
        {
          path: "/joinasteacher",
          element: <JoinAsTeacherPage />,
        },
        // {
        //   path: "/instructor-dashboard",
        //   element: <InstructorIndex />,
        // },
        {
          path: "/allcourses",
          element: <AllcoursesPage />,
        },
        {
          path: "/allmentors",
          element: <Allmentors />,
        },
        {
          path: "/mentordetails",
          element: <Singlementordetails />,
        },
        {
          path: "/create-course",
          element: <CreateCourse />,
        },
        { path: "/course/view/:slug", element: <CourseView /> },
      ],
    },
  ]);

  return (
    <Provider>
      <ToastContainer />
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;
