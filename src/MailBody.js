import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { openSelectedMail } from "./features/mailSlice";

function MailBody() {
  const selectedMail = useSelector(openSelectedMail);
  const navigate = useNavigate();

  return (
    <>
      <div className=" ">
        <div className=" flex flex-row justify-between py-2 px-2 ">
          <div className="">
            <IconButton onClick={() => navigate("/")}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="">
            <IconButton>
              <UnfoldMoreIcon />
            </IconButton>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col  h-auto   ">
        <div className=" bg-gray-100   ">
          <div className=" bg-white border  shadow-lg border-none h-auto m-5  px-5 ">
            <div className="flex flex-row justify-between items-center  py-8 ">
              <div className=" flex flex-row items-center space-x-2">
                <h2 className=" text-xl  font-semibold ">
                  {selectedMail?.subject}
                </h2>
                <LabelImportantIcon className=" text-amber-500" />
                <p>{selectedMail?.title}</p>
              </div>
              <p className=" text-gray-600  text-xs">{selectedMail?.time}</p>
            </div>
            <div className="pb-4 text-clip overflow-hidden ">
              {selectedMail?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailBody;
