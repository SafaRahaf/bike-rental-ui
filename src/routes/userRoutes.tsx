import RentalManagement from "../pages/user/rentalManagement/RentalManagement";
import BikeManagement from "../pages/user/bikeManagement/BikeManagement";
import { About } from "../pages/user/aboutUs";
import { MainHome } from "../pages/user/home";
import Profile from "../pages/user/Profile";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <MainHome />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "BikeManagement",
    path: "bikeManagement",
    element: <BikeManagement />,
  },
  {
    name: "RentalManagement",
    path: "rentalManagement",
    element: <RentalManagement />,
  },
  {
    name: "MyProfile",
    path: "profile",
    element: <Profile />,
  },
];
