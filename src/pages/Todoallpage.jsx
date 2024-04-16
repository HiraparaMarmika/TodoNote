import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import AllTodo from "../components/alltodo/AllTodo";
export default function Todoallpage() {
  const data = useLoaderData();
  console.log(data.todos);

  return (
    <>
      <AllTodo data={data.todos} />
    </>
  );
}
export const loader = async () => {
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  return data;
};
