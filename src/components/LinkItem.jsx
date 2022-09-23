import React, { useState } from "react";
import { Link } from "react-router-dom";
const LinkItem = ({ item }) => {
  const [itemOpen, setItemOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setItemOpen(!itemOpen)}
        className="flex justify-between hover:bg-[#F9FAFB] items-center py-1 px-2 rounded  cursor-pointer"
      >
        <span className="hover:text-[#10B981] flex items-center gap-3">
          <img className="w-4 h-4" src={item.image} alt="" />
          {item.name}
        </span>
        <span>{itemOpen ? <item.downArrow /> : <item.rightArrow />}</span>
      </div>
      {/* subitem  */}

      {itemOpen && (
        <div className="text-sm py-3 ml-4 flex flex-col">
          <Link to={item.link} className="hover:text-[#10B981]">
            -{item.subItemOne}
          </Link>
          {item.subItemTwo && (
            <Link className="hover:text-[#10B981]">-{item.subItemTwo}</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkItem;
