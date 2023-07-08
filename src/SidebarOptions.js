import React from "react";

function SidebarOptions({ Icon, title, count, Selected }) {
  return (
    <>
      <div className="   mb-3">
        <div
          className={`flex flex-row     text-gray-500 items-center pr-3 rounded-r-full justify-between hover:bg-red-50  hover:text-red-800 ${
            Selected && "bg-red-50  text-red-800"
          } `}
        >
          <div className="flex flex-row items-center ml-3 ">
            <Icon />
            <h2 className=" text-sm   pl-2 ">{title}</h2>
          </div>
          <p>{count}</p>
        </div>
      </div>
    </>
  );
}

export default SidebarOptions;
