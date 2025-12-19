import { Link, Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav className="space-x-4 mb-2">
        <Link to="details" className="text-blue-500 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          Settings
        </Link>
      </nav>

      <hr className="mb-4" />

      {/* Nested routes rendered here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Optional: default outlet for other nested routes */}
      <Outlet />
    </div>
  );
}
