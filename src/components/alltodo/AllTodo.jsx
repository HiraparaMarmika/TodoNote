import React, { useContext } from "react";
import "./AllTodo.css";
import Mycontext from "../../context/context";

export default function AllTodo(props) {
  const { mode } = useContext(Mycontext);
  return (
    <>
      <div className={`${mode === "dark" ? "todo-list" : "todo-listwhite "}`}>
        <div className="alltodopage">
          <h1
            className={`${
              mode === "dark" ? "alltodoheading" : "alltodoheading-black "
            }`}
          >
            List of ToDos
          </h1>
          {props.data.map((items) => (
            <div
              key={items.id}
              className={`${
                mode == "dark" ? "todoall-list " : "todoall-list-light"
              }`}
            >
              <div>{items.todo}</div>
              <div className="todo-complete">
                <button
                  className={`${items.completed ? "completed" : "pending"}`}
                >
                  {`${items.completed ? "completed" : "pending"}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
