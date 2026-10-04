import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    props.setName("");
  };

  let menu;

  if (props.name === "") {
    menu = (
      <ul className="flex flex-row justify-center py-3">
        <Link to="/">
          <li className="px-8 py-4 text-xl hover:bg-gray-400 transition ease-in ">
            Home
          </li>
        </Link>
        <Link to="/login">
          <li className="px-8 py-4 text-xl hover:bg-gray-400 transition ease-in  ">
            Login
          </li>
        </Link>
        <Link to="/register">
          <li className="px-8 py-4 text-xl hover:bg-gray-400 transition ease-in ">
            Register
          </li>
        </Link>
      </ul>
    );
  } else {
    menu = (
      <ul className="flex flex-row justify-center">
        <Link to="/">
          <li className="px-8 py-4 text-xl hover:bg-gray-400 transition ease-in ">
            Home
          </li>
        </Link>
        <Link to="/login" onClick={logout}>
          <li className="px-8 py-4 text-xl hover:bg-gray-400 transition ease-in ">
            Logout
          </li>
        </Link>
      </ul>
    );
  }

  return <div>{menu}</div>;
};

export default Navbar;
