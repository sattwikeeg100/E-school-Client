import React from "react";
import { Text, Heading, Img, Button, Input } from "./..";

export default function Footer() {
  return (
  <>
  <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-between items-center w-full p-[50px] bg-black-900_01  rounded-[20px]">
          <div className="flex flex-col items-start justify-start w-[16%] gap-[57px] my-[11px]">
            <Img src="images/img_ellipse_169.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
            <Img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] ml-[127px] rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] ml-[30px] rounded-[50%]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[49%] gap-10">
            <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
              <Heading size="3xl" as="h1" className="!text-white-A700 !font-metropolis text-center leading-[55px]">
                Subscribe For Get Update
                <br />
                Every New Courses
              </Heading>
              <Text as="p" className="!text-white-A700_b2 text-center">
                20k+ students daily learn with Educatsy. Subscribe for new courses.
              </Text>
            </div>
            <div className="flex flex-row justify-center w-full">
              <Input name="email" placeholder="enter your email" className="w-[77%] font-medium" />
              <Button size="3xl" className="rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[138px]">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-[16%] gap-[57px]">
            <Img
              src="images/img_ellipse_166.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[30px] rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_167.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[127px] rounded-[50%]"
            />
            <Img src="images/img_ellipse_168.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
          </div>
        </div>
      </div>
    
 <div className="flex justify-between w-[99%] gap-56 text-xl py-8 bg-orange-100 mx-18">
  <div className="flex flex-col justify-start mx-8">
    <p className="mb-1">©2024 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂</p>
    <p>𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂 is a registered</p>
    <div className="my-4 text-sm">
    <p>Design and created by</p>
    <p>souvik</p>
    <p>rupal</p>
    <p>satwikee</p>
    </div>
   
  </div>

  <div className="flex flex-col justify-start pt-0.5">
    <h5 className="mb-3 text-3xl bold">Community</h5>
    <div className="flex flex-col items-start justify-center w-full gap-y-5">
      <p className="mt-0.5">Learners</p>
      <p>Partners</p>
      <p>Developers</p>
      <p>Transactions</p>
      <p>Blog</p>
      <p>Teaching Center</p>
    </div>
  </div>
  <div className="flex flex-col items-start justify-start w-[14%] gap-y-4">
    <h5 className="mb-3 text-3xl">Quick links</h5>
    <div className="flex flex-col items-start justify-center w-full gap-y-5">
      <p className="mt-0.5">Home</p>
      <p>Professional Education</p>
      <p>Courses</p>
      <p>Admissions</p>
      <p>Testimonial</p>
      <p>Programs</p>
    </div>
  </div>
  <div className="flex flex-col items-start justify-start w-[14%] gap-y-4">
    <h5 className="mb-3 text-3xl">More</h5>
    <div className="flex flex-col items-start justify-start w-full gap-y-4 py-1">
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
