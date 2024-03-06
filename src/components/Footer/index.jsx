import React from "react";

export default function Footer() {
  return (
  <>
  <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-between items-center w-full p-[50px] sm:px-[20px] sm:py-[30px] bg-black-900_01  rounded-[20px]">
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
                20k+ students daily learn with Educatsy. Subscribe for new courses.
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
   
<div className="flex flex-row md:flex-col justify-between w-full text-xl py-8 bg-orange-100 px-20 md:px-8 lg:px-18 ">

  <div className="flex flex-col justify-start md:justify-center mx-4 md:mx-2 mb-4 md:mb-0">
    <p className="mb-1">©2024 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</p>
    <p>𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂 is a registered</p>
    <div className="my-4 text-sm">
      <p>Design and created by</p>
      <p>souvik</p>
      <p>rupal</p>
      <p>satwikee</p>
    </div>
  </div>

  <div className="flex flex-col justify-start md:justify-center md:pt-0.5 my-4">
    <h5 className="mb-3 text-2xl md:text-xl font-bold">Community</h5>
    <div className="flex flex-col items-start justify-center w-full gap-y-1 text-sm">
      <p className="mt-0.5">Learners</p>
      <p>Partners</p>
      <p>Developers</p>
      <p>Transactions</p>
      <p>Blog</p>
      <p>Teaching Center</p>
    </div>
  </div>

  <div className="flex flex-col justify-start md:justify-center md:pt-0.5 my-4 md:mb-0 md:w-1/5">
    <h5 className="mb-3 text-2xl md:text-xl font-bold">Quick links</h5>
    <div className="flex flex-col items-start justify-center w-full gap-y-1 text-sm">
      <p className="mt-0.5">Home</p>
      <p>Professional Education</p>
      <p>Courses</p>
      <p>Admissions</p>
      <p>Testimonial</p>
      <p>Programs</p>
    </div>
  </div>

  <div className="flex flex-col justify-start md:justify-center md:pt-0.5 my-4 md:w-1/5">
    <h5 className="mb-3 text-2xl md:text-xl font-bold">More</h5>
    <div className="flex flex-col items-start justify-center w-full gap-y-1 py-1 text-sm">
      <p>Press</p>
      <p>Investors</p>
      <p>Terms</p>
      <p>Privacy</p>
      <p>Help</p>
      <p>Contact</p>
    </div>
  </div>

</div>

  </>
  );
}
