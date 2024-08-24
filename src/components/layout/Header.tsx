import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { SecondColor } from "../helpers/DefaultStyles";
import Logo from "../../assets/logo.png";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header
      className="flex items-center"
      style={{ backgroundColor: SecondColor }}
    >
      <div className="flex-1">
        <Title level={3} className="m-0">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <img src={Logo} alt="logo" className="h-8 w-auto" />
            <span
              className="text-lg font-semibold mt-2"
              style={{ color: "white" }}
            >
              Bike Rental
            </span>
          </Link>
        </Title>
      </div>
      <Menu
        mode="horizontal"
        className="flex-2 justify-end"
        style={{ backgroundColor: SecondColor }}
      >
        <Menu.Item key="home">
          <Link className="text-white" to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link className="text-white" to="/user/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="bikeManagement">
          <Link className="text-white" to="/user/bikeManagement">
            Bike Management
          </Link>
        </Menu.Item>
        <Menu.Item key="rentalManagement">
          <Link className="text-white" to="/user/rentalManagement">
            Rental Management
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link className="text-white" to="/user/profile">
            👩‍💼 Profile
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
