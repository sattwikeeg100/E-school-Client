import React from "react";
import { Button, Text, Heading, Img } from "..";
import { useNavigate } from "react-router-dom";

export default function EduviCoursesOne({
  imgsrc = 'images/Cimg1.jpg',
  domain = "Machine Learning",
  description = "Master the essentials of machine learning with hands-on projects and real-world applications. ",
  ...props
  }) 
  {
    const navigate = useNavigate();
    const navigateCourses = () =>{
      navigate("/allcourses")
    };

    return (
      <div {...props}>
        <div className="flex flex-col items-center justify-center w-full bg-orange-50 shadow-md rounded-[7px]">
        <div className="flex flex-col items-center justify-start w-full gap-[8px] ">
            <Img src={imgsrc} alt="image" className="h-[200px] w-[300px] rounded-[7px]" />
            <div className="flex flex-col items-center justify-start w-full gap-[5px] p-[15px]">
              <Heading size="lg" as="h1" className="text-center">
                {domain}
              </Heading>
              <Text as="p" className="text-center !leading-[30px]">
                {description}
              </Text>
            </div>
          </div>
          <Button size="md" variant="outline" className="mb-[20px] font-medium min-w-[159px]" onClick={navigateCourses}>
            Explore Now..
          </Button>
      </div>
      </div>
    );
}
