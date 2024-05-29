import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <form className="form">
        <p className="form-title">Sign up for an account</p>
        <div className="input-container">
          <label htmlFor="firstName">firstName</label>
          <input type="text" id="firstName" placeholder="Enter firstName" />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">lastName</label>
          <input type="text" id="lastName" placeholder="Enter lastName" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <div>
          <div className="input-container">
            <label htmlFor="age">age</label>
            <input type="number" id="age" placeholder="Enter age" />
          </div>
          <div className="input-container">
            <label htmlFor="gender">gender</label>
            <input type="text" id="gender" placeholder="Enter gender" />
          </div>
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
        <p className="signup-link">
          No account?
          <Link to="/login">login</Link>
        </p>
      </form>
    </>
  );
};

export default SignupPage;
