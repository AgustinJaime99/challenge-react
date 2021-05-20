import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

import Swal from "sweetalert2";
import { useLocation } from "wouter";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import useUser from "../../hooks/useUser";

import ButtonFacebook from "./ButtonFacebook";

import { DotLoader } from "react-spinners";

const validationSchema = yup.object({
  email: yup
    .string("email")
    .email("invalid email address")
    .min(6, "Too short!")
    .required("email is required"),
  password: yup.string("password").required("password is required"),
});

function Login({ onLogin }) {
  const [, setLocation] = useLocation();
  const { isLogged, login, jwt, loading } = useUser();

  useEffect(() => {
    if (isLogged) {
      Swal.fire("Success!", "You're log now.", "success");
      setLocation("/");
      onLogin && onLogin();
    }
    if (jwt === undefined) {
      Swal.fire("", "Something went wrong", "error");
    }
  }, [isLogged, setLocation, onLogin, jwt]);

  return (
    <div id="login">
      <Fade>
        {loading ? (
          <DotLoader color="maroon" size={72} margin={100} />
        ) : (
          <div className="form_container">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={({ email, password }) => {
                // same shape as initial values
                login({ email, password });
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <div className="txt_field">
                    <Field name="email" className="field_form" />
                    <span className="sp"></span>
                    <label className="txt_label">E-mail</label>
                    {errors.email && touched.email ? (
                      <p className="errors_field">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="txt_field">
                    <Field
                      name="password"
                      type="password"
                      className="field_form"
                    />
                    <label className="txt_label">Password</label>
                    {errors.password && touched.password ? (
                      <p className="errors_field">{errors.password}</p>
                    ) : null}
                  </div>

                  <button type="submit" className="btn-login">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <ButtonFacebook></ButtonFacebook>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Login;
