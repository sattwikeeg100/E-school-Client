import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesOne({
  imgsrc = 'images/Cimg6.jpg',
  domain = "App Development",
  descrip = "Master the essentials of app development and bring your innovative ideas to life on mobile platforms.",
  ...props
}) {
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
              {descrip}
            </Text>
          </div>
        </div>
        <Button size="md" variant="outline" className="mb-[20px] font-medium min-w-[159px]">
          Explore Now..
        </Button>
    </div>
    </div>
  );
}
