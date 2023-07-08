import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Checkbox, IconButton } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

function EmailRow({ title, subject, description, time, id }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const selectedMail = () => {
    navigate("/mailbody");
    const dataObject = { title, subject, description, time, id };

    dispatch(selectMail(dataObject));
    console.log(selectMail.title);
  };

  return (
    <>
      <div onClick={selectedMail} className=" ">
        <div className="  cursor-pointer flex flex-row  items-center border border-gray-100   hover:shadow-lg mr-2">
          <div className="">
            <Checkbox />
            <IconButton>
              <StarBorderIcon className=" text-gray-600" />
            </IconButton>
            <IconButton>
              <LabelImportantIcon className=" text-gray-600" />
            </IconButton>
          </div>
          <h2 className=" font-bold pr-24">{user?.dispalyName}</h2>
          <div className=" flex flex-row justify-between flex-1 items-center  pr-2">
            <div className=" flex    flex-row items-center  ">
              <p className="font-bold ">{subject} &nbsp;</p>
              <p className=" text-gray-600 text-sm flex items-center  lg:w-40 w-0 truncate overflow-hidden">
                -&nbsp;{description}
              </p>
            </div>
            <p className="  text-xs font-bold ">{time}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailRow;
