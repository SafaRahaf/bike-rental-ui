import RentalManagement from "../pages/user/rentalManagement/RentalMenagement";
import BikeManagement from "../pages/user/bikeManagement/BikeManagement";
import Profile from "../pages/user/Profile";
import { About } from "../pages/aboutUs";
import { MainHome } from "../pages/home";

export const userPaths = [
  {
    name: "",
    path: "",
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
