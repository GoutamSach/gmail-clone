import React from "react";
import EmailListOptions from "./EmailListOptions";
import EmailSection from "./EmailSection";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function MailHeaderSection() {
  return (
    <>
      <EmailListOptions />

      <div className=" flex flex-row justify-start  px-2 mt-1">
        <div className="">
          <EmailSection
            Icon={InboxIcon}
            title={"Primary"}
            color={" text-red-700 "}
            borderColor={"border-red-700"}
            Selected={true}
          />
        </div>

        <div className="">
          <EmailSection
            Icon={PeopleIcon}
            title={"Social"}
            color={" text-blue-700 "}
            borderColor={"border-blue-700"}
          />
        </div>

        <div className="">
          <EmailSection
            Icon={LocalOfferIcon}
            title={"Promotions"}
            color={" text-green-700 "}
            borderColor={"border-green-700"}
          />
        </div>
      </div>
    </>
  );
}

export default MailHeaderSection;
