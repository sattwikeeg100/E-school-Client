import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function AllCoursesMaincard({
  imgsrc,
  title,
  slug,
  ispaid,
  price,
  level,
  content_duration,
  subject,
  published_date,
}) {
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md overflow-hidden sm:w-56 sm:h-56">
      <Img
        src={imgsrc}
        alt="image"
        className="h-[200px] w-full rounded-[5px] sm:h-16 sm:px-auto"
      />

      <div className="p-4 gap-5 flex flex-col justify-between sm:text-sm">
        <Heading>{title}</Heading>
        <div>
          <p>{subject}</p>
          <p>{price}</p>
          
        </div>
        <Button
          size="md"
          variant="outline"
          className="mb-[20px] font-medium min-w-[159px] sm:w-28"
        >
          <a href={`/course/${slug}`}>Go to course</a>
        </Button>
      </div>
    </div>
  );
}
