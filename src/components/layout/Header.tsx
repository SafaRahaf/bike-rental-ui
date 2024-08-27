import { Layout, Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/authSlice";
import { useLoginMutation } from "../../redux/features/auth.api";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const location = useLocation();
  const [login, { isLoading }] = useLoginMutation();
  const isUserPath = location.pathname.startsWith("/user");
  const isAdminPath = location.pathname.startsWith("/admin");

  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const userMenuItems = [
    {
      key: "home",
      label: <Link to="/user">Home</Link>,
    },
    {
      key: "about",
      label: <Link to="/user/about">About</Link>,
    },
    {
      key: "rentalManagement",
      label: <Link to="/user/rentalManagement">Rental</Link>,
    },
    {
      key: "bikeManagement",
      label: <Link to="/user/bikeManagement">Bike</Link>,
    },
    {
      key: "profile",
      label: (
        <Link to="/user/profile">
          <UserOutlined />
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <Link className="border p-2" onClick={handleLogout} to="/login">
          Log out
        </Link>
      ),
    },
  ];

  const adminMenuItems = [
    {
      key: "dashboard",
      label: <Link to="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: "bikeManagement",
      label: <Link to="/admin/bikeManagement">Bike Management</Link>,
    },
    {
      key: "userManagement",
      label: <Link to="/admin/userManagement">User Management</Link>,
    },
    {
      key: "profile",
      label: (
        <Link to="/admin/profile">
          <UserOutlined />
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <Link className="border p-2" onClick={handleLogout} to="/login">
          Log out
        </Link>
      ),
    },
  ];

  const menuItems = isUserPath ? userMenuItems : adminMenuItems;

  return (
    <Header className="flex items-center bg-[#72445e]">
      <div className="flex-1">
        <Title level={3} className="m-0">
          <Link
            to={isUserPath ? "/user" : "/admin/dashboard"}
            className="flex items-center space-x-2"
          >
            <img src={Logo} alt="logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold mt-2 hidden md:block text-white">
              Bike Rental
            </span>
          </Link>
        </Title>
      </div>

      <Button
        className="md:hidden text-white"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        className="md:hidden"
        bodyStyle={{ backgroundColor: "#72445e" }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{
            backgroundColor: "#72445e",
            color: "white",
          }}
        />
      </Drawer>

      <Menu
        mode="horizontal"
        className="hidden md:flex flex-1 justify-end bg-[#72445e] text-white"
        items={menuItems}
      />
    </Header>
  );
};

export default AppHeader;
