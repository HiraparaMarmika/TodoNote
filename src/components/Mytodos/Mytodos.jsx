import React, { useContext } from "react";
import "./Mytodos.css";
import { FaCheckSquare } from "react-icons/fa";
import Mycontext from "../../context/context";

export default function Mytodos() {
  const { mode } = useContext(Mycontext);
  return (
    <>
      <div className="todo-heading">
        <p className={`${mode == "dark" ? "todopara " : "todopara-black"}`}>
          My Todos
        </p>
        <FaCheckSquare className=" todo-checkicon" />
      
      </div>
    </>
  );
}
