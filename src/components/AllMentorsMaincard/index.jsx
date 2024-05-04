import React from "react";

export default function AllMentorsMaincard({
  image ,
  name ,
  email
}) {
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md overflow-hidden sm:w-72">
      <div className="h-72 sm:h-56">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
}
