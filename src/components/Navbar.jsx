import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="login">Log in</Link>
      </button>
      <button>
        <Link to="signup">Sign up</Link>
      </button>
    </div>
  );
};

export default Navbar;
