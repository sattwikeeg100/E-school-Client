import React, { useState } from "react";
import { Img,SelectBox} from "../../components";
import EduviCoursesDetailsMaincard from "../../components/EduviCoursesDetailsMaincard";
import EduviCoursesDetailsMaincard1 from "../../components/EduviCoursesDetailsMaincard1";
import EduviCoursesEight from "../../components/EduviCoursesEight";
import EduviCoursesEleven from "../../components/EduviCoursesEleven";
import EduviCoursesFive from "../../components/EduviCoursesFive";
import EduviCoursesFour from "../../components/EduviCoursesFour";
import EduviCoursesNine from "../../components/EduviCoursesNine";
import EduviCoursesOne from "../../components/EduviCoursesOne";
import EduviCoursesSeven from "../../components/EduviCoursesSeven";
import EduviCoursesSix from "../../components/EduviCoursesSix";
import EduviCoursesTen from "../../components/EduviCoursesTen";
import EduviCoursesThree from "../../components/EduviCoursesThree";
import EduviCoursesTwo from "../../components/EduviCoursesTwo";
import Footer from "components/Footer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LeranopiaMainPage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100 border-red-700 boreder-2">
          
  <div className="flex flex-row md:flex-col items-center justify-start w-full gap-5 sm:gap-2 p-5 sm:p-1 bg-yellow-100 max-w-7xl rounded-20 mt-12 sm:pb-12 sm:mt-4">
    <div className="flex flex-col sm:flex-row  gap-y-7 sm:gap-x-10 mx-2">
  <p className="mt-1 sm:mr-12 font-medium sm:text-sm mb-12 sm:ml-1">
    Home | Courses
  </p>
  <h1 className="w-full text-center sm:text-right font-semibold text-lg md:text-sm">
      Educatsy Courses
      <br />
      For All Standards
    </h1>
    </div>
    <div className="w-full relative">
      <div className="h-3.5 w-full bottom-1% right-0 left-0 m-auto backdrop-opacity-50 blur-20px absolute rounded-full" />
      <img
      src="images/img_image_210x374.png"
      alt="image_one"
      className="justify-center h-[300px] w-[55%] left-[-1] bottom-0 right-0 top-0 m-auto object-fit absolute sm:w-[80%] sm:h-[180px] sm:mr-8"
      />
    
  </div>
</div>


        <div className="flex flex-col items-center justify-start w-full gap-[47px]">
        <div className="flex flex-row md:flex-wrap justify-start sm:justify-center w-full gap-5 max-w-7xl">
  <button  className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    All Courses
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    Kindergarten
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    High School
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    College
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    Computer
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    Science
  </button>
  <button className="font-medium min-w-[142px] rounded-[10px] mb-3 md:mb-0 md:mr-3">
    Engineering
  </button>
  <button  className="!text-deep_orange-400 font-medium min-w-[142px] rounded-[10px]">
    More Courses
  </button>
</div>

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[23px] max-w-7xl">
              <h2 className="text-4xl font-bold sm:p-4">
                Standard Classes
              </h2>
              <div className="flex flex-row justify-start sm:justify-center w-full">
                <div className=" w-full sm:w-72 gap-10 grid-cols-4 grid min-h-[auto] sm:grid-cols-1 sm:gap-4">
                  <EduviCoursesOne className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesTwo className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesThree className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesFour className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesFive className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesSix className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesSeven className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesEight className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesNine className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesTen className="flex flex-col items-center justify-start w-full" />
                  <EduviCoursesEleven className="flex flex-col items-center justify-start w-full" />
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
                  Other Courses
                </h1>
                <div className="flex flex-row justify-start gap-[42px] sm:flex-col sm:mx-4 sm:gap-[8px]">
                  <input
                    name="search"
                    placeholder="Search Class, Course, Book Name"
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
                    className="w-40 h-12 gap-px font-medium sm:h-8 sm:w-48"
                  />
                </div>
              </div>
              <div className="justify-center w-full gap-10 grid-cols-2 grid min-h-[auto] sm:grid-cols-1 sm:w-72 sm:gap-2 sm:mx-4">
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_103x160.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1 className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_2.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_3.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 shadow-xs cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1 className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_2.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_3.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_103x160.png"
                  className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1 className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>

    
  );
}
