import Header from "components/Header";
import Login from "modals/LogIn";
import SignUp from "modals/SignUp";
import EduviCoursesDetails from "./pages/EduviCoursesDetails";
import ShopPage from "./pages/Shop";
import EduviCoursesPage from "./pages/leranopiaMainPage";
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
import { InstructorIndex } from "pages/InstructorDashboard/dashboard";

function App() {
  // const navigationElement = <Header1/>

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
          <Header className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100 overflew-hidden" />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <EduviCoursesPage /> },
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
        {
          path: "/instructor-dashboard",
          element: <InstructorIndex />,
        },
        {
          path: "/allmentors",
          element: <Allmentors />,
        },
        {
          path: "/mentordetails",
          element: <Singlementordetails />,
        },
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
