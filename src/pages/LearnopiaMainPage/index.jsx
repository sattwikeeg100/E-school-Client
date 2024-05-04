import React, { useState } from "react";
import { Heading, Text, Img, SelectBox} from "../../components";
import EduviCoursesDetailsMaincard from "../../components/CoursesDetailsMaincard";
import EduviSubjectMainCard from "../../components/SubjectMainCard";
import EduviCoursesMore from "../../components/CoursesMore";
import { oursubjectdata } from "./oursubjectdata";
import Footer from "components/Footer";
import { ourcoursedata } from "./ourcoursedata";

const dropDownOptions = [
  { label: "Sort by: Latest", value: "option1" },
  { label: "Sort by: Price", value: "option2" },
  { label: "Sort by: Level", value: "option3" },
];

export default function LeranopiaMainPage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] sm:gap-[70px] bg-gray-100 ">
          
  <div className="flex flex-row md:flex-col items-center justify-around w-full h-[300px] gap-5 sm:gap-2 p-5 sm:p-4
  bg-yellow-100 max-w-7xl rounded-20 mt-12 sm:mt-1   sm:h-[300px] font-serif">
      <h1 className="!font-semibold text-4xl sm:text-2xl whitespace-normal tracking-wide italic">
      Welcome to Learnopia ,<br/> Where Knowledge Blossoms and Futures Flourish!
      </h1>
      {/* <div className="h-3.5 bottom-1% right-0 left-0 backdrop-opacity-50 blur-20px absolute rounded-full" /> */}
      <img
      src="images/img_image_210x374.png"
      alt="image_one"
      className="justify-center h-[350px] w-[50%] left-[-1] bottom-0 right-0 top-0 mt-22 sm:mt-2 object-fit sm:w-[98%] "
      />
</div>

        <div className="flex flex-col items-center justify-start w-full gap-[47px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[23px] max-w-7xl">
              <h2 className="text-4xl font-bold sm:p-2">
                Discover Our Top Free Courses!
              </h2>
              <div className="flex flex-row justify-start sm:justify-center w-full">
                <div className=" w-full sm:w-72 gap-10 grid-cols-4 grid min-h-[auto] sm:grid-cols-1 sm:gap-4">
                  {oursubjectdata.map((carddata , index) => (
                    <div key={index}>
                    <EduviSubjectMainCard className="flex flex-col items-center justify-start w-full" 
                      imgsrc={carddata.image}
                      domain={carddata.subject}
                      description={carddata.description}
                    />
                    </div>
                  ))}
                  <EduviCoursesMore className="flex flex-col items-center justify-start w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-7xl">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
              <h1 className="text-4xl font-bold sm:text-3xl sm:p-4 mb-4">
                  Explore Our Other Popular Courses
                </h1>
                <div className="flex flex-row justify-start gap-[42px] sm:flex-col sm:mx-4 sm:gap-[8px]">
                  <input
                    name="search"
                    placeholder="Search for courses..."
                    value={searchBarValue7}
                    onChange={(e) => setSearchBarValue7(e)}
                    className="w-72 h-12 rounded-md sm:h-8"
                  />
                  <SelectBox
                    size="xs"
                    indicator={<Img src="images/img_arrowdown_red_300_01.svg" alt="arrow_down" />}
                    name="sortbylatest"
                    placeholder="Sort by: Latest"
                    options={dropDownOptions}
                    className="w-60 h-12 shadow gap-px font-medium sm:h-8 sm:w-48"
                  />
                </div>
              </div>
              <div className="justify-center w-full gap-10 grid-cols-2 grid min-h-[auto] sm:grid-cols-1 sm:w-72 sm:gap-2 sm:mx-4">
                
                {ourcoursedata.map((course, index) => (
                  <div key={index}>
                    <EduviCoursesDetailsMaincard
                    className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                    courseimage={course.image}
                    coursename={course.title}
                    price={course.price}
                    isaddedtobag={course.price < 400? true: false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>

    
  );
}
