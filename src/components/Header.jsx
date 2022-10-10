import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home Page</Link>
      </div>
      <div>
        <Link to={"/login"}>Login Page</Link>
      </div>
    </div>
  );
};

export default Header;
