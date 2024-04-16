import * as Yup from "yup";

export const signupscema = Yup.object({
  name: Yup.string().min(2).max(25).required("enter your name please!"),
  email: Yup.string().email().required("enter your email please!"),
  password: Yup.string().min(6).required("enter your password!"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password not match!"),
});

export const loginscema = Yup.object({
  email: Yup.string().email().required("enter your email "),
  password: Yup.string().min(6).required("enter password"),
});
