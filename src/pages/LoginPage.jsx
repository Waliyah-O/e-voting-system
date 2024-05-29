import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("endpoint.url", values);
      alert("Sigin successful!", response.data);
      setSubmitting(false);
      navigate("/dashboard"); // Redirect to the dashboard page
    } catch (error) {
      alert("Signin failed:", error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        className="form"
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <button className="submit">
          <Link to="/vote">Sign in</Link>
        </button>
        <p className="signup-link">
          No account?
          <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
