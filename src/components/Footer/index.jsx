import EduviCoursesSubscribe from "components/CoursesSubscribe";
import React from "react";

export default function Footer() {
  return (
  <>
   <EduviCoursesSubscribe/>
   
    <div className="flex flex-row md:flex-col justify-between w-full text-xl py-8 bg-orange-100 px-20 md:px-8 lg:px-18">

      <div className="flex flex-col justify-start md:justify-center mx-4 md:mx-2 mb-4 md:mb-0">
        <p className="mb-1">©2024 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</p>
        <p>𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂 is a registered educational platform.</p>
        <div className="my-4 text-sm">
          <p>Design and created by</p>
          <p>Souvik</p>
          <p>Rupal</p>
          <p>Sattwikee</p>
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
