// src/components/auth/LogOutButton.jsx
import { useAuth } from "../../context/AuthContext";

const LogOutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
