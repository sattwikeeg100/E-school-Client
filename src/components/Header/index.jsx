import React, { useContext, useState } from "react";
import { Img } from "..";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Context } from "context";
import axios from "axios";
import { toast } from "react-toastify";

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

  const navigateLogin = () => navigate("/login");
  const navigateMentor = () => navigate("/allmentors");
  const navigateShop = () => navigate("/shop");

  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
        <p className="text-2xl font-bold">🎓 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</p>

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
                className="flex items-center gap-1"
              >
                <p className="text-gray-900 font-medium">Signin</p>
              </button>
            </>
          )}
          {user != null && (
            <>
              {" "}
              <button className="text-gray-900 font-medium">
                My learnings(0)
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-1 float-right"
              >
                <p className="text-gray-900 font-medium ">Logout</p>
                <Img
                  src="images/img_profile_24_outline.svg"
                  alt="profiletwentyfo"
                  className="h-[30px] w-[30px]"
                />
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className=" h-scrren fixed inset-0 z-10 overflow-y-hidden">
            <div className=" h-full px-28 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">
              <div className="lg:hidden absolute top-10 py-4 mx-auto text-xl flex flex-col gap-y-4 justify-center">
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
                  onClick={navigateShop}
                >
                  Shop
                </button>
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
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

                <button className="text-gray-900 font-medium hover:text-orange-300 block mb-4">
                  My learnings(0)
                </button>

                <button
                  onClick={navigateLogin}
                  className="flex items-center gap-1 mb-4"
                >
                  <p className="text-gray-900 font-medium hover:text-orange-300 block">
                    Signin
                  </p>
                  <Img
                    src="images/img_profile_24_outline.svg"
                    alt="profiletwentyfo"
                    className="h-[30px] w-[30px]"
                  />
                </button>

                <button
                  onClick={toggleMobileMenu}
                  className="items-center pl-12 text-3xl hover:text-orange-300 block mb-4"
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
