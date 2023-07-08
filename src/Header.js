import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { getAuth, signOut } from "firebase/auth";
import logo from "./image/logo.png";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(dispatch(logout()))
      .catch((error) => {
        alert(error.message);
      });
  };
  // useEffect(() => {
  //   setDP(user.photoUrl);
  // }, []);
  return (
    <>
      <div className=" ">
        {/* header left  */}
        <div className="flex items-center pr-3 justify-between  ">
          <div className="flex items-center">
            <IconButton>
              <MenuIcon className="text-gray-600" />
            </IconButton>
            <img src={logo} className=" w-24" alt="" />
          </div>

          <div className=" bg-gray-100 pl-2 flex basis-2/4  items-center  rounded-md ">
            <SearchIcon className=" text-gray-600 " />{" "}
            <input
              className=" bg-gray-100 py-3 pl-1  w-full  focus:outline-none"
              placeholder="Search mail"
              type="text"
            />
            <ArrowDropDownIcon className="text-gray-600  " />
          </div>

          {/* header right */}
          <div className="flex items-center ">
            <IconButton>
              <AppsRoundedIcon className=" text-gray-600 " />
            </IconButton>
            <IconButton>
              {" "}
              <NotificationsRoundedIcon
                fontSize="small"
                className=" text-gray-600   "
              />
            </IconButton>
            <div className="" onClick={signout}>
              {/* {dp.map(({ id, key, data: { photoUrl } }) => (
                <Avatar
                  sx={{ width: 36, height: 36 }}
                  src={photoUrl}
                  id={photoUrl}
                  key={photoUrl}
                  className=" text-sm"
                />
              ))} */}
              <Avatar
                sx={{ width: 36, height: 36 }}
                src={user.photoUrl}
                className=" text-sm"
              />
            </div>
          </div>
        </div>
        <hr className=" border-gray-100" />
      </div>
    </>
  );
}
export default Header;
