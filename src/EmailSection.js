import React from "react";

function EmailSection({ Icon, title, color, Selected, borderColor, Select }) {
  return (
    <>
      <div>
        <div className={` flex flex-col hover:cursor-pointer  `}>
          <div
            className={` flex flex-row  basis-1/3 w-44 pb-2 pl-2 pt-2  text-gray-500  hover:shadow-inner ${
              Selected && "bg-gray-100 "
            } ${Selected && color}`}
          >
            {Icon}

            <h2 className=" font-bold   ">{title}</h2>
          </div>
          <hr
            className={`border-2 w-44 ${Select && borderColor} 
                 `}
          />
        </div>
      </div>
    </>
  );
}

export default EmailSection;
