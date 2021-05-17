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
          src="https://lh3.googleusercontent.com/proxy/AYQueWWVMDIvNkPjTfC_5hDNHt8eH5fwzk6g7SXJV6uzY6znWL6OvgMVV7MYY9H-Oaz9EzMEKCz6xWiGtJuarrBxyjURcAY"
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
