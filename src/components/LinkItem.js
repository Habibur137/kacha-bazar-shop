import React, { useState } from "react";

const LinkItem = ({ item }) => {
  const [itemOpen, setItemOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between hover:bg-[#F9FAFB] items-center py-1 px-2 rounded">
        <span
          className="hover:text-[#10B981] flex items-center gap-3"
          onClick={() => setItemOpen(!itemOpen)}
        >
          <img className="w-4 h-4" src={item.image} alt="" />
          {item.name}
        </span>
        <span>{itemOpen ? <item.downArrow /> : <item.rightArrow />}</span>
      </div>
      {/* subitem  */}
      {itemOpen && (
        <div className="text-sm py-3 ml-4">
          <p className="hover:text-[#10B981]">-{item.subItemOne}</p>
          {item.subItemTwo && (
            <p className="hover:text-[#10B981]">-{item.subItemTwo}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkItem;
