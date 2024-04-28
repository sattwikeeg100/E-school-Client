import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
const BooksCard = ({
    index,
    image,
    title,
    subtitle,
    price,

}) => {
    const renderSubtitle = (subtitle) => {
        const words = subtitle.split(' ');
        if (words.length > 8) {
          return (
            <>
              {words.slice(0, 8).join(' ')} ... <span className="text-blue-500 cursor-pointer">more</span>
            </>
          );
        } else {
          return subtitle;
        }
      };
  return (
    <div>
       <div key={index} className="w-96 sm:w-80 h-52 sm:48 border-2 bg-gray-100 rounded-xl px-4 py-4 overflow-hidden hover:shadow-lg">
  <div className="flex px-2">
    <div className="w-48 h-40 mr-4">
      <img src={image} alt={title} className="w-48 h-full" />
    </div>
    <div className="m-auto text-sm font-semibold">
      <p>{title}</p>
      <p className="text-gray-500">{renderSubtitle(subtitle)}</p>

      <div className="flex flex-row justify-between items-center pt-2">
      <p className="py-2 font-bold text-sm">{price}</p>
      <p className="text-xl"><FaCartShopping /></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BooksCard
