import React from "react";
import { Img} from "..";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const navigate = useNavigate();
  const  navigateLogin = () => navigate(`/login`);
  const  naviagateMentor = () => navigate(`/allmentors`);
  const  navigateShop = () => navigate(`/shop`);
  const  handlelogin = () => navigate(`/login`);
  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
     
        <p className="text-2xl text-bold">🎓 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</p>
        
        <div className="flex flex-row justify-start items-center w-[58%] gap-8">

        <div >
      <form className="flex">
        <input
          type="text"
          placeholder="Enter your search term"
          className="px-4 py-1 bg-white text-white rounded-l-md  border-orange-200 focus:ring-orange-300"
          />
        
        <button type="submit" className="px-4 py-1 bg-orange-300 text-white rounded-r-md hover:bg-orange-200 focus:outline-none">
          Search
        </button>
      </form>
      </div>
          <button 
          className=" !font-medium hover:text-orange-300"
          onClick={navigateShop}>
            Shop
          </button>
            <button 
            className="text-right !font-medium hover:text-orange-300"
            onClick={naviagateMentor}>
             All Courses
            </button>
          <button className="!font-medium hover:text-orange-300"
          onClick={naviagateMentor}>
            Mentors
          </button>
        </div>

        <div className="flex flex-row justify-between w-[21%]">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <button className="!text-gray-900 text-right !font-medium ">
              My learnings(0)
            </button>
          </div>
          <div className="flex flex-row justify-start items-center pl-[3px] gap-2.5">
            <p className="!text-gray-900 text-right !font-medium">
              My Account
            </p>
            <button onClick={handlelogin}>
            <Img src="images/img_profile_24_outline.svg" alt="profiletwentyfo" className="h-[30px] w-[30px]" />
            </button>
           
          </div>
        </div>
      </div>
    </header>
  );
}
