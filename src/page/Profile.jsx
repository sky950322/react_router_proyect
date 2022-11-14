import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <div>Wellcome</div>
      <p> {auth.user}</p>
      <button onClick={handlelogout}>
        <span class="material-icons-sharp">login</span> Logout
      </button>
    </div>
  );
};
