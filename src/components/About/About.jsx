import React, { useContext } from "react";
import "./About.css";
import Mycontext from "../../context/context";

export default function About() {
  const { mode } = useContext(Mycontext);

  return (
    <>
      <div className={`${mode === "dark" ? "todo-list" : "todo-listwhite "}`}>
        <div className="about">
          <h1 className={`${mode === "dark" ? "text" : "text-black"}`}>
            About Todo
          </h1>
          <div className="about-text">
            <p
              className={`${
                mode === "dark" ? "about-text-para" : "about-text-para-black "
              }`}
            >
              A to-do list is a list of items that &nbsp;
              <span>need to be completed</span>. The items on the list can range
              from simple activities like replying to an email, to more complex
              tasks like creating project briefs.
            </p>
            <div>
              <p
                className={`${
                  mode === "dark" ? "about-text-para" : "about-text-para-black "
                }`}
              >
                The items on a to-do list are usually{" "}
                <span>action-oriented</span>, such as “Schedule a meet with the
                R&D team” or “Call back customer X.” Some lists include more
                abstract goals, such as “improve your time management skills” or
                “learn how to use a new software program.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
