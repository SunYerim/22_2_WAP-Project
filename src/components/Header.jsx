import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/login"}>Login Page</Link>
        <Link to={"/myaccount"}>MyAccount Page</Link>
      </div>
    </div>
  );
};

export default Header;