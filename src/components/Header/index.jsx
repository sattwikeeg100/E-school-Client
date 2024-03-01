import React from "react";
import { Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[30px]" />
        <div className="flex flex-row justify-start items-center w-[58%] gap-6">
          <Text as="p" className="!text-gray-900 !font-medium">
            Shop
          </Text>
          <div className="flex flex-row justify-start items-center w-[22%] gap-0.5">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For School
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-6 w-6" />
          </div>
          <div className="flex flex-row justify-start items-center w-[21%] gap-0.5 py-[3px]">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For High School
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-6 w-6" />
          </div>
          <div className="flex flex-row justify-start items-center w-[16%] gap-0.5 py-[3px]">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For College
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_five" className="h-6 w-6" />
          </div>
          <div className="flex flex-row justify-start items-center w-[13%] gap-0.5 py-[3px]">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              Courses
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_seven" className="h-6 w-6" />
          </div>
          <Text as="p" className="!text-gray-900 !font-medium">
            Mentors
          </Text>
        </div>
        <div className="flex flex-row justify-between w-[21%]">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              Cart (0)
            </Text>
            <Img src="images/img_shopping_bag_24.svg" alt="shoppingbagtwen" className="h-[30px] w-[30px]" />
          </div>
          <div className="flex flex-row justify-start items-center pl-[3px] gap-2.5">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              My Account
            </Text>
            <Img src="images/img_profile_24_outline.svg" alt="profiletwentyfo" className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
