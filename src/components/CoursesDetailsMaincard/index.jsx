import React from "react";
import { Button, Img, Heading, RatingBar } from "..";

export default function EduviCoursesDetailsMaincard({
  courseimage,
  coursename,
  price,
  isaddedtobag,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[89%] gap-[15px]">
        <div className="flex flex-row justify-start w-[31%]">
          <Img src={courseimage} alt="image_one" className="w-full object-cover rounded-[10px]" />
        </div>
        <div className="flex flex-col items-start justify-start w-[67%] gap-3">
          <Heading size="md" as="h1">
            {coursename}
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={20}
            className="flex justify-between w-28"
          />
          <Heading size="md" as="h2" className="!text-deep_orange-400">
            {price}
          </Heading>
        </div>
      </div>
      <Button color={isaddedtobag? "red_300_01" : "red_50"} size="lg" className="w-11 !rounded-md">
        <Img src={isaddedtobag? "images/img_shopping_bag_24_white_a700.svg" : "images/img_shopping_bag_24.svg"} />
      </Button>
    </div>
  );
}
