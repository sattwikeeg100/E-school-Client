import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Context } from "context";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFaceGrinStars } from "react-icons/fa6";

export default function Header({ ...props }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    const { data } = axios.get(`${API_BASE_URL}/logout`);
    toast.success("Please visit again!🖖");
    navigate("/");
  };

  // const Name = {user.name}
  const navigateLogin = () => navigate("/login");
  const navigateMentor = () => navigate("/allmentors");
  const navigateShop = () => navigate("/shop");
  const navigateBeInstructor = () => navigate("/joinasteacher");

  const name = user?.name.toUpperCase();

  const getInitials = () => {
    const firstInitial = user ? user.name.charAt(0).toUpperCase() : "";
    return firstInitial || <FaFaceGrinStars />;
  };

  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
        <a className="text-2xl font-bold" href="/">🎓 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</a>

        {/* Mobile Menu Button */}
        <button
          className="hidden md:block text-2xl p-1"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="flex md:hidden md:flex lg:justify-center lg:items-center  gap-8">
          <form className="flex">
            <input
              type="text"
              placeholder="Enter your search term"
              className="px-4 py-1 bg-white rounded-l-md border-orange-200 focus:ring-orange-300"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-orange-300 text-white rounded-r-md hover:bg-orange-200 focus:outline-none"
            >
              Search
            </button>
          </form>
          <button 
           className="hover:text-orange-300 font-medium"
           onClick={navigateBeInstructor}>
                Be a Instuctor
              </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateShop}
          >
            Shop
          </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateMentor}
          >
            All Courses
          </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateMentor}
          >
            Mentors
          </button>

          {user == null && (
            <>
              <button
                onClick={navigateLogin}
                className="flex items-center gap-1 rounded-md"
              >
                <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">Login</p>
              </button>
            </>
          )}
          {user != null && (
            <>
              {" "}
              <button className="text-gray-900 font-medium">
                My learnings
              </button>

              <button
                onClick={logout}
                className="flex items-center gap-1 float-right"
              >
                <p className="text-gray-900 font-medium mr-1">{name}</p>
                <div className="w-10 h-10 bg-orange-400 rounded-full mx-auto  flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-100">
                    {getInitials()}
                  </span>
                </div>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className=" h-scrren fixed inset-0 z-50 overflow-hidden overscroll-none">
            <div className=" h-full px-28 py-4 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-100">
              <div className="lg:hidden absolute top-10 py-2 mx-auto text-xl flex flex-col gap-y-2 justify-center">
              {user == null && (
            <>
            <div className="pb-8 text-center">
              <button
                onClick={navigateLogin}
                className="rounded-md ml-2"
              >
                <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">Login</p>
              </button>
              </div>
            </>
          )}
          {user != null && (
            <>
             
              <div className="pb-6">
              <div className="flex items-center gap-1 ">
                <div className="w-10 h-10 bg-orange-400 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-100">
                    {getInitials()}
                  </span>
                </div>

                <p className="font-bold mr-2">{name}</p>
              </div>
              <p className="mt-2 text-sm font-semibold tracking-widest">{user.email}</p>
              </div>

              <button className="font-medium hover:text-orange-300 mb-4">
                My Dashboard
              </button>

              <button className="font-medium hover:text-orange-300 mb-4">
                My learnings
              </button>

            </>
          )}
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
                  onClick={navigateShop}
                >
                  Shop
                </button>
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4 "
                  onClick={navigateMentor}
                >
                  All Courses
                </button>
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
                  onClick={navigateMentor}
                >
                  Mentors
                </button>

              <button className="font-medium hover:text-orange-300 font-medium mb-2 "
              onClick={navigateBeInstructor}>
                Be a Instuctor
              </button>

              {user != null && (
            <>
              {" "}

              <button
                onClick={logout}
                className="rounded-md"
              >
                <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">Logout</p>
              </button>
              </>
              )}

                <button
                  onClick={toggleMobileMenu}
                  className="items-center ml-10 text-5xl hover:text-orange-300 block my-8"
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
