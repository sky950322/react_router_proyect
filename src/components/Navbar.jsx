import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  // Inyectar estilos en el style si la condicion de activo es true
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      // textDecoration: isActive ? "none" : "underline",
    };
  };
  // Usando Context para el login
  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      <NavLink style={navLinkStyles} to="/todo">
        Todo
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}
