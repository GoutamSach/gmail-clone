import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendMessageClose } from "./features/mailSlice";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const mail = collection(db, "mails");

    await setDoc(doc(mail), {
      to: data.to,
      subject: data.subject,
      message: data.Message,
      timestamp: serverTimestamp(),
    });
    dispatch(sendMessageClose());
  };
  return (
    <div>
      <div className=" border  rounded-lg shadow-md fixed w-96 right-0 bottom-0">
        <form
          name="forms"
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col"
        >
          <div className=" bg-slate-800 text-white   flex flex-row justify-between rounded-tl-lg px-2  py-1 items-center">
            <h2 className="">New Message</h2>
            <IconButton onClick={() => dispatch(sendMessageClose())}>
              <CloseIcon className=" text-white" />
            </IconButton>
          </div>
          <input
            name="to"
            placeholder="To"
            type="email"
            className=" pl-2 py-3"
            {...register("to", { required: true })}
          />
          {errors.to && (
            <p className=" text-xs  text-red-500">Email is required!</p>
          )}

          <hr />
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            className=" pl-2 py-3"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className=" text-xs  text-red-500">Subject is required!</p>
          )}
          <hr />
          <textarea
            name="Message"
            placeholder="Message"
            type="text"
            className=" pl-2 pt-3 pb-28"
            {...register("Message", { required: false })}
          />

          <hr />
          <div className="bg-slate-800 text-white    pl-2 py-3">
            <button className=" bg-blue-600 px-5 rounded py-2 ">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMail;
