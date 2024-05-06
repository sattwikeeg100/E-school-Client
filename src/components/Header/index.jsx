import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline, IoIosLogOut } from "react-icons/io";
import { Context } from "context";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFaceGrinStars } from "react-icons/fa6";
import { Dropdown, Menu } from "antd";

export default function Header({ ...props }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown menu
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("Role");
    const { data } = axios.get(`${API_BASE_URL}/logout`);
    toast.success("Please visit again!🖖");
    navigate("/login");
  };

  // const Name = {user.name}
  const navigateLogin = () => {
    navigate("/login");
    setMobileMenuOpen(false);
  };
  const navigateMentor = () => {
    navigate("/allmentors");
    setMobileMenuOpen(false);
  };
  const navigateCourses = () => {
    navigate("/allcourses");
    setMobileMenuOpen(false);
  };
  const navigateShop = () => {
    navigate("/shop");
    setMobileMenuOpen(false);
  };
  const navigateBeInstructor = () => {
    navigate("/joinasteacher");
    setMobileMenuOpen(false);
  };
  const navigateUserdashboard = () => {
    navigate("/mylearning");
    setMobileMenuOpen(false);
  };
  const navigateUserCart = () => {
    navigate("/mycart");
    setMobileMenuOpen(false);
  };

  const Firstname = user?.name.split(" ");
  const name = Firstname?.[0]?.toUpperCase();

  const getInitials = () => {
    const firstInitial = user ? user.name.charAt(0).toUpperCase() : "";
    return firstInitial || <FaFaceGrinStars />;
  };

  // Menu for Ant Design Dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={navigateUserCart}>
        My Cart
      </Menu.Item>
      <Menu.Item key="2" onClick={logout}>
        <p className="flex flex-row gap-2 items-center">
          Logout
          <IoIosLogOut/>
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
        <a className="text-2xl font-bold" href="/">
          🎓 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂
        </a>

        {/* Mobile Menu Button */}
        <button
          className="hidden md:block text-2xl p-1"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="flex md:hidden md:flex lg:justify-center lg:items-center  gap-8">
          <button
            className="hover:text-orange-300 font-medium"
            onClick={navigateBeInstructor}
          >
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
            onClick={navigateCourses}
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
                <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">
                  Login
                </p>
              </button>
            </>
          )}
          {user != null && (
            <>
              {" "}
              <button
                className="text-gray-900 font-medium hover:text-orange-300"
                onClick={navigateUserdashboard}
              >
                My learnings
              </button>

              <Dropdown overlay={menu} trigger={["click"]}>
                <button
                  className="flex items-center gap-1 float-right"
                  id="dropdown-menu"
                >
                  <p className="text-gray-900 font-medium mr-1">{name}</p>
                  <div className="w-10 h-10 bg-orange-400 rounded-full mx-auto  flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-100">
                      {getInitials()}
                    </span>
                  </div>
                </button>
              </Dropdown>

            </>
          )}
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className=" h-screen fixed inset-0 z-50 overflow-hidden overscroll-none mx-auto">
            <div className="h-full px-auto shadow-lg backdrop-blur-md backdrop-filter bg-opacity-100 text-center">
              <div className="lg:hidden relative top-8 py-2 mx-auto text-xl flex flex-col gap-y-1 justify-center text-center">
                {user == null && (
                  <>
                    <div className="pb-8 text-center">
                      <button
                        onClick={navigateLogin}
                        className="rounded-md ml-2"
                      >
                        <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">
                          Login
                        </p>
                      </button>
                    </div>
                  </>
                )}
                {user != null && (
                  <>
                    <div className="pt-2 flex items-center gap-x-2 mx-auto">
                      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-center">
                        <span className="text-2xl font-semibold text-gray-100">
                          {getInitials()}
                        </span>
                      </div>
                      <p className="font-bold">{name}</p>
                    </div>
                    <p className="mt-2 mb-8 text-sm font-semibold tracking-widest text-center">
                      {user.email}
                    </p>
{/* 
                    <button className="font-medium hover:text-orange-300 mb-4 text-center">
                      My Profile
                    </button> */}

                    <button
                      className="font-medium hover:text-orange-300 mb-4 text-center"
                      onClick={navigateUserdashboard}
                    >
                      My learnings
                    </button>

                    <button
                      className="font-medium hover:text-orange-300 mb-4 text-center"
                      onClick={navigateUserCart}
                    >
                      My Cart
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
                  onClick={navigateCourses}
                >
                  All Courses
                </button>
                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
                  onClick={navigateMentor}
                >
                  Mentors
                </button>

                <button
                  className="font-medium hover:text-orange-300 font-medium mb-2 "
                  onClick={navigateBeInstructor}
                >
                  Be a Instuctor
                </button>

                {user != null && (
                  <>
                    {" "}
                    <button
                      onClick={logout}
                      className="rounded-md w-28 mx-auto my-4"
                    >
                      <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">
                        Logout
                      </p>
                    </button>
                  </>
                )}

                <button
                  onClick={toggleMobileMenu}
                  className="items-center text-5xl hover:text-orange-300 block my-6 mx-auto"
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
