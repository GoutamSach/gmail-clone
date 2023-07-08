import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import MailList from "./MailList";
import SendMail from "./sendMail";
import MailBody from "./MailBody";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import EmailListOptions from "./EmailListOptions";
import Login from "./Login";
import { loginn, logout, selectUser } from "./features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const sendMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const auth = getAuth();
  const disptach = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        disptach(
          loginn({
            dispalyName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        disptach(logout);
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="  ">
          <div className=" sticky  top-0  bg-white z-50">
            <Header />
          </div>
          <div className=" flex flex-row">
            <div className=" basis-1/6  flex flex-col justify-between">
              <Sidebar />
            </div>
            <div className=" basis-5/6  ">
              <EmailListOptions />
              <Routes>
                <Route path="/MailBody" element={<MailBody />} />
              </Routes>
              <Routes>
                <Route path="/" element={<MailList />} />
              </Routes>
              {sendMessageOpen && <SendMail />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
