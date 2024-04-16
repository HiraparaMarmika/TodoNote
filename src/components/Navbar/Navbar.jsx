import React, { useContext } from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import { LuMoon } from "react-icons/lu";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Model from "../Model/Model";
import Mycontext from "../../context/context";

export default function Navbar() {
  const { mode, toggleMode } = useContext(Mycontext);

  const Navigatelogout = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const openHandler = () => {
    setOpenModel(true);
  };
  const cancle = () => {
    setOpenModel(false);
  };
  const logout = () => {
    localStorage.removeItem("login");
    Navigatelogout("/login");
  };
  return (
    <>
      {openModel && <Model cancle={cancle} logout={logout} />}
      <div className="todo-container">
        <div className="todo-nav">
          <div className="todo-check">
            <p>TODO</p>
            <FaCheckSquare className="navcheck-icon" />
          </div>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "link" : "todo-link")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link" : "todo-link")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todoall"
                className={({ isActive }) => (isActive ? "link" : "todo-link")}
              >
                All Todos
              </NavLink>
            </li>
          </ul>
          <div className="todo-btn">
            {mode == "dark" ? (
              <BsCloudSunFill id="cloud" onClick={toggleMode} />
            ) : (
              <LuMoon id="cloudmoon" onClick={toggleMode} />
            )}
            <button onClick={openHandler}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
