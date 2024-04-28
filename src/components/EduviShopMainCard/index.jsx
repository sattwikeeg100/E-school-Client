import React from "react";
import { RatingBar, Heading, Img, Button } from "..";

export default function EduviShopMainCard({ 
    imgsrc = 'images/Cimg1.jpg', 
    title = "The Three Musketeers", 
    author = "Shakespeare",
    ratings = "5", 
    price = "$40.00", 
    isaddedtobag = "false", 
  ...props }) {

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[10px]  gap-[10px] shadow-md">
        <div className="flex flex-col items-center justify-start w-full max-w-[200px]">
          <Img src={imgsrc} alt="image" className="w-full object-cover rounded-[10px]" />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h1" className="text-lg font-semibold text-gray-900">{title} <br/> <i> Author: {author} </i></Heading>
          <Button color={isaddedtobag? "red_300_01" : "red_50"} size="lg" className="w-11 !rounded-md">
            <Img src={isaddedtobag? "images/img_shopping_bag_24_white_a700.svg" : "images/img_shopping_bag_24.svg"} />
          </Button>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h2" className="text-red-300_01">Rs. {price}</Heading>
          <RatingBar
            value={ratings}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={16}
            className="flex justify-between w-[92px]"
          />
        </div>
      </div>
    </div>
  );
}
