import React from "react";
import "./Login.css";

import { auth, provider } from "./Components/firebase.js";

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="Container">
      <div className="Content">
        <img
          id="login"
          src="https://www.pngfind.com/pngs/m/73-734741_free-png-download-very-old-book-png-images.png"
        />
        <h1>Sign in Bibliophile</h1>
        <button id="button" onClick={() => signIn()}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
