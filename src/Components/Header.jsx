import React from "react";

function Header({ user }) {
  return (
    <div style={{ height: "5px", width: "100%" }}>
      <img src={user.photo} style={{}} />
    </div>
  );
}

export default Header;
