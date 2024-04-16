import React, { useEffect, useState } from "react";

export default function Post() {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState("");
  const [userId, setUserId] = useState("");
  const todoHandler = (event) => {
    setTodo(event.target.value);
  };
  const completedHandler = (event) => {
    setCompleted(event.target.value);
  };
  const userHandler = (event) => {
    setUserId(event.target.value);
  };
  const post = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, completed, userId }),
    });
    console.log(response);
    if (!response.ok) {
      console.log("Could not send data");
    } else {
      alert("data send");
      console.log(todo, completed, userId);
    }
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <form onSubmit={post}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={todoHandler}
          style={{ border: "1px" }}
        />
        <input
          type="text"
          name="completed"
          value={completed}
          onChange={completedHandler}
          style={{ border: "1px" }}
        />
        <input
          type="number"
          value={userId}
          name="userId"
          onChange={userHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
