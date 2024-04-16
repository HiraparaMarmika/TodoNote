import React from "react";
import "./Addtodo.css";
import { FaCheckSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
export default function Addtodo(props) {
  return (
    <>
      <div className="todo-note">
        <p className={`${props.complete && "check-icon"}`}>{props.todonote}</p>
        <div className="todo-icons">
          <FaCheckSquare
            className="checkicon"
            onClick={props.completeHandler}
          />
          <FaPenToSquare className="penicon" onClick={props.editHandler} />
          <MdDelete className="deleteicon" onClick={props.deleteHandler} />
        </div>
      </div>
    </>
  );
}
