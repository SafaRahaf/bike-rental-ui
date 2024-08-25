import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "antd";
import Logo from "../../assets/logo.png";
import { SecondColor } from "../helpers/DefaultStyles";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const location = useLocation();
  const isUserPath = location.pathname.startsWith("/user");
  const isAdminPath = location.pathname.startsWith("/admin");

  // Define User and Admin menu items
  const userMenuItems = [
    {
      key: "home",
      label: (
        <Link className="text-white" to="/user">
          Home
        </Link>
      ),
    },
    {
      key: "about",
      label: (
        <Link className="text-white" to="/user/about">
          About
        </Link>
      ),
    },
    {
      key: "rentalManagement",
      label: (
        <Link className="text-white" to="/user/rentalManagement">
          Rental
        </Link>
      ),
    },
    {
      key: "bikeManagement",
      label: (
        <Link className="text-white" to="/user/bikeManagement">
          Bike
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <Link className="text-white" to="/user/profile">
          🙍🏻‍♂️
        </Link>
      ),
    },
  ];

  const adminMenuItems = [
    {
      key: "dashboard",
      label: (
        <Link className="text-white" to="/admin/dashboard">
          Dashboard
        </Link>
      ),
    },
    {
      key: "bikeManagement",
      label: (
        <Link className="text-white" to="/admin/bikeManagement">
          Bike Management
        </Link>
      ),
    },
    {
      key: "userManagement",
      label: (
        <Link className="text-white" to="/admin/userManagement">
          User Management
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <Link className="text-white" to="/admin/profile">
          🙍🏻‍♂️
        </Link>
      ),
    },
  ];

  return (
    <Header
      className="flex items-center"
      style={{ backgroundColor: SecondColor }}
    >
      <div className="flex-1">
        <Title level={3} className="m-0">
          <Link
            to={isUserPath ? "/user" : "/admin"}
            className="flex items-center space-x-2 text-white"
          >
            <img src={Logo} alt="logo" className="h-8 w-auto" />
            <span
              className="text-lg font-semibold mt-2 hidden md:block"
              style={{ color: "white" }}
            >
              Bike Rental
            </span>
          </Link>
        </Title>
      </div>
      <Menu
        mode="horizontal"
        className="flex-1 justify-end"
        style={{ backgroundColor: SecondColor }}
        items={isUserPath ? userMenuItems : adminMenuItems}
      />
    </Header>
  );
};

export default AppHeader;
