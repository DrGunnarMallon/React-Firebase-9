import { NavLink } from "react-router-dom";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

// styles and images
import "./Navbar.css";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      {user && <div>Hello, {user.displayName}</div>}
      {!user && <NavLink to="/login">Login</NavLink>}
      {!user && <NavLink to="/signup">Sign up</NavLink>}
      {user && (
        <button className="btn" onClick={handleLogout}>
          Log out
        </button>
      )}
    </div>
  );
}
