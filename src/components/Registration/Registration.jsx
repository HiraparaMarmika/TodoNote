import React from "react";
import "./Registration.css";
import { useFormik } from "formik";
import { signupscema } from "../../schemas";
import { Navigate, useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export default function Registration() {
  const navigatereg = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupscema,
      onSubmit: (values, action) => {
        console.log(values);
        localStorage.setItem("reg", JSON.stringify(values));
        action.resetForm();
        navigatereg("/");
      },
    });

  return (
    <>
      <div className="reg-page">
        <div className="reg-box">
          <h1>Registartion</h1>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="validation">{errors.name}</p>
            ) : null}
            <label htmlFor="email"> Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="validation">{errors.email}</p>
            ) : null}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="validation">{errors.password}</p>
            ) : null}
            <label htmlFor="confirmpassword">Password:</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Enter your password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="validation">{errors.confirmpassword}</p>
            ) : null}
            <div className="reg-btn">
              <button type="submit">Registration</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
