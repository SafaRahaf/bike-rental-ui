// import { Layout, Menu } from "antd";
// import { Link, useLocation } from "react-router-dom";
// import { Typography } from "antd";
// import Logo from "../../assets/logo.png";
// import { SecondColor } from "../helpers/DefaultStyles";
// import { useAppDispatch } from "../../redux/hooks";
// import { logout } from "../../redux/features/authSlice";
// import { useLoginMutation } from "../../redux/features/auth.api";
// import { UserOutlined } from "@ant-design/icons";

// const { Header } = Layout;
// const { Title } = Typography;

// const AppHeader = () => {
//   const location = useLocation();

//   const [login, { isLoading }] = useLoginMutation();
//   const isUserPath = location.pathname.startsWith("/user");
//   const isAdminPath = location.pathname.startsWith("/admin");

//   const dispatch = useAppDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const userMenuItems = [
//     {
//       key: "home",
//       label: <Link to="/user">Home</Link>,
//     },
//     {
//       key: "about",
//       label: <Link to="/user/about">About</Link>,
//     },
//     {
//       key: "rentalManagement",
//       label: <Link to="/user/rentalManagement">Rental</Link>,
//     },
//     {
//       key: "bikeManagement",
//       label: <Link to="/user/bikeManagement">Bike</Link>,
//     },

//     {
//       key: "profile",
//       label: (
//         <Link to="/user/profile">
//           <UserOutlined />
//         </Link>
//       ),
//     },
//     {
//       key: "bikeManagement",
//       label: (
//         <Link className=" border p-2" onClick={handleLogout} to="/login">
//           Login out
//         </Link>
//       ),
//     },
//   ];

//   const adminMenuItems = [
//     {
//       key: "dashboard",
//       label: <Link to="/admin/dashboard">Dashboard</Link>,
//     },
//     {
//       key: "bikeManagement",
//       label: <Link to="/admin/bikeManagement">Bike Management</Link>,
//     },
//     {
//       key: "userManagement",
//       label: <Link to="/admin/userManagement">User Management</Link>,
//     },

//     {
//       key: "profile",
//       label: (
//         <Link to="/admin/profile">
//           <UserOutlined />
//         </Link>
//       ),
//     },
//     {
//       key: "bikeManagement",
//       label: (
//         <Link className=" border p-2" onClick={handleLogout} to="/login">
//           Login out
//         </Link>
//       ),
//     },
//   ];

//   return (
//     <Header
//       className="flex items-center "
//       style={{ backgroundColor: SecondColor }}
//     >
//       <div className="flex-1">
//         <Title level={3} className="m-0">
//           <Link
//             to={isUserPath ? "/user" : "/admin/dashboard"}
//             className="flex items-center space-x-2 "
//           >
//             <img src={Logo} alt="logo" className="h-8 w-auto" />
//             <span
//               className="text-lg font-semibold mt-2 hidden md:block"
//               style={{ color: "white" }}
//             >
//               Bike Rental
//             </span>
//           </Link>
//         </Title>
//       </div>
//       <Menu
//         mode="horizontal"
//         className="flex-1 justify-end"
//         style={{ backgroundColor: SecondColor }}
//         items={isUserPath ? userMenuItems : adminMenuItems}
//       />
//     </Header>
//   );
// };

// export default AppHeader;

import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
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
      <Menu
        mode="horizontal"
        className="flex-1 justify-end bg-[#72445e] text-white"
        items={isUserPath ? userMenuItems : adminMenuItems}
      />
    </Header>
  );
};

export default AppHeader;
