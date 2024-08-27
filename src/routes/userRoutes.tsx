import BikeManagement from "../pages/user/BikeManagement";
import RentalMenagement from "../pages/user/rentalManagement/RentalMenagement";
import Profile from "../pages/user/Profile";
import { About } from "../pages/aboutUs";
import { MainHome } from "../pages/home";

export const userPaths = [
  {
    path: "",
    element: <MainHome />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "bikeManagement",
    element: <BikeManagement />,
  },
  {
    path: "rentalManagement",
    element: <RentalMenagement />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
