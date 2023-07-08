import React from "react";
import gmail_login from "./image/gmail_login.png";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";
import { useDispatch } from "react-redux";
import { loginn } from "./features/userSlice";

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const disptach = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        disptach(
          loginn({
            dispalyName: result.user.displayName,
            email: result.user.email,
            photoUrl: result.user.photoURL,
            id: result.user.uid,
          })
        );

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className=" bg-gray-100 h-screen w-screen flex  flex-col justify-center items-center">
        <img src={gmail_login} className="w-48" alt="" />
        <button
          onClick={signIn}
          className=" bg-blue-800  rounded-md active:scale-95  shadow-lg  text-xs py-2 px-20 mt-12 text-white"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
