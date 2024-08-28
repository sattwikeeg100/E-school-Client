import React from "react";
import { Button, Text, Heading, Img } from "..";
import { useNavigate } from "react-router-dom";

export default function EduviCoursesMore() {
  const navigate = useNavigate();
    const navigateCourses = () =>{
      navigate("/allcourses")
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-80 min-h-[100px] bg-gray-100 shadow-md gap-[8px] rounded-[7px]">
      <div className="flex flex-col items-center justify-center w-full p-[25px]">
            <Heading size="xl" as="h1" className="text-center">
            Explore More Such Amazing Courses
            </Heading>
      </div>
        <Button size="lg" variant="outline" className="font-medium hover:font-bold min-w-[159px]" onClick={navigateCourses}>
          Explore All Courses..
        </Button>
    </div>
  );
}
