import { logOut } from "../../services/auth";

export default function LogOutButton() {
  const handleLogOut = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <button
      onClick={handleLogOut}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Log Out
    </button>
  );
}
