import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handlelogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className="login-style">
      <label htmlFor="">
        Username:{" "}
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
        <button onClick={handlelogin}>Login</button>
      </label>
    </div>
  );
};
