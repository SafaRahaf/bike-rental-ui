import BikeManagement from "../pages/admin/BikeManagement";
import Dashboard from "../pages/admin/Dashboard";
import MyProfile from "../pages/admin/MyProfile";
import UserManagement from "../pages/admin/UserManagement";

export const adminPaths = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "bikeManagement",
    element: <BikeManagement />,
  },
  {
    path: "userManagement",
    element: <UserManagement />,
  },
  {
    path: "profile",
    element: <MyProfile />,
  },
];
