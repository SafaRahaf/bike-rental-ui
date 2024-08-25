import BikeManagement from "../pages/admin/BikeManagement";
import Dashboard from "../pages/admin/Dashboard";
import MyProfile from "../pages/admin/MyProfile";
import UserManagement from "../pages/admin/UserManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Bike Management",
    path: "bikeManagement",
    element: <BikeManagement />,
  },
  {
    name: "User Management",
    path: "userManagement",
    element: <UserManagement />,
  },
  {
    name: "Profile",
    path: "profile",
    element: <MyProfile />,
  },
];
