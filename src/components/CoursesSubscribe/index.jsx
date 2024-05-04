import React from "react";
import { Img, Button, Input, Text, Heading } from "..";

export default function EduviCoursesSubscribe() {
  return (
    <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-between items-center w-full p-[50px] sm:px-[20px] sm:py-[30px] bg-gray-700">
          <div className="flex flex-col items-start justify-start w-[15%] gap-[57px]">
            <img src="images/img_ellipse_169.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%] sm:ml-2" />
            <img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] ml-[127px] rounded-[50%] sm:ml-4"
            />
            <img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] ml-[30px] rounded-[50%] sm:ml-2"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[49%] gap-10">
            <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
              <h1 className="!text-white-A700 !font-metropolis text-center leading-[55px] text-3xl">
                Subscribe For Get Update
                <br />
                Every New Courses
              </h1>
              <p className="!text-white-A700_b2 text-center">
                20k+ students daily learn with Learnopia. Subscribe for new courses.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center w-full sm:flex-col gap-4 sm:gap-y-4">
              <input name="email" placeholder="Enter your email" className="w-72 h-10 px-4 mb-4 sm:mb-0 sm:mx-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-4" />
              <button className="w-32 h-10 font-medium text-white-800 bg-orange-700 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end justify-start w-[16%] gap-[57px]">
            <img
              src="images/img_ellipse_166.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[30px] rounded-[50%] sm:mr-2"
            />
            <img
              src="images/img_ellipse_167.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[127px] rounded-[50%] sm:mr-4"
            />
            <img src="images/img_ellipse_168.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%] sm:mr-2" />
          </div>
        </div>
    </div>
  )};