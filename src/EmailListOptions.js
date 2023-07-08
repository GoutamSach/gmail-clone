import { IconButton } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Checkbox from "@mui/material/Checkbox";
import EmailSection from "./EmailSection";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function EmailListOptions() {
  return (
    <>
      <div className=" flex  justify-between">
        <div className="  ">
          <Checkbox className=" text-gray-600" />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className=" ">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className=" flex flex-row">
        <EmailSection
          Icon={<InboxIcon />}
          title={"Primary"}
          Selected={true}
          color={"text-red-600"}
          borderColor={"border-red-600  "}
          Select={true}
        />
        <EmailSection
          Icon={<PeopleAltIcon />}
          title={"Social"}
          Selected={false}
          color={"text-red-600"}
          Select={false}
          className="  "
        />
        <EmailSection
          Icon={<LocalOfferIcon />}
          title={"Promotions"}
          Selected={false}
          color={"text-red-600"}
          Select={false}
        />
      </div>
    </>
  );
}

export default EmailListOptions;
