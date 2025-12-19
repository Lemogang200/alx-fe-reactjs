import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="p-6">
      <nav className="space-x-4 mb-6">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Post 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* ✅ Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* ✅ Dynamic Route */}
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;