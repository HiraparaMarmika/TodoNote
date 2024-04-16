import React, { useReducer } from "react";
import Mytodos from "../Mytodos/Mytodos";
import Addtodo from "../Addtodo/Addtodo";
import Form from "../Form/Form";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import Mycontext from "../../context/context";
import Post from "../Post";
import { toast } from "react-toastify";
const getdata = () => {
  const tonotes = JSON.parse(localStorage.getItem("todonote"));
  if (tonotes) {
    return tonotes;
  } else {
    return [];
  }
};
export default function Home() {
  const intialstate = [{ complete: false }];

  const reducer = (state, action) => {
    console.log(state, action);

    return state;
  };

  const [state, despatch] = useReducer(reducer, intialstate);

  const { mode } = useContext(Mycontext);
  const [formData, setFormData] = useState(getdata);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  // const completeHandler = (complete) => {
  //   const completeId = formData.map((item) => {
  //     if (complete == item.id) {
  //       return { ...item, complete: !item.complete };
  //     }
  //     return item;
  //   });
  //   setFormData(completeId);
  //   console.log(completeId);
  // };
  const formdataHandler = (alldata) => {
    setFormData((prev) => {
      return [
        ...prev,
        { todonote: alldata.todonote, id: uuid(), complete: false },
      ];
    });
    toast.success(" Data Added Successfully!");

    localStorage.setItem("todonote", JSON.stringify(formData));
  };

  useEffect(() => {
    localStorage.setItem("todonote", JSON.stringify(formData));
  }, [formData]);
  const deleteHandler = (id) => {
    const deleteData = formData.filter((item) => id !== item.id);
    setFormData(deleteData);
  };

  const editHandler = (id) => {
    setIsEdit(true);
    const editData = formData.filter((item) => id === item.id);
    console.log(editData);
    setEditTodo(editData);
  };

  const onEdit = (data) => {
    setFormData(data);
    setIsEdit(false);
  };
  return (
    <>
      <div className={`${mode === "dark" ? "todo-list" : "todo-listwhite "}`}>
        <div
          className={`${
            mode === "dark" ? "todolist-box" : " todolist-box-white "
          }`}
        >
          <Mytodos />
          <Form
            formdataHandler={formdataHandler}
            isEdit={isEdit}
            editTodo={editTodo}
            formData={formData}
            setFormData={setFormData}
            onEdit={onEdit}
          />
          {formData.length > 0 ? (
            <div className="todonote">
              {formData.map((item) => {
                return (
                  <Addtodo
                    key={item.id}
                    todonote={item.todonote}
                    deleteHandler={() => deleteHandler(item.id)}
                    // completeHandler={() => completeHandler(item.id)}
                    // complete={item.complete}
                    editHandler={() => editHandler(item.id)}
                  />
                );
              })}
            </div>
          ) : (
            <h1 style={{ color: "white", textAlign: "center" }}>
              No data available....
            </h1>
          )}
        </div>
      </div>
      {/* <Post /> */}
    </>
  );
}
