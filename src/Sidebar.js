import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from "@mui/material";
import { sendMessageOpen } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" mt-4">
        <button
          onClick={() => dispatch(sendMessageOpen())}
          className="text-gray-600 flex items-center p-2  gap-1 rounded-full   shadow-md  shadow-gray-400 ml-3 active:shadow-inner  "
        >
          <AddIcon />
          Compose
        </button>
      </div>
      <div className="mt-5">
        <SidebarOptions
          Selected={true}
          Icon={InboxIcon}
          title="Inbox"
          count="21"
        />
        <SidebarOptions Icon={StarIcon} title="Starred" count="" />
        <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" count="" />
        <SidebarOptions Icon={LabelImportantIcon} title="Important" count="" />
        <SidebarOptions Icon={NearMeIcon} title="Sent" count="" />
        <SidebarOptions Icon={NoteIcon} title="Drafts" count="" />
        <SidebarOptions Icon={ExpandMoreIcon} title="More" count="" />
      </div>
      <div className=" flex flex-row justify-around text-gray-500 pl-2     ">
        <IconButton>
          <PersonIcon />
        </IconButton>{" "}
        <IconButton>
          <DuoIcon />
        </IconButton>{" "}
        <IconButton>
          <LocalPhoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
