import React, { Suspense } from "react";
import Header from "components/Header";
import Login from "modals/LogIn";
import SignUp from "modals/SignUp";
import ShopPage from "./pages/Shop";
import EduviCoursesPricing from "./pages/CoursesPricing";
import Singlementordetails from "./pages/Singlementordetails";
import NotFound from "pages/NotFound";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "context";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "modals/ForgetPassword";
import ResetPassword from "modals/ForgetPassword/resetPassword";
import "react-toastify/dist/ReactToastify.css";
import Header2 from "components/Header2";
import CreateCourse from "pages/createCourse";
import CourseView from "pages/createCourse/courseView/slug";
import AllcoursesPage from "pages/AllCourses";
import CoursesDetailsPage from "./pages/CoursesDetails/slug";
import PaymentSuccess from "pages/CoursesDetails/PaymentSuccess";
import MyLearning from "pages/UserDashboard/MyLearning";
import CreateProduct from "pages/createProduct";
import MyCart from "pages/My Cart";
import InstructorOverview from "pages/InstructorOverview";
import { SkeletonTheme } from "react-loading-skeleton";
import Loading from "Loading/loading";

const LeranopiaMainPage = React.lazy(() => import("pages/LearnopiaMainPage"));
const InstructorDashboard = React.lazy(() => import("pages/InstructorDashboard/dashboard"));
const Allmentors = React.lazy(() => import("./pages/Allmentors"));
const JoinAsTeacherPage = React.lazy(() => import("./pages/JoinAsTeacher/index.jsx"));

function App() {
  // const navigationElement = <Header1/>
  const Role = localStorage.getItem("Role");

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
    { path: "/reset-password/:id", element: <ResetPassword /> },
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
          path: "/paymentsuccess",
          element: <PaymentSuccess />,
        },
        {
          path: "/mylearning",
          element: <MyLearning />,
        },
        {
          path: "/mycart",
          element: <MyCart />,
        },
        {
          path: "/course/:slug",
          element: <CoursesDetailsPage />,
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
        {
          path: "/create-product",
          element: <CreateProduct />,
        },
        {
          path: "/overview",
          element: <InstructorOverview />,
        },
        { path: "/overview/course/view/:slug", element: <CourseView /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div><Loading/></div>}>
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
      <Provider>
        <ToastContainer />
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
      </Provider>
    </SkeletonTheme>
    </Suspense>
  );
}

export default App;
