import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Si esta autenticado retorna la propiedad children
//  En este caso el componete que engrapa...
export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  //   Aqui es donde retorna el children
  return children;
};
