import React from "react";
import { RatingBar, Heading, Img } from "..";
import Skeleton from "react-loading-skeleton";

export default function EduviShopNewArrivalCard({
  loading,
  imgsrc,
  title,
  author,
  ratings,
  price,
  ...props
}) {
  return (
    <div {...props}>
      {loading ? ( // Render skeleton if loading is true
        <div className="flex flex-row justify-start items-center w-full gap-[35px] p-[21px] bg-white-A700 rounded-[10px]">
          <Skeleton
            width={150}
            height={200}
            className="w-[15%] ml-[10px] object-cover rounded-[5px]"
          />
          <div className="flex flex-col items-start justify-start w-[73%]  mr-[3px] gap-2.5">
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={100} />
          </div>
        </div>
      ) : (
        // Render actual content if loading is false
        <div className="flex flex-row justify-start items-center w-full gap-[35px] p-[21px] bg-white-A700 rounded-[10px]">
          <Img
            src={imgsrc}
            alt="popular_books"
            className="w-[15%] ml-[10px] object-cover rounded-[5px]"
          />
          <div className="flex flex-col items-start justify-start w-[73%]  mr-[3px] gap-2.5">
            <RatingBar value={ratings} />
            <Heading as="h3" className="!text-black-900_02">
              {title}, by
              <br />
              {author}
            </Heading>
            <Heading as="h4" className="!text-red-300_01">
              Rs. {price}
            </Heading>
          </div>
        </div>
      )}
    </div>
  );
}
