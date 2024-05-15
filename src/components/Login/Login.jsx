import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { loginscema } from "../../schema";

const initialValues = {
  email: "",
  password: "",
};
export default function Login() {
  const userdata = JSON.parse(localStorage.getItem("reg"));
  console.log(userdata);
  const navigatelogin = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginscema,
      onSubmit: (values, action) => {
        console.log(values);
        if (
          userdata.email === values.email &&
          userdata.password === values.password
        ) {
          localStorage.setItem("login", JSON.stringify(values));
          action.resetForm();
          navigatelogin("/");
        } else {
          alert("Invalid credentials");
        }
      },
    });
  // const [loginData, setLoginData] = useState({ email: "", password: "" });
  // const navigate = useNavigate();
  // const loginDataHandler = (event) => {
  //   const { name, value } = event.target;
  //   setLoginData((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  //   localStorage.setItem("login", JSON.stringify(loginData));
  // };
  // useEffect(() => {
  //   localStorage.setItem("login", JSON.stringify(loginData));
  // }, [loginData]);
  // const loginsubmitHadler = (event) => {
  //   event.preventDefault();
  //   navigate("/");
  //   console.log(loginData);
  // };
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1>LOGIN</h1>
          <p className="login-start">Welcome back !!</p>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="EmailAddress">Email Address:</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="Your Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
            <div className="login-btn">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
