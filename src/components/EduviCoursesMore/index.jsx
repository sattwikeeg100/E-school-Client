import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesMore({
  imgsrc = 'images/Cimg1.jpg',
  domain = "Explore More Such Amazing Courses",
  descrip = "Master the essentials of machine learning with hands-on projects and real-world applications. ",
  //classDetails = "Class Details",
  ...props
}) {
  return (
    <div {...props}>
    <div className="flex flex-col items-center justify-center w-full bg-orange-50 shadow-md gap-[8px] rounded-[7px]">
      <div className="flex flex-col items-center justify-center w-full mt-[110px] p-[25px]">
            <Heading size="xl" as="h1" className="text-center">
            Explore More Such Amazing Courses
            </Heading>
      </div>
        <Button size="lg" variant="outline" className="mb-[110px] font-medium min-w-[159px]">
          Explore All Courses..
        </Button>
    </div>
    </div>
  );
}
