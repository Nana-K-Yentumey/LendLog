import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import { useAuth } from "./context/AuthContext";
import LogOutButton from "./components/auth/LogOutButton";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          {!user && <Link to="/signup" className="mr-4">Sign Up</Link>}
          {!user && <Link to="/login" className="mr-4">Log In</Link>}
        </div>
        {user && <LogOutButton />}
      </nav>

      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
