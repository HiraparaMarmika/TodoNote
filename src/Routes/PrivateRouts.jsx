import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouts({ children }) {
  const login = JSON.parse(localStorage.getItem("login")) || false;
  const reg = JSON.parse(localStorage.getItem("reg")) || false;

  return (
    <>
      {!reg ? (
        <Navigate to="/reg" />
      ) : reg && !login ? (
        <Navigate to="/login" />
      ) : (
        reg && login && children
      )}
    </>
  );
}
