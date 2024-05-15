import React, { useEffect } from "react";
import "./Form.css";
import { useState } from "react";

export default function Form({
  formdataHandler,
  isEdit,
  editTodo,
  formData,
  setFormData,
  onEdit,
}) {
  const [alldata, setAlldata] = useState({
    todonote: "",
  });

  const allDataHandler = (event) => {
    const { name, value } = event.target;
    setAlldata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (alldata.todonote == "") {
      return;
    }
    formdataHandler(alldata);
    setAlldata({
      todonote: "",
    });
  };
  // console.log(editTodo);
  // console.log(alldata);

  useEffect(() => {
    setAlldata((prev) => {
      return { ...prev, todonote: editTodo[0]?.todonote };
    });
  }, [editTodo]);

  const editTaskHandler = (e) => {
    e.preventDefault();
    const data = [...editTodo];
    const index = formData.findIndex((i) => i.id === data[0].id);
    formData[index] = { id: data[0].id, todonote: alldata.todonote };
    setFormData(formData);
    localStorage.setItem("todonote", JSON.stringify(formData));
    onEdit(formData);
    setAlldata({ todonote: "" });
  };

  return (
    <>
      <form onSubmit={isEdit ? editTaskHandler : submitHandler}>
        <div className="addtodo">
          <input
            type="text"
            placeholder="Enter your task... "
            onChange={allDataHandler}
            value={alldata?.todonote}
            name="todonote"
          />
          <button>{isEdit ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  );
}
