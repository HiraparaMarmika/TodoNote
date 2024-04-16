import React from "react";
import "./Model.css";
import { createPortal } from "react-dom";
export default function Model({ cancle, logout }) {
  return (
    <>
      {createPortal(
        <>
          <div className="alertback" onClick={cancle}></div>
          <div className="model">
            <div className="messagebox">
              <p>Are you sure logout this todolist!</p>
              <div className="btn">
                <div className="cancle">
                  <button onClick={cancle}>Cancle</button>
                </div>
                <div className="logout">
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("model")
      )}
    </>
  );
}
