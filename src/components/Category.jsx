import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const Category = ({ category }) => {
  return (
    <div className="flex justify-center h-32 items-center p-3 bg-white border gap-3">
      <img className="w-7 h-7" src={category.image} alt="" />
      <div>
        <p className="font-extralight">{category.name}</p>
        <div className="flex gap-1 items-center text-gray-400">
          <MdKeyboardArrowRight />
          <p className="text-sm">{category.subItemOne}</p>
        </div>
        {category.subItemTwo && (
          <div className="flex gap-1 items-center text-gray-400">
            <MdKeyboardArrowRight />
            <p className="text-sm">{category.subItemTwo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
